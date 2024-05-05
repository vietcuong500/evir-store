docker build -t store-eviromet .
docker save store-eviromet > store-eviromet.tar
scp -P 24700 store-eviromet.tar root@103.57.220.81:/home

ssh root@103.57.220.81 -p 24700 'docker load < /home/store-eviromet.tar'
ssh root@103.57.220.81 -p 24700 'docker rm -f store-eviromet'
ssh root@103.57.220.81 -p 24700 'docker run --name store-eviromet -d -p 3000:3000 --restart unless-stopped store-eviromet'