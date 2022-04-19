# docker-compose 

## YAML 

YAML ain't markup language 

- nesting of objects in a YAML is determined by white-space / indentation

### YAML data types

- Scalars (strings and numbers)
- Sequences (arrays and lists)
- Mappings (hashes and dictionaries)

## docker-compose main keys 

### version 

- specifies what version of docker-compose is being used

### services 

- different containers for different parts of the app are placed under services, examples: 
    - databases 
    - web server 
    - API
    - API client

#### image 
- specifies the image for the container to use, examples:
    - mysql:5.7
    - apache 
    - php 
    - node
    - python3.9

