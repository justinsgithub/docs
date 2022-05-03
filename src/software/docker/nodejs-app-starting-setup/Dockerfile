FROM node 

# sets root directory for all subsequent instructions 
WORKDIR /app

# COPY . ./ would also work since it is set to /app as the working directory
COPY . /app

# commands that you want ran to download / build / setup all dependencies for the image
RUN npm install

# need to run this to expose the port from the container on our host machine
# not necessary since we expose ports from command line with -p option, but is considered best practice to include it 
EXPOSE 8001

# commands you want ran as soon as the container is actually being ran
CMD ["node", "server.js"]
