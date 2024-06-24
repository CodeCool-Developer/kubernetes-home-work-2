FROM node

ENV FILE_PATH=/app/data/example.txt

WORKDIR /app

COPY server.js /app/
RUN npm install express
RUN npm install fs
RUN npm install path
RUN npm install dotenv

WORKDIR /app/data
RUN echo "this is a default example file" > /app/data/example.txt
RUN echo "this is a example Version 2 file" > /app/data/example2.txt



CMD node ../server.js
