# docker-compose 

## YAML 

YAML ain't markup language 

- nesting of objects in a YAML is determined by white-space / indentation

### YAML data types

- Scalars (strings and numbers)
- Sequences (arrays and lists)
- Mappings (hashes and dictionaries)

## commands 

### docker-compose up -d

- creates containers from docker-compose.yml file

## docker-compose main keys 

### version 

- specifies what version of docker-compose is being used

### services 

- different containers for different parts of the app are placed under services, examples: 
    - database
    - web server 
    - API
    - API client

#### image 

- specifies the image for the service / container to use, examples:
    - mysql:5.7
    - apache 
    - php 
    - node
    - python3.9

#### volumes 

- examples: 
    - wordpress_files:/var/www/html
    - db_data:/var/lib/mysql

#### restart 

- restart: always ensures you don't have to worry about the container being shutdown

#### environment 

- specifies environment variables for the service / container, examples: 
    - MYSQL_ROOT_PASSWORD: word@press
    - MYSQL_DATABASE: wordpress 
    - MYSQL_USER: wordpress
    - MYSQL_PASSWORD: abc@123

#### depends_on 

- specifies that this service / container depends on another container which needs to be created first
- is the name of another service in the file
- example: wordpress would depend on the database service

#### container_name 

- name of the container, otherwise one will be randomly generated

#### ports 

- specifies which port our host machine should use to access which port in the container
- example: '8000:80' would mean going to our http://localhost:8000 would access the containers http://localhost


### volumes 

- volumes is where we need to declare any user defined volumes in our services, examples: 
    - wordpress_files:
    - db_data:

### networks

- networks is where we need to declare any user defined networks in our services
