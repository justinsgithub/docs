# test docker

docker run hello-world

docker images # show local docker images

REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
hello-world   latest    feb5d9fea6a5   3 months ago   13.3kB

- the docker run command takes an image and turns into a living, running container

- run with Ubuntu bash shell with terminal capabilities: 

docker run -ti ubuntu:latest bash # terminal interactive

cat /etc/lsb-release # check Ubuntu release 

exit  # exit image

docker run -ti ubuntu:latest bash # run again 

docker ps # look at running images

CONTAINER ID   IMAGE           COMMAND   CREATED         STATUS         PORTS     NAMES
ee62b9db8204   ubuntu:latest   "bash"    4 minutes ago   Up 4 minutes             interesting_proskuriakova

# docker creates name for you if not specified

