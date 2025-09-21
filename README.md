# Placify

Placify is a full-stack web application designed to streamline recruitment and user management. It features a Node.js/Express backend and a React frontend, with authentication, email notifications, and a modern dashboard UI.

## Project Structure

Placify/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env
│   ├── config/
│   │   ├── db.js
│   │   └── passport.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── auth.js
│   └── utils/
│       └── sendEmail.js
│
├── frontend/
│   ├── package.json
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src/
│       ├── App.js
│       ├── App.css
│       ├── index.js
│       ├── index.css
│       ├── logo.svg
│       ├── reportWebVitals.js
│       ├── setupTests.js
│       ├── components/
│       │   ├── Dashboard.js
│       │   ├── Footer.js
│       │   ├── ForgotPassword.js
│       │   ├── Header.js
│       │   ├── Login.js
│       │   ├── ResetPassword.js
│       │   └── Signup.js
│       ├── context/
│       │   └── AuthContext.js
│       └── services/
│           └── api.js

## Features
- User authentication (JWT & Google OAuth)
- Password reset via email
- User roles: HR, Recruiter, HR+Recruiter
- Modern dashboard UI
- Modular backend and frontend structure

## Getting Started

### Backend
1. Navigate to the backend folder:
   cd Placify/backend
   
2. Install dependencies:
   npm install

3. Create a `.env` file with your environment variables (see sample below).
4. Start the server:
   npm start

### Frontend
1. Navigate to the frontend folder:
   cd Placify/frontend
   
3. Install dependencies:
   npm install

4. Start the development server:
   npm start

## Sample .env for Backend

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback
FRONTEND_ORIGIN=http://localhost:3000
CLIENT_URL=http://localhost:3000

## License
This project is for educational and demonstration purposes.
