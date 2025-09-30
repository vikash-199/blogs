# Start with a base image that already has Node.js installed.
# alpine = a very small Linux version (lightweight).
FROM node:alpine


# Inside the container, create (or go into) a folder called /app.
# All next commands will run inside this folder.
WORKDIR /app

# Copy the package.json file from your computer into /app inside the container.
COPY package.json ./

# This installs all the dependencies mentioned in package.json.
RUN npm install

# Now copy all the remaining project files from your computer into /app inside the container.
COPY ./ ./

# 👉 When someone runs the container, automatically run:
CMD ["npm","start"]