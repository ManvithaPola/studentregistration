# Use official node image
FROM node:14

# Create app directory
WORKDIR /app

# Copy package files first for cached layers
COPY package.json package-lock.json* /app/

# Install dependencies
RUN npm install --production

# Copy the rest of the app
COPY . /app

# Expose port
EXPOSE 8081

# Start app
CMD ["node", "studregnode.js"]
