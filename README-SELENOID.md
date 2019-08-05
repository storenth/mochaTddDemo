* prepare file inside the directory config `./config/browser.json` 
```
{
    "chrome": {
        "default": "75.0",
        "versions": {
            "75.0": {
                "image": "selenoid/vnc:chrome_75.0",
                "port": "4444",
                "path": "/"
            }
        }
    }
}
```
* next:
```
sudo pull docker selenoid/vnc:chrome_75.0
```
* start Selenoid launcher container
```
sudo docker run --rm -d --name selenoid -p 4444:4444 -v /var/run/docker.sock:/var/run/docker.sock -v `pwd`/config/:/etc/selenoid/:ro -v `pwd`/logs/:/opt/selenoid/logs/ aerokube/selenoid:latest-release -log-output-dir /opt/selenoid/logs
```
* look for localhost:4444/satatus
* try run test agains localhost:4444/wd/hub
* install Selenoid-UI, and test it with http://localhost:8080/
```
sudo docker run --rm -d --name selenoid-ui  \
    --link selenoid                 \
    -p 8080:8080                    \
    aerokube/selenoid-ui --selenoid-uri=http://selenoid:4444
```

