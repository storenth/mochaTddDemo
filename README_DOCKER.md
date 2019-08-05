## Build app/test Docker way.
### Use existing image
* Search image within default Docker hub repositories
```
docker search alpine
```
* Download image to local storage
```
docker pull alpine
```
* To see the images that have been downloaded to your computer, images that you use to run containers can be modified and used to generate new images
```
docker images
```
* Run container with specified image. The combination of the `-i` and `-t` switches gives you interactive shell access into the container. Try fix DNS problems to replace container's `/ect/resolv.conf` with `--dns`, `-rm` mean remove container after when exit
```
docker run --dns=8.8.8.8 -it --rm alpine
```
* You can also build Images from a `Dockerfile`, which lets you automate the installation of software in a new image. Prepare DNS settings like `sudo nano /var/snap/docker/current/config/daemon.json` with `"dns": ["127.0.0.1", "8.8.8.8"]` string.
* Share data with host
```
-v ~/outpur:/output
```
* check status and log docker as snap package:
```
sudo snap services docker.dockerd
sudo snap logs docker
```
* after DNS changes, stop docker, restart snapd, and start docker:
```
sudo snap stop docker.dockerd
sudo systemctl restart snapd
sudo snap start docker.dockerd
``` 
### Build own image
*
```
sudo docker build -t storenth/mocha-image-demo .
```
* check ports Linux, check networks and routs on each container/host
```
netstat -ie
netstat -re
netstat -lntu
```
* Run Docker image in container
```
sudo docker run --name mochaTestContainer -p 80:8080 -d storenth/mocha-image-demo
```
* check log on what happend on container
```
sudo docker logs %CONTAINERID%
```

* Common Docker commands:
### Remove all exited containers:
```
sudo docker container rm  $(sudo docker container ps -a -q)
```
* Orchestrate Docker related containers with Installing and using `Docker Compose`: We'll check the current release and if necessary, update it in the command below
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
-- chenge permissons
```
sudo chmod +x /usr/local/bin/docker-compose
```
* Create `docker-compose.yml` and run it
```
sudo docker-compose up
```
* Build image from `docker-compose.yml` and then up all dependend images in containers
```
docker-compose -f ~/hello_world/docker-compose.yml build
docker-compose -f ~/hello_world/docker-compose.yml up -d
```

