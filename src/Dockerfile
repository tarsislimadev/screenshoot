FROM ghcr.io/puppeteer/puppeteer:18.1.0

USER root

WORKDIR /app

COPY app .

RUN ls

RUN npm i

RUN node node_modules/puppeteer/install.js

CMD node index.js 
