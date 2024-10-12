# News Aggregator

## About

This project is a Node.js Express application that implements a news aggregation service with user authentication, personalized preferences, and news fetching capabilities.

## Project Structure

project-root/
│
├── controllers/
│ ├── authController.js
│ ├── newsController.js
│ ├── preferencesController.js
│
├── middlewares/
│ ├── authMiddleware.js
│
├── models/
│ ├── userModel.js
│
├── routes/
│ ├── authRoutes.js
│ ├── newsRoutes.js
│ ├── preferencesRoutes.js
│
├── utils/
│ ├── validateInput.js
│
├── services/
│ ├── newsService.js
│
├── cache/
│ ├── cacheService.js
│
├── config/
│ ├── db.js
│
├── .env
├── app.js
├── package.json
└── README.md

## Key Components

1. app.js (Main entry point)
   This file sets up the Express application, connects to the database, and defines the main routes.
2. config/db.js (Database connection)
   Handles the connection to MongoDB using Mongoose.
3. models/userModel.js (User model)
   Defines the User schema with email, password, preferences, and article lists.
4. controllers/authController.js (User registration and login)
   Implements user registration and login functionality.
5. middlewares/authMiddleware.js (JWT Authentication)
   Provides JWT-based authentication middleware.
6. controllers/preferencesController.js (User Preferences)
   Manages user preferences for news categories and languages.
7. controllers/newsController.js (Fetching News)
   Handles fetching news based on user preferences and manages read/favorite articles.
   8-10. routes/\*.js
   Define the API routes for authentication, preferences, and news.
8. cache/cacheService.js (Simple caching service)
   Implements a basic caching mechanism for news articles.
   Setup Instructions

## Install dependencies:

npm install

## Set up environment variables:

Create a .env file in the root directory with the following content:
MONGO_URI=mongodb://localhost:27017/newsapp
JWT_SECRET=your_jwt_secret_key
NEWS_API_KEY=your_newsapi_key

## Start the server:

npm start

## API Endpoints

POST /auth/register: Register a new user
POST /auth/login: User login
GET /preferences: Get user preferences
PUT /preferences: Update user preferences
GET /news: Get news articles based on user preferences
POST /news/:id/read: Mark an article as read
POST /news/:id/favorite: Mark an article as favorite
GET /news/read: Get list of read articles
GET /news/favorites: Get list of favorite articles

## Dependencies

express
mongoose
jsonwebtoken
bcryptjs
axios
node-cache
dotenv
Make sure to install these dependencies using npm install.
