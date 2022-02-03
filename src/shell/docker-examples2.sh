docker ps -a # shows all previously ran containers

docker ps -l # shows last ran container 

# creates new image from container, use ps -l to grab id from previous container

### outputbegin ###
CONTAINER ID   IMAGE           COMMAND   CREATED          STATUS                     PORTS     NAMES
ee62b9db8204   ubuntu:latest   "bash"    17 minutes ago   Exited (0) 5 seconds ago             interesting_proskuriakova

docker commit ee62b9db8204

sha256:b1fe5c29b61e3f5bef568c59ad24775d22a90f2a376beecc62bbd94dddc20c40
### outputend ###

docker tag b1fe5c29b61e3f5bef568c59ad24775d22a90f2a376beecc62bbd94dddc20c40 my-new-image

docker commit interesting_proskuriakova another-image

