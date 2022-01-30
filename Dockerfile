FROM node:12.14.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 54500

CMD [ "node", "index.js" ]


# sudo docker build -t hapiapp .
# sudo docker run -dp 54500:54500 hapiapp
# sudo docker run -p 54500:54500 -v $(pwd):/usr/src/app hapiapp