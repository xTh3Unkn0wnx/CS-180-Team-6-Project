# CS-180-Team-6-Project
Andrew Ocegueda

Mohamed Abuelreich

Daniel Villicana

Ocean Chen

Akshay Jayaram

This repository will host Team's 6 code for our upcoming project for CS 180

# Live Active

A web application that will help its user to make excercise and physical fitness more easier for those who are inexperineced or experienced users to make their current routines more efficient. 

## Instructions to download Dependencies

### Prerequisites
Install NodeJS to download the neccessary dependencies for the program

Install git so you can clone from GitHub

### Command Prompt Commands

```Powershell
git clone https://github.com/xTh3Unkn0wnx/CS-180-Team-6-Project.git 
cd ./main-src
npm install
npm run dev
```

## Building a Docker Image and Container

To build the Docker image for this application, navigate to the directory containing the Dockerfile and run the following command (This might take a few minutes): 

```bash
docker build --build-arg MONGODB_URL="<your-mongodb-url>" --build-arg VITE_RECIPE_KEY=<your-api-key> --build-arg VITE_RAPID_API_KEY=<your-api-key> -t my-fullstack-app .
```

Then run the following commands to create and run your docker container on port 3000 (localhost:3000):

```bash 
docker run --name my-container-name -p 3000:3000 -d my-fullstack-app
```


These are additional commands to stop and start your container without building a new one:

```bash
docker start my-container-name 
docker stop my-container-name
```