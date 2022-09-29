#!/usr/bin/env bash

DOCKER_COMPOSE_FILE= "docker-compose.dev.yml"

docker-compose -f docker-compose.dev.yml  up -d

docker-compose -f docker-compose.dev.yml  run frontend npm install

docker-compose -f docker-compose.dev.yml  run backend npm install

docker-compose -f docker-compose.dev.yml  run backend npm run migration:run