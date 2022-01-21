# Learning Docker

## overview

### what Docker does

- Docker carves up a running Linux system into small containers, each of which is it's own sealed little world
- these containers have all their own programs everything, all isolated from anything else
- these containers are designed to be portable so that they can be shipped from one place to another
- Docker does the work of getting these containers to and from different computer systems
- Docker also builds these containers for you
- Docker is also a social platform to help you find and share containers with others who may have already built very similar work that you can build on top of 
- Docker is not virtual machines, there is only a single operating system running
- that operating system is just carved up into isolated little spaces 

### what is a container?

- a container is a self contained sealed unit of software
- it has everything in it that is needed to run that code
- batteries included operating system
- a container includes: 
    - all of the code 
    - configurations
    - processes
    - has all of the networking to allow these containers to talk to other containers they are supposed to be able to talk to and nothing else
    - all the dependencies the system needs are bundled up in the container
    - it even includes just enough of the operating system to run your code 

### how it works 

- it takes all the services that make up a Linux server:
    - networking 
    - storage
    - code 
    - interprocess communication 
    - the whole works 

and it makes a copy of that in the Linux Kernel for each container, so each container has its own little world, that it cannot see out of and other containers cannot see in

- you might have one container on a system running Red Hat Linux, serving a database 
- that database is being served through a virtual network to another container running Ubuntu Linux, running a webserver that talks to that database
- and that webserver might also be talking to a caching server that runs in a SUSE Linux based container
- the important part to understand is it doesn't matter which Linux the container is running on, as long as it is linux
- Docker is the program that manages all of this, sets it up, monitors it, and tears it down when it is no longer needed 

### about docker

- docker is a client program to docker
- docker is a command you type at the terminal 
- docker is also a server program that listens to messages from the docker command and manages a running Linux system
- docker builds containers from code, it takes your code along with its dependencies, bundles it up and seals it into a container
- docker is  service that distributes container across the internet so that you can find others work and the righjt people can find your work 
- docker is also a company that makes containers


## installing Docker

### setting up Docker 

- dockers primary job is to manage a Linux server, and start and stop your containers as required


### docker desktop 

- not available for Linux yet

### install docker on Linux

```shell
{! shell/install-docker-linux.sh !}
```

### script install 

```
{! shell/install-docker-script.sh !}
```
## using Docker

### the Docker flow: images to containers

- the docker flow is a fundamental concept, it all begins with an image 

- IMAGE => RUNNING-CONTAINER

- an image is all the files that make up just enough of the operating system to do what you need to do 

- traditionally you would install an entire operating system with everything with each application you do 

- with Docker you pair it way down so that you have a little container with just enough of the operating system to do what you need to do 

- you can have lots of Docker containers run efficiently on a computer

- the command to look at your docker images: 

```sh
{! shell/docker-examples.sh !}
```

- when you are inside a container you start from an image, and that image is fixed, it does not change
- when making a container from an image, you do not change the image
- when you make changes to your container, it does not effect future containers from that same image 
- if you make a change to your current container, exit and then rerun docker for that image, the change will not be there
- this is the whole point of images, they are fixed points and you can always start from that point


### the Docker flow: containers to images

- when you make changes inside of a container, you can save those changes, but the changes will not save to the original image
- the next step in the docker flow is IMAGE => RUNNING-CONTAINER => STOPPED-CONTAINER
- when you exit a container it still exists

```shell 
{! shell/docker-examples2.sh !}
```

- the next step in the docker flow is IMAGE => RUNNING-CONTAINER => STOPPED-CONTAINER => NEW-IMAGE

- docker commit creates an image from a container

### run processes in containers

- docker run starts a container by giving an image name and a process to run in that container

- containers have a main process 

- the container stops when that process stops 

- if you run other processes inside of that container, all the container still shuts everything of when that main process exits

- containers can have names, a name is automatically given by docker if you do not create one 

```shell 
{! shell/docker-examples3.sh !}
```

- `docker run --rm --ti` =  is for just running a container once and deleting when it exits

- `docker exec -ti NAMES /bin/sh` = accesses container of NAMES

### manage containers

- `docker logs $container_name`
    - docker keeps the output of the container available as long as the container is around
    - do not let the output of containers get too large

- `docker kill $container-name` = stops container

- `docker rm $container-name` = completely disposes of container

- resource constraints: 
    - memory limits = `docker run --memory maximum-allowed-memory $image-name $command`

    - CPU limits = `docker run --cpu-shares $relative-percentage-to-other-containers?`
    - CPU limits = `docker run --cpu-quota $general-non-relative-limit?`

- orchestration:
    - generally requires resource limiting
        
- lessons: 
    - do not let your containers fetch dependencies when they start or if a repo is missing or some other error, all of your containers will stop
    - do not leave important things in unnamed stopped containers

### exposing ports

- wide variety of networking options to connect containers together and to connect containers the internet
- programs in containers are isolated from the internet by default 
- you can group your containers into "private" networks
- you can explicitly choose who can connect to whom
- expose ports to let connections in 
- private networks to connect between containers
- to expose a specific port, you specify the internal port that the program is listening on and what port it should be listening to on the outside, as well as what protocol to use, and there are many more options

- `docker run --rm -ti -p 45678:45678 -p 45679:45679 --name echo-server ubuntu:14.04 bash` 
    - establishes to different in and out ports, each port will have the same in and out number to keep things easier
    - `nc -lp 45678 | nc -lp 45679` = netcat listen port 45678 and pipe that back out to 45679

- `nc localhost 45678 ` = now any stdin will be sent to the above docker container
- `nc localhost 45679 ` = now any stdin from above command will piped out into this terminal process

- exposing ports dynamically:
    - the port inside the container is fixed
    - the port on the host is chosen from the unused ports 
    - this allows many containers running programs with fixed ports 
    - this often is used with a service discovery program or orchestration service such as Kubernetes


- `docker run --rm -ti -p 45678 -p 45679 --name echo-server ubuntu:14.04 bash` 

    - automatically chooses the host ports based on what is available
    - `docker port echo-server` = finds what ports the docker container is listening on 
    
- exposing UDP ports:
    - `docker run -p $outside-port:$inside-port/$protocol` (tcp/udp)
    - `docker run -p 1234:1234 udp`

### container networking

- connecting between containers:
    - when we expose a container's port in Docker it creates a network path from, essentially the outside of that machine down through the networking layers and into that container
    - other containers can connect to it by going out to the host, turning around, and coming back in along that path, it is useful but their are more efficient ways to go about it 
    
- Docker offers an extensive set of networking options for really controlling exactly how your containers connect to each other and making sure that it is secure and just the way you want it 


### legacy linking

### images 

### volumes

### docker registries

## building Docker images

### what are Dockerfiles?

### building Dockerfiles

### Dockerfile syntax

### Multi-project Docker files

### Avoid golden Images

## under the hood

### Docker the program

### networking and namespaces

### processes and cgroups

### storage

## orchestration: building systems with Docker

### registries in detail

### intro to orchestration 

### Kubernetes in AWS

### Google Kubernetes Engine
