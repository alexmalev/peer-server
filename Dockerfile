FROM node:13-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN yarn

EXPOSE 3000 9000
CMD ["node", "src/"]