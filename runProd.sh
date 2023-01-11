git submodule update --remote
cd ./Quarkus
sudo ./mvnw package -Pnative -Dquarkus.native.container-build=true
cd ../
sudo docker-compose -f Prod_docker-compose.yml build
sudo docker-compose -f Prod_docker-compose.yml up