sudo docker-compose up -d grafana influxdb
sudo docker-compose run --rm k6 run /scripts/test.js