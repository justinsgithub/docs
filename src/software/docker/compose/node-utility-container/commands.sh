docker build -t node-util .
docker run -it -v ${pwd}:/app node-util npm init

# entry point is npm so automatically prepends npm to commands
docker build -t npm-util .
docker run -it -v ${pwd}:/app npm-util init
docker run -it -v ${pwd}:/app npm-util install express
