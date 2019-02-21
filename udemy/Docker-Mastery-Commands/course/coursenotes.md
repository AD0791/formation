# Docker Mastery @AD0791  
----------------------------------------  

# Section 1  

## Lecture 1

- image vs container.
- run/stop/remove containers.
- check logs and processes.  

### images vs containers

>**image**: An image is the application we want to run.  
{bin,libs,sources code} that make up your application or os.  

>**container**: A container is an instance that image running as a process.  

### Starting a Nginx Web Server

> docker container run --publish 80:80 nginx (new style: $docker <command> (option) ...)  
In the background:  
- get nginx image form docker hub.  
- start a new container from that image.   
- get port 80 in the host ip and link with the container ip port 80:    
{host ip -> 80 : 80 <- container ip}   

> docker container run --publish 80:80 --detach nginx  
**detach** tells docker to run it in the background. it wont show the process directly on the terminal.  

> docker container ls **~ docker ps** { ~ : means same value}  
list the running containers

> docker container stop id_or_name_container **~ docker stop id_or_name_container**  
stop runninng containers


> docker container ls -a **~ docker ps -a**  
docker will shows us the used containers.  

> docker container run --publish 80:80 --detach --name webhost nginx
**name** tells docker webhost is the name of the container where nginx is going to run in the background {_detach_}.  

> docker container logs webhost **~ docker logs name_Container**  
docker will return the logs of the container webhost.  

> docker container top webhost **~ docker top name_container**  
this will show the process running insaide the container webhost.  

> docker container --help **~ docker --help**  
list the commands that can be applied in this container.   

*"From now on, I will not write the old way or new way of writting the docker commands unless it's necessary"*   

> docker rm whebhost or container_id    
docker will remove the container named webhost. webhost must be sop first.  

> docker rm -f container_name or container_id  
docker will shutdown the container anyway (open or not)    

## Lecture 2  
  
1. WHat happen when "docker container run"?    
- it will check on the local image cache  
- then look in remote image repo (Docker Hub) (if 1 not True)    
...  

2. Container vs VM?    
- They are just processes  
- Limited to what ressources they can access  
- Exit when process stop   

> docker run --name mongo -d mongo  
docker will get the mongo image and put it on the container names mongo. **d** inplace of --detach  

> ps aux    
will show all processes running only on the host (in my computer)  

> ps aux | grep mongo  
**| grep** bash regex used to search for the word mongo in the list of processes displayed.   
----------------------------------------
#### Assignement 1  

##### run nginx, mysql and httpd:  
- 80:80
- 8080:80 
- 3306:3306  
- -e MYSQL_RANDOM_ROOT_PASSWORD=yes  

_Answers_:
1. Setup the mysql database, the virtual environnement  and root password

> docker container run -d -p 3306:3306 --name mysql_db -e MYSQL_RANDOM_ROOT_PASSWORD=yes mysql
**-p** = --publish  
**-e** tells docker to setup an environnement
- put a root password into the environnement.  

> docker container logs mysql_db  

2. setup httpd an apache webserver  

> docker container run -d --name webserver -p 8080:80 httpd  

3. setup an nginx web app  

> docker container run -p 80:80 -d --name nginx_webapp nginx

--------------------------------------------------------

## Lecture 3 (multiple containers)   

> docker container run -d --name nginx nginx   

> docker container run -d --name mysql -e MYSQL_RANDOM_ROOT_PASSWORD=true mysql  

- docker top : process list in one container  
- docker inspect : to see the details of container config  
- docker stats : performance stats for all containers  
-> docker container stats --help  
-> docker inspect name_container = gives you a json.   

## Lecture 4  (No need of ssh)  
- docker run -it $\neq$ docker start  
- docker run -ai $\neq$ docker exec -it $\neq$ docker run -it  
- docker run -it: start new container interactively with an image  
- docker exec -it : (for running containers) run additional command in 						existing container  

> docker container run -it --name proxy nginx bash   
**-it** = -t gives us a pseudo-tty like ssh does + -i for interactive and keep session open. And it will gives you the bash shell to operate in this containers. 

> docker container run -it --name ub ubuntu
-> when you exit the bash, the container will stop.

> docker container start -ai ub  
**-ai** = -a for attach + -i for interactive
docker will start the container "ub" with the ubuntu-OS in all the programme previously installed (in that container).  
-> docker exec --help  
_msql = name of the container._  
-> docker start mysql + docker container exec -it mysql bash  

> docker container exec -it mysql bash  
- the container "mysql" must be running first
- ps aux to show the process in the containers
- if ps not found = apt-get update && apt-get install procps   
-> when you exit, the container will still running. You will have to stop it {docker stop ...}  

