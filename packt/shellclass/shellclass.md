# SHell_Class Project 
------------------------------

## Docker - Ubuntu  
* Step 1:
$ docker images
*Step 2 (one or the other):
$ docker run -it repository:tag bash
$ docker run -it id-images bash
*Step 3 (find the container):
$ docker ps -a (or without the -a)
{remember the name of the container}
*step 4 (run the same container to follow your work)
$ docker start <name-container>
$docker exec -it <mycontainer> bash
*step 5 (stop the container)
docker stop

### Repeat step 3,4,5 to continue the course
