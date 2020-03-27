# peer-server

deploy on ec2:

```sh
$ git clone https://github.com/alexmalev/peer-server.git
$ cd peer-server
$ docker build . -t peer-server
$ docker run -d -p 8080:3000 -p 8081:9000 -e PUBLIC_PORT="3000" -e PRIVATE_PORT="9000" -e PEER_HOST="<other_ec2_host>:8081" peer-server
```
