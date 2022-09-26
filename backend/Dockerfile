FROM node:16-alpine3.11 as backend-dev
RUN mkdir /.npm && chmod 777 /.npm
RUN mkdir -p /app && chown node:node /app
RUN npm i -g @nestjs/cli
USER node
WORKDIR /app
CMD ["npm", "start:dev"]
