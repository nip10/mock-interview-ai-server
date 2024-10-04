# Step 1: Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

ARG OPENAI_API_KEY

ENV OPENAI_API_KEY=${OPENAI_API_KEY}

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the project files
COPY . .

# Step 6: Build the project (if needed)
RUN npm run build

# Step 7: Expose the port your app will run on
EXPOSE 8081

# Step 8: Define environment variables
ENV NODE_ENV=production

# Step 9: Run the app
CMD [ "npm", "start" ]
