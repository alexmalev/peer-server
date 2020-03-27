# peer-server

run locally:

```sh
$ yarn start-dev-1
$ yarn start-dev-2
$ curl -X POST -H "Content-Type: application/json" -d '{"something": "blabla"}' http://localhost:3000/api/resource
$ curl http://localhost:3001/api/resource
```

unit tests:

```sh
$ yarn test
```

e2e tests:
local run (with booth servers started locally as described above)

```sh
$ yarn e2e-local
```

e2e with actual servers

```sh
$ yarn e2e
```

deploy on ec2:

```sh
$ git clone https://github.com/alexmalev/peer-server.git
$ cd peer-server
$ sudo docker build . -t peer-server
$ sudo docker run -d -p 80:3000 -p 8081:9000 -e PUBLIC_PORT="3000" -e PRIVATE_PORT="9000" -e PEER_HOST="http://<peer_ec2_host>:8081" peer-server
```
