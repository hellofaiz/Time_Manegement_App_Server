# Task Management System - Backend

This backend service is part of the Task Management System project. It handles the API endpoints, database interactions, and user authentication using Firebase. The backend is built with Express.js and utilizes MongoDB for data storage, managed with Prisma.

## Features

- User authentication with Firebase (Google)
- Task management API endpoints

## Technologies Used

### Backend:

- Express.js
- Prisma
- Firebase Admin SDK
- MongoDB
- Dotenv
- CORS

## Installation

To get the backend service up and running locally, follow these steps:

- Clone the repository:

        git clone https://github.com/yourusername/task-management-system-backend.git

        cd task-management-system-backend

- Install the dependencies:

        npm install

- Set up the environment variables

        DATABASE_URL="mongodb+srv://<username>:<password>db.ekug1mf.mongodb.net/mydb?retryWrites=true&w=majority"

        ACCOUNT_TYPE=
        PROJECT_ID
        PRIVATE_KEY_ID
        PRIVATE_KEY
        CLIENT_EMAIL
        CLIENT_ID
        AUTH_URI
        TOKEN_URI
        AUTH_PROVIDER_X509_CERT_URL
        CLIENT_X509_CERT_URL
        UNIVERSE_DOMAIN
        CLIENT_URL

- Generate the Prisma client:

        npx prisma generate
        npx prisma db push

- Start the development server:

        npm start
Once the development server is running, you can access the API at http://localhost:5000.