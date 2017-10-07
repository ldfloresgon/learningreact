FROM node:alpine

WORKDIR /learningreact/web

COPY ./src/web/ /learningreact/web
COPY ./src/web/index.html /learningreact/web/dist
COPY ./src/web/server.js /learningreact/web/dist

RUN npm install
RUN npm rebuild node-sass --force

ENV PORT 8888

EXPOSE 8888

CMD ["npm", "start"]