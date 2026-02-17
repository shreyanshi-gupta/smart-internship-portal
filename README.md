🚀 Smart Internship Portal

📌 Project Overview:
The Smart Internship Portal Backend is a RESTful API built using Node.js, Express, and MongoDB.
It provides full CRUD functionality to manage internship listings.

This project demonstrates real-world backend development practices including:

1.Database integration using MongoDB Atlas
2.Mongoose schema modeling
3.Async/Await controllers
4.Clean MVC architecture
5.Environment variable configuration
6.Real database CRUD operations


🏗 Architecture:
This project follows a clean layered architecture:
Routes → Controllers → Models → MongoDB

1.Routes define API endpoints
2.Controllers handle business logic
3.Models define database schema
4.MongoDB stores persistent data

This structure improves scalability and maintainability.


🛠 Tech Stack:

1.Node.js
2.Express.js
3.MongoDB Atlas
4.Mongoose
5.dotenv


📂 Folder Structure:

backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── internshipController.js
│
├── models/
│   └── Internship.js
│
├── routes/
│   └── internships.js
│
├── .env
├── .gitignore
├── index.js
└── package.json


🔐 Environment Variables

Create a .env file inside the backend folder:
PORT=5000
MONGO_URI=your_mongodb_connection_string
⚠ Never push .env to GitHub.


▶️ Running the Project:

cd backend
npm install
npm start
Server runs at:
http://localhost:5000


📡 API Endpoints:

1.Get All Internships
    GET /api/internships
2.Get Internship by ID
    GET /api/internships/:id
3.Create Internship
    POST /api/internships
4.Update Internship
    PUT /api/internships/:id
5.Delete Internship
    DELETE /api/internships/:id   


📈 Key Concepts Demonstrated:

1.REST API design
2.MongoDB CRUD operations
3.Async/Await error handling
4.Modular folder structure
5.Environment configuration
6.Database connection management


