# Simple Node.js backend Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# this is just for documentation purposes as the port is still not mapped
EXPOSE 3005 
# this is the command that will be run when the container starts
CMD ["npm", "run", "dev"]
