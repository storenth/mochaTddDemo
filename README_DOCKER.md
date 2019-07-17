## Build app/test Docker way.
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
* Run container with specified image. The combination of the `-i` and `-t` switches gives you interactive shell access into the container. Try fix DNS problems to replace container's `/ect/resolv.conf` with `--dns`
```
docker run --dns=8.8.8.8 -it alpine
```
* You can also build Images from a `Dockerfile`, which lets you automate the installation of software in a new image
