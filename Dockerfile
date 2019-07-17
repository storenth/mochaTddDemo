FROM node:12-alpine
RUN rm -rf /var/cache/apk/* && \
    rm -rf /tmp/*
RUN apk update && apk upgrade && rm -rf /var/lib/apt/lists/*
RUN mkdir -p /home/node/app/node_modules
WORKDIR /home/node/app
COPY package*.json ./home/node/app/
ADD . /home/node/app
RUN npm install
EXPOSE 8080
CMD [ "npm", "test" ]