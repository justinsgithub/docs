sh ./get-docker.sh
########## BEGIN ##########
sudo sh -eux <<EOF
# Install newuidmap & newgidmap binaries

apt-get install -y uidmap
EOF

########## END ##########
dockerd-rootless-setuptool.sh install
docker run hello-world

# add to shell .rc file
export PATH=/usr/bin:$PATH
export DOCKER_HOST=unix:///run/user/1000/docker.sock
