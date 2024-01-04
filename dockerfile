FROM node:14
# FROM nginx:stable-alpine
WORKDIR /app
COPY package.json .
# COPY build/ /usr/share/nginx/html 
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]

# Use an official Node.js runtime as minithe base image
# FROM node:14

# # Set the working directory inside the container
# WORKDIR /app

# # Expose the port your app will run on (e.g., 3000)
# EXPOSE 3000

# # Start the React app with hot-reloading when the container runs
# CMD ["npm", "start"]