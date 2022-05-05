FROM node 

# sets root directory for all subsequent instructions 
WORKDIR /app

# COPY only want to copy package.json at first to run the initial npm install
COPY package.json /app

# commands that you want ran to download / build / setup all dependencies for the image
RUN npm install

# COPY . ./ would also work since it is set to /app as the working directory
# want to run this after npm install, so that if we make changes to our application code, only the subsequent layers are rebuilt for the new image by docker and we are not pointlessly running npm install each time
# docker is a layer based artchitecture, each line of instructions is a layer of the image 
# if a layer changes, then all subsequent layers below will be rebuilt as well, but not the ones above such as npm install
COPY . /app

# need to run this to expose the port from the container on our host machine
# not necessary since we expose ports from command line with -p option, but is considered best practice to include it 
EXPOSE 8001

# commands you want ran as soon as the container is actually being ran
CMD ["node", "server.js"]
