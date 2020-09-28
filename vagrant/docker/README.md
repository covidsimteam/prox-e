# Coplanetary & Docker
We decided to package our application in a docker container. We believe that with small standalone containerized application, we can ship more educational app to our server. We also have a plan to put container management integration as part of our Coplanetary app.

## Description
This folder contains most of our docker recipes.


### Components
We have several docker components in our application there are
* Coplanetary. There are two version, one is for production and one is for development.
  * Coplanetary for production. It basically our production optimized Coplanetary that served via Nginx.
  * Coplanetary for development. It basically a runtime that make it possible for Coplanetary to run (mostly node.js)
* CouchDB is our database of choice
* CouchDB initialization data a.k.a. `db-init`. It contains all the schema necessary for our Coplanetary to run.

### Docker-related files
* Docker file (`Dockerfile`)
* Docker compose file (`docker-compose.yml`)

This docker compose can be use for your development environment and very handy, you can spawn the development environment in a matter of seconds and start your development. Your code changes in host folder are automatically reflected to docker and ready to test in your browser.

## How to use

### For Development

### For Production

1. Move to `docker` folder
2. Run the following command to spawn your environment for the first time
   (Optional: update Coplanetary.yml with specific images from https://hub.docker.com/r/treehouses/Coplanetary/tags/)

```
docker-compose -f Coplanetary.yml -f install.yml -p Coplanetary up -d --build
```

See if the docker containers running

```
docker ps
```

You'll see you containers like this

```
CONTAINER ID        IMAGE               COMMAND                  CREATED              STATUS              PORTS                                                                NAMES
ea3b914c3193        Coplanetarydev_Coplanetary    "/bin/sh -c 'bash ..."   About a minute ago   Up 58 seconds       0.0.0.0:3000->3000/tcp                                               Coplanetarydev_Coplanetary_1
57f30698ccda        klaemo/couchdb      "tini -- /docker-e..."   About a minute ago   Up About a minute   4369/tcp, 9100/tcp, 0.0.0.0:2200->5984/tcp, 0.0.0.0:2201->5986/tcp   Coplanetarydev_couchdb_1
```

Connect to your `Coplanetarydev_Coplanetary` with

```
docker logs {{id}}
```

in this case

```
docker logs ea3b914c3193 -f
```

press `CTRL+C` to exit logs view

3. When you're done, you can do the following command

```
docker-compose -f Coplanetary.yml -f install.yml -p Coplanetary stop
```

4. When you go back to code

```
docker-compose -f Coplanetary.yml -f install.yml -p Coplanetary start
```

5. When you have to delete the environment

```
docker-compose -f Coplanetary.yml -f install.yml -p Coplanetary down
```

Remember when your containers active you can always look to your containers logs to see whats going on on the background.
