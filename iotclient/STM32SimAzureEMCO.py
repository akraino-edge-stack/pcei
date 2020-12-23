'''
Created on Feb 21, 2019

@author: oberzin
'''
import socket
from time import sleep
import json
import os
import random
import datetime
import struct

SERVER_ADDRESS = '10.121.7.149'
SERVER_PORT = 30834
BUFFER_SIZE = 500
DEVICE_EUI = '0004A30B001BAAAA'
COUNT = 0;
INTERVAL = 10
STM_PLOAD = '007327E7016700CB02683C'

def client_send(SERVER, PORT, BUFFER):
    TCP_IP = SERVER
    TCP_PORT = PORT
    BUFFER_SIZE = BUFFER  # Normally 1024, but we want fast response

    global DEVICE_EUI
    global COUNT

#"{"Count": 53227, "Temperature": 71.6, "Device EUI": "0004A30B001B5E47"}"

    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
#s.bind((TCP_IP, TCP_PORT))
    s.connect((TCP_IP, TCP_PORT))

    COUNT = COUNT + 1
    #s.connect((TCP_IP, TCP_PORT))
    now = datetime.datetime.now()
    curr_ts = now.strftime('%Y-%m-%dT%H:%M:%S') + ('-%02d' % (now.microsecond / 10000))
    print curr_ts
#         COUNT +=
#     message = {
#             'Device EUI': DEVICE_EUI,
#             'Temperature': '{0}'.format(random.randrange(20, 25)),
#             'Count': '{0}'.format(COUNT)
#         } 
    tempDataDec = random.randint(21, 23) * 10
    tempDataHex = hex(tempDataDec)
    tempDataHexStr = str(bytearray([tempDataDec])).encode('hex')
    print tempDataHexStr
    
    humidDataDec = random.randint(49, 51) * 2
    humidDataHex = hex(humidDataDec)
    humidDataHexStr = str(bytearray([humidDataDec])).encode('hex')
    print humidDataHexStr
    
    pressDataDec = random.randint(30, 33)
    pressDataHex = hex(pressDataDec)
    pressDataHexStr = str(bytearray([pressDataDec])).encode('hex')
    print pressDataHexStr
    
    raw_message = {
                    "ack":"false","channel":6,"datarate":3,"devClass":"A",
                    "devEui":DEVICE_EUI,"freq":903.5,"gwEui":"00250C00010003A9",
                    "joinId":90,
                    'pdu': "0073" + pressDataHexStr + "E7016700" + tempDataHexStr + "0268" + humidDataHexStr,
                    "port":3,"rssi":-39,"seqno":60782,"snr":10.75,
                    "txtime":curr_ts
                    }
        
    #print raw_message
    print '######## COUNT: %s' % COUNT
        #json.dumps(myDictObj, sort_keys=True, indent=3)
    ser_message = json.dumps(raw_message, sort_keys=True, indent=3)
    #print ser_message
    message = json.loads(ser_message)
    print message
        
    s.send(str(ser_message))
#    result = s.recv(BUFFER_SIZE)    
    s.close()
    print ("CLOSED")    
#    return result
    return
 
def main():
    
    #s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    #s.connect((SERVER_ADDRESS, SERVER_PORT))
    SERVER_ADDRESS = input ("ENTER SERVER IPv4: ")
    print (SERVER_ADDRESS)
    SERVER_PORT = input ("ENTER SERVER PORT: ")
    print (SERVER_PORT)
    print 'SENDING...' 
    while True:
        try:
            res = client_send(SERVER_ADDRESS, SERVER_PORT, BUFFER_SIZE)
            print 'SEND RESULT: %s' % res
            #sleep(INTERVAL)
        except Exception as ex:
            print ex
            pass
        sleep(INTERVAL)
        print ("NEXT INTERVAL")
          
    #s.close()                          
                                   

if __name__ == '__main__':
        main()
