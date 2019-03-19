## start project
docker run --rm -d -p 3000:3000 -p 9229:9229 -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules example:latest
