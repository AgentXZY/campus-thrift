🎓 Campus Thrift

A simple MERN-stack e-commerce marketplace web application designed for college students to buy and sell used books, electronics, hostel gear, and more locally within their campus.

🚀 Tech Stack

Frontend: React.js (via Vite)

Backend: Node.js, Express.js

Database: MongoDB Atlas (Cloud NoSQL Database)

✨ Features

Marketplace Feed: Browse all listed items in a clean, responsive grid layout.

Category Filtering: Filter items easily by Books, Electronics, Hostel Gear, and Other.

Sell an Item: Simple submission form to list new items with pricing, images, and seller contact info.

Cloud Persistence: All marketplace listings are stored securely in MongoDB Atlas.

📂 Project Structure

campus-thrift/
├── backend/        # Node.js Express server & MongoDB schemas
├── frontend/       # React Vite user interface
├── .gitignore      # Ignored local files and modules
└── README.md       # Project documentation


⚙️ Local Setup & Installation

Clone the repository:

git clone https://github.com/YOUR_GITHUB_USERNAME/campus-thrift.git
cd campus-thrift


Setup the Backend:

Navigate to the backend folder:

cd backend


Install dependencies:

npm install


Create a .env file in the backend folder with your MongoDB connection string and port:

PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string_here


Start the backend server:

node server.js


Setup the Frontend:

Open a new terminal and navigate to the frontend folder:

cd frontend


Install dependencies:

npm install


Start the development server:

npm run dev


Open http://localhost:5173 in your browser to view the application.