> docker pull alpine  
**alpine** is a very small linux distribution.  
-> alpine doesn't have bash but have sh.
-> alpine package manager is apk. 
we can install bash.  

-> I install vim nano R bash python in alpine container. if you previously start the alpine container, this should work: docker container exec -it alpine bash
> docker container run -it --name alpine alpine sh   

## Lecture 5 (docker networks)  

> docker run -p   
**-p** expose the ports in your machine.  
> docker port <container>  
-> gives a quick output of what port are open for that container on your network.  
-> two network : docker network and machine network  

1. Docker Networks defaults  
- each container connected to a private virtual network "brige"   
- each v.n routes through NAT firewall on host ip
- containers can talk to each other on a v.n without -p  
2. docker networks cont.  
-  defaults stettings can be customize
- make new virtual networks
- attach containers to more then one v.n (or none)   
- skip v.n and use host ip (--net=host)  
- docker netwok drivers to gain new abilities  

> docker container run -p 80:80 --name webhost -d nginx  
-> create the webapp  

> docker container port webhost  
-> output to the port in-used   

> docker container inspect --format '{{ .NetworkSettings.IPAddress }}' webhost  
**--format** a common option for formatting the output of command using "go templates", it's a cleaner way to filter (|grep).  __"inspect"__ is to go inside a container.   **{{ .NetworkSettings.IPAddress }}** is the actual node of that json output that we really want to look at.  

> ifconfig en0   
-> To see my active networks on my mac and my ports      

-> Docker network graph:   
![Docker Network Explain](../images/Dnetworkexplain.png)

_the brige is the virtual network._    

## Lecture 6 Networks ClI management   
- show network    
- inspect a network    
- create a network    
- attach a network to a new container    
- detach a network from container      

> docker network rm networkid   
To remove a network   

> docker network ls    
Check the avaliable network. In the most basics states, **you have 3 network (bridge (or docker0), host, none)**. __the none network doesn't have a driver__.     

-> The bridge network is the default docker network that bridges through the NAT'ed firewall to the physical network that the host is connected to. __(host ip)__    

> docker network inspect bridge     
it return a json in the Command line. That json show details about this network and show the running containers.     

-> The host network is a special network that skips the virtual networking of docker and attach a container directly to the host interface. it prevents the security boundaries of containarization to protect the interface of that container.    

-> The none network is the equivalent of having an interface on your computer that is not attach to anything. remove eth0 and let you with the host network.   

-> Network driver = built-in 3rd party extensions that give you a virtual network features.    

> docker network create my_app_net   
spawns a new virtual network for you to attach containers. In this case the new network willl be named my_app_net. you will that the default driver is bridge. It create his own subnet and gateway.    

> docker container run -d --name new_nginx --network my_app_net nginx  
**--network** will put the new_nginx app in the my_app_net network
docker network inspect my_app_net

> docker network --help   
see the options.  

> docker network connect networkid
to connect containers on a network __networkid__. now these containers can be connected to two networks (the bridge and the new network).     

> docker container disconnect networkid    
to disconnect a container from  the additionnal network  

> docker network create --help  
To find help. 

-> **--driver** to specify a 3rd party driver  

Good Practice {
	- create your app on the same docker network    
	- their inter-communication never leaves the host  
	- all externallly exposed ports closed by defaults  
	- must manually expose via -p, which is better default security  
	- get better with swarm and overlay networks
}  

## Lecture 7 Docker Networks: DNS 

- DNS is the key to easy inter-container comms   
- Default vs Custom networks     
- how to use --link to enable DNS on default bridge network   

-> new network
> docker network create my_app_net   
   docker network ls   

-> forget IP's  
Static IP's and using IP's for talking to comtainers is anti-patern. dou your best to avoid it.  Docker is to dynamique.  The solutions is Docker DNS.   

-> Docker daemon has a built-in DNS server that containers use by default    

> create two nginx app and put them on the same network (my_app_net)    
docker container run -d --name my_nginx --network my_app_net nginx    
docker container run -d --name new_nginx --network my_app_net nginx   

> \#errata Ping isn't inside of the nginx image so we can get into the container this way. Instead of building a new image or exec bash as root inside of the container:      
docker container exec my_nginx apt-get update
docker container exec my_nginx apt-get install -y iputils-ping  
docker container exec new_nginx apt-get update
docker container exec new_nginx apt-get install -y iputils-ping  
> \# Now you finish install **ping** in both containers. You can make these two containers communicates, either way you want, in the same network:   
docker container exec -it my_nginx ping new_nginx  
docker container exec -it new_nginx ping my_nginx   

