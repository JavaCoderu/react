FROM node:13.8

RUN mkdir -p /user/src/app
WORKDIR /user/src/app

COPY . /user/src/app/
RUN npm install

EXPOSE 3000
ENV TZ Europe/Moscow

CMD ["npm", "start"]