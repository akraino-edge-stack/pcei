from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer
import SocketServer
import json

import socket
from time import sleep

import cgi
import random
import time
import sys
import iothub_client
# pylint: disable=E0611
from iothub_client import IoTHubModuleClient, IoTHubClientError, IoTHubTransportProvider
from iothub_client import IoTHubMessage, IoTHubMessageDispositionResult, IoTHubError

# messageTimeout - the maximum time in milliseconds until a message times out.
# The timeout period starts at IoTHubModuleClient.send_event_async.
# By default, messages do not expire.
MESSAGE_TIMEOUT = 10000

# global counters
RECEIVE_CALLBACKS = 0
SEND_CALLBACKS = 0

# Choose HTTP, AMQP or MQTT as transport protocol.  Currently only MQTT is supported.
PROTOCOL = IoTHubTransportProvider.MQTT

# Callback received when the message that we're forwarding is processed.
def send_confirmation_callback(message, result, user_context):
    global SEND_CALLBACKS
    print ( "Confirmation[%d] received for message with result = %s" % (user_context, result) )
    map_properties = message.properties()
    key_value_pair = map_properties.get_internals()
    print ( "    Properties: %s" % key_value_pair )
    SEND_CALLBACKS += 1
    print ( "    Total calls confirmed: %d" % SEND_CALLBACKS )


# receive_message_callback is invoked when an incoming message arrives on the specified 
# input queue (in the case of this sample, "input1").  Because this is a filter module, 
# we will forward this message onto the "output1" queue.
def receive_message_callback(message, hubManager):
    global RECEIVE_CALLBACKS
    message_buffer = message.get_bytearray()
    size = len(message_buffer)
    print ( "    Data: <<<%s>>> & Size=%d" % (message_buffer[:size].decode('utf-8'), size) )
    map_properties = message.properties()
    key_value_pair = map_properties.get_internals()
    print ( "    Properties: %s" % key_value_pair )
    RECEIVE_CALLBACKS += 1
    print ( "    Total calls received: %d" % RECEIVE_CALLBACKS )
    hubManager.forward_event_to_output("output1", message, 0)
    return IoTHubMessageDispositionResult.ACCEPTED


class HubManager(object):

    def __init__(
            self,
            protocol=IoTHubTransportProvider.MQTT):
        self.client_protocol = protocol
        self.client = IoTHubModuleClient()
        self.client.create_from_environment(protocol)

        # set the time until a message times out
        self.client.set_option("messageTimeout", MESSAGE_TIMEOUT)
        
        # sets the callback when a message arrives on "input1" queue.  Messages sent to 
        # other inputs or to the default will be silently discarded.
        self.client.set_message_callback("input1", receive_message_callback, self)

    # Forwards the message received onto the next stage in the process.
    def forward_event_to_output(self, outputQueueName, event, send_context):
        self.client.send_event_async(
            outputQueueName, event, send_confirmation_callback, send_context)

# *******************************************************************************************************
def run():

    hub_manager = HubManager()

    TCP_IP = '0.0.0.0'
    TCP_PORT = 50005
    BUFFER_SIZE = 500  # Normally 1024, but we want fast response

    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    sock.bind((TCP_IP, TCP_PORT))

    #sock.listen(1)
    #conn, addr = sock.accept()

    while 1:
        sock.listen(1)
        print ( "Listening" )
        conn, addr = sock.accept()
        print ( 'Connection address:', addr )
        data = conn.recv(BUFFER_SIZE)
        # if not data: return 
        print ( "received data:", data )
        jData = json.loads(data)
        print ( jData )
        appData=jData["pdu"]
        print ( appData )
        tempData = appData[12:16]
        print ( tempData )
        tempDataDec = int(tempData, 16)/10
        tempDataDecF = tempDataDec * 1.8 + 32
    
        humidData = appData[20:22]
        print ( humidData )
        humidDataDec = int(humidData, 16)/2
    
        pressData = appData[4:8]
        print ( pressData )
        pressDataDec = int(pressData, 16)/10
        device_eui = jData["devEui"]
        txtime = jData["txtime"]
    # print "\nAppData: %s" % appData
    # print "\nTemperature in Celsius: %s" % tempDataDec
    # print "\nTemperature in Fahrenheit: %s" % tempDataDecF
    # print "\nHUMIDITY Percents: %s" % humidDataDec
    # print "\nBAROMETRIC PRESSURE in Millibars: %s" % pressDataDec
    # print "\nDevice EUI: %s" % device_eui
       
    # payld = json.dumps({'Device EUI': device_eui, 'Temperature': tempDataDecF, \
    #                     'Humidity': humidDataDec, 'Pressure': pressDataDec, 'Count': LORA_READ_COUNT})

        packet = json.dumps({'TIMESTAMP': txtime, 'Device EUI': device_eui, 'Temperature': tempDataDecF, \
                        'Humidity': humidDataDec, 'Pressure': pressDataDec})
        print ( packet )

        iot_hub_message = IoTHubMessage(packet)
        #iot_hub_message = IoTHubMessage(json.dumps(packet))
        hub_manager.forward_event_to_output("output1", iot_hub_message, 0)
        print('sent!')

        #conn.close()

if __name__ == "__main__":
    run()