# Use official Node.js image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other source code to container
COPY . .

# Expose port (change this if your app runs on a different port)
EXPOSE 8080

# Start the app
CMD ["npm", "start"]