-> docker container create --help. You will see the **--link** option. Why? If you want to use the bridge network to connect the containers you want. 

Good{
	It's good practice (easier) to create another network to make your containers comms
}   

-------------------------------------------------
### Assignements 2 (CLI Testing)  

> docker container run --rm -it centos:7 bash  
- The package manager for centos is yum # for example (yum update curl) 
- **centos:7** specify the version of centos.  
> docker container run --rm -it ubuntu:14.04 bash  
- package manager of ubuntu is apt-get # you can do (apt-get update && apt-get install curl)  
- **ubuntu:14.04** specify the version of the ubuntu.  

-> **--rm** after we exit the bash inside the container. this container will atomaticly removes itself.  

### Assignements 3 (DNS Round Robin Test)  

-> the concept that you can have two different host with dns aliases that respond to the same dns name. On docker we can have multiple containers on a created network that respond to the same DNS address.   

> docker network create dude   
- create another network named dude  

> docker container run -d --net dude --net-alias search elasticsearch:2
- **--net** to specify the network we want this container running.  
- **net-alias <nameofAlias>** to create the dns alias.    
-> run it again to create 2 containers    

> docker container run --rm --net dude alpine nslookup search   
- **--rm** the container will be remove.  
- **alpine nslookup search** docker will use the alpine image, run the os. nslookup is a built-in command (or command line program) on the CLI (Shell). nslookup will search for the dns with the alias: "search". In the end we will see the ip address with the alias name and the network. 

> docker container run --rm --net dude centos curl -s search:9200   
- **--rm** the container will be remove.  
- **centos curl -s search:9200** docker will use the centos image, run the os. curl is built-in on the CLI. you can use the "-s" option of curl to look for the alias and the port: "search:9200". If we don't specify the port, he will not work.  Now we will receive a json output with the data.    
----------------------     

##### Links   
- [Round Robin](https://en.wikipedia.org/wiki/Round-robin_DNS)  
- [DNS-commic](https://howdns.works/episodes/)  
- [DNS](https://dyn.com/blog/dns-why-its-important-how-it-works/)  
- [Docker Format command and log output](https://docs.docker.com/config/formatting/)   
- [ubuntu images vs ubuntu os](https://www.udemy.com/docker-mastery/learn/v4/questions/5390204)  
- pacman package manager for archlinux based distros, alpine distro is apk. [package manager](https://www.digitalocean.com/community/tutorials/package-management-basics-apt-yum-dnf-pkg)    
- [Docker ebook](https://github.com/mikegcoleman/docker101/blob/master/Docker_eBook_Jan_2017.pdf)   
- [Brett website](https://www.bretfisher.com/docker-for-mac-commands-for-getting-into-local-docker-vm/)  
---------  

# Section 2

## lecture 1 (Section overview)

### Definition of an Image

> An image in docker contains the app binaries and dependencies. The metadata about the image data and how to run the image.  

> Official definition: AN image is an odered collection of root filesystem changes and the corresponding execution parameters fir use within a container runtime.

-> Not a complete OS. No kernel, Kernel modules (e.g drivers)  
-> small as one file (your app binary like golang static binary)
-> big as ubuntu distro with apt, and apache, php, and more installed

[Docker image specification](https://github.com/moby/moby/blob/master/image/spec/v1.md)

### Docker HUB Registry Images

[Docker Hub](https://hub.docker.com)

> docker image ls or docker images

- get the list of images.

You can get the official image and specify the version: 

> docker pull nginx

- **pull** docker will download the latest images.

> docker pull nginx:1.11.9

- **pull nginx:1.11.9** docker will get the exact version of nginx, you want.
 

docker pull nginx:1.11.9-alpine

- **pull nginx:1.11.9-alpine** that means it come from a base image from alpine (linux distro)

[List of Official IMAGES](https://github.com/docker-library/official-images/tree/master/library)

### Discover the image catch

- image layers
- union file system
- history and inspect commands
- copy on write


> docker history nginx:latest

**history** docker will show the layers of changes made in the latest nginx image.

> docker history mysql

**history** docker will show the layers of changes made in the msql image.

docker image inspect nginx

**inspect** gives us the metadata of that image.

- images are made up of file system changes and metadata.
- each layer is uniquely identified and only stored once a host
- this saves storage space on host and transfert time on push/pull
- A container is just a single read/write layer on top of image

[image and layers](https://docs.docker.com/storage/storagedriver/)





































copyright:Alexandro Disla  