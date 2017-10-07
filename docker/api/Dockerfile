FROM node:latest

WORKDIR /learningreact/api

COPY ./src/api/ /learningreact/api

RUN npm install

ENV PORT 3000

EXPOSE 3000

CMD ["npm", "start"]