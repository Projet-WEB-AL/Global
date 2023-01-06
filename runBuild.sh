cd ./Quarkus
sudo ./mvnw package -Pnative -Dquarkus.native.container-build=true
cd ../
sudo docker-compose build
sudo docker-compose up