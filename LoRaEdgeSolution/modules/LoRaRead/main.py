import socket
from time import sleep
import json
import iothub_client
import sys
# pylint: disable=E0611
from iothub_client import IoTHubModuleClient, IoTHubClientError, IoTHubTransportProvider
from iothub_client import IoTHubMessage, IoTHubMessageDispositionResult, IoTHubError

TCP_IP = '0.0.0.0'
TCP_PORT = 50005
BUFFER_SIZE = 500  # Normally 1024, but we want fast response
LORA_READ_COUNT = 1

PROTOCOL = IoTHubTransportProvider.MQTT
RECEIVE_CALLBACKS = 0
SEND_CALLBACKS = 0
MESSAGE_TIMEOUT = 10000

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
# def receive_message_callback(sock, hubManager):
#     global RECEIVE_CALLBACKS
#     message_buffer = GetLoRaData(sock)
#     size = len(message_buffer)
#     print ( "    Data: <<<%s>>> & Size=%d" % (message_buffer[:size].decode('utf-8'), size) )
#     # map_properties = message.properties()
#     # key_value_pair = map_properties.get_internals()
#     # print ( "    Properties: %s" % key_value_pair )
#     RECEIVE_CALLBACKS += 1
#     print ( "    Total calls received: %d" % RECEIVE_CALLBACKS )
#     hubManager.forward_event_to_output("output1", message_buffer, 0)
#     return IoTHubMessageDispositionResult.ACCEPTED

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

def GetLoRaData(sock):
    # global BUFFER_SIZE
    # global LORA_READ_COUNT
    # global s
 #   global LORA_READ_COUNT
 #   LORA_READ_COUNT +=1
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
    # print "\nAppData: %s" % appData
    # print "\nTemperature in Celsius: %s" % tempDataDec
    # print "\nTemperature in Fahrenheit: %s" % tempDataDecF
    # print "\nHUMIDITY Percents: %s" % humidDataDec
    # print "\nBAROMETRIC PRESSURE in Millibars: %s" % pressDataDec
    # print "\nDevice EUI: %s" % device_eui
       
    # payld = json.dumps({'Device EUI': device_eui, 'Temperature': tempDataDecF, \
    #                     'Humidity': humidDataDec, 'Pressure': pressDataDec, 'Count': LORA_READ_COUNT})

    payld = json.dumps({'Device EUI': device_eui, 'Temperature': tempDataDecF, \
                        'Humidity': humidDataDec, 'Pressure': pressDataDec})
    print ( payld )

    conn.close()
    return payld  

def main():
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.bind((TCP_IP, TCP_PORT))
    try:
        print ( "\nPython %s\n" % sys.version )
        print ( "IoT Hub Client for Python" )

        hub_manager = HubManager()



        print ( "Starting the IoT Hub Python sample using protocol")
        print ( "The sample is now waiting for messages and will indefinitely.  Press Ctrl-C to exit. ")

        while True:
            # receive_message_callback(s, hub_manager)
            print (' starting send ')
            iot_hub_message = json.dumps(GetLoRaData(s))
            print ( iot_hub_message )
            hub_manager.forward_event_to_output("output1", iot_hub_message, 0)
            print('sent!')

            sleep(5)

    except IoTHubError as iothub_error:
        print ( "Unexpected error %s from IoTHub" % iothub_error )
        return
    except KeyboardInterrupt:
        print ( "IoTHubModuleClient sample stopped" )

if __name__ == '__main__':
    main()
