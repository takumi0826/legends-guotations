FROM node:latest
RUN npm i -g @nestjs/cli
WORKDIR /api
CMD ["npm", "run", "start:dev"]