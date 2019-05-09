FROM zhaochy/node-base:10.15.3

RUN mkdir /app
WORKDIR /app
COPY ./package.json /app/package.json
COPY ./app /app/app
COPY ./config /app/config
COPY ./yarn.lock /app/yarn.lock

RUN yarn install --production

EXPOSE 7001

CMD EGG_SERVER_ENV=prod npm start
