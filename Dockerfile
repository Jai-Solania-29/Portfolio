FROM node:alpine
WORKDIR /PORTFOLIO
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "start"]
