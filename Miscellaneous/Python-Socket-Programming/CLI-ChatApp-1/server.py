import socket
CHUNK=65535 #receive at most these bytes of data at once
port=3000
s=socket.socket(socket.AF_INET,socket.SOCK_DGRAM) #create a socket object
#socket.socket(family , type)
#AF_NET : family of IPV4 address
#SOCK_DGRAM : UDP, SOCK_STREAM : TCP

#some ip address that the server will listen to when message comes
hostname='127.0.0.1' #ip add of local machine ,same for everyone
#aka home :)

s.bind((hostname,port)) #bind the scoket with the host machine on port 3000

print(f"Server is live on { s.getsockname()}")

#run this server infinitely till I stop manually
while True:
    data,clientAdd=s.recvfrom(CHUNK)
    message=data.decode('ascii')#data by default travels in bytes
    print(f"Rishab : {message}")
    message_send=input("Reply : ")
    data=message_send.encode('ascii')
    #send data to the ip add that sent me the data
    s.sendto(data,clientAdd)