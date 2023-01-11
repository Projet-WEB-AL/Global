# How to use
Firstclone the project
```bash
git clone --recurse-submodules https://github.com/Projet-WEB-AL/Global.git
```
If a problem occurs when cloning git repositories you can manually clone the repositories in the global repository.

## Prod
Run:
```bash
sh runProd.sh
```
after that the following ports will be used by the following applications :
|   Name   | Ports localhost             |
|----------|-----------------------------|
|adminer   | [8080](http://locahost:8080)                        |
|rabbitmq  | [15672](http://locahost:15672)                       |
|nginx     | [80](http://locahost:80)                          |
|grafana   | [3001](http://locahost:3001)                        |

You can access the frontend and backend here:

[Frontend : locahost](http://locahost)

[Backend : locahost/api](http://locahost/api)

Please use chrome to use the website (firefox and safari not supported)
## Dev
Run:
```bash
sh runDev.sh
```

after that the following ports will be used by the following applications :
|   Name   | Ports localhost             |
|----------|-----------------------------|
| mysql    | 3306                        |
| FRONT    | 4200                        |
|BACK      | 3000                        |
|adminer   | 8080                        |
|rabbitmq  | 5672 and 15672 (web client) |
|maildevt3 | 80                          |
|quarkus   | 8081                        |

Please use chrome to use the website (firefox and safari not supported)

## Tests

First Run script Prod :
```bash
sh runProd.sh
```
Then run the tests:
```bash
cd ./loadTesting
sh runTests.sh
```