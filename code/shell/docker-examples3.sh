docker run --rm -ti ubuntu sleep 5 # deletes container after running it, running the sleep command for 5 seconds, and then automatically exiting

docker run --rm -ti ubuntu bash -c "sleep 5; echo slept 5; echo exiting and deleting container now"

docker run -d -ti ubuntu bash # -d for detached, keeps it running in the background

docker attach $container-name # reattaches to container, simniliar to GNU screen

# also detach from a container with ctrl p ctrl q

docker ps 

docker attach $CONTAINER-NAME
