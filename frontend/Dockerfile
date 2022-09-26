FROM node:16-alpine3.11 as frontend-dev
RUN mkdir /.npm && chmod 777 /.npm
RUN mkdir -p /app && chown node:node /app
USER node
WORKDIR /app
CMD [ "npm", "run", "dev" ]