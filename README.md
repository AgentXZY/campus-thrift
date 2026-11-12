# 🎓 Campus Thrift

A simple **MERN Stack marketplace platform** designed specifically for college students to buy and sell used items within their campus community.

Students can easily list and discover second-hand books, electronics, hostel essentials, and other useful items at affordable prices while promoting sustainability and reducing waste.

---

## 🚀 Tech Stack

### Frontend
- React.js
- Vite
- CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas (Cloud NoSQL Database)

---

## ✨ Features

### 🛒 Marketplace Feed
Browse all available listings in a clean and responsive grid layout.

### 🔍 Category Filtering
Filter products by:
- 📚 Books
- 💻 Electronics
- 🛏️ Hostel Gear
- 📦 Other

### 💰 Sell an Item
List products quickly through a simple form that includes:
- Item Name
- Description
- Price
- Image URL
- Seller Contact Information

### ☁️ Cloud Storage
All marketplace listings are securely stored and managed using MongoDB Atlas.

### 📱 Responsive Design
Works smoothly across desktop, tablet, and mobile devices.

---

## 📂 Project Structure

```text
campus-thrift/
│
├── backend/          # Express server and MongoDB models
├── frontend/         # React + Vite frontend
├── .gitignore
└── README.md
```

---

## ⚙️ Local Setup & Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/campus-thrift.git
cd campus-thrift
```

---

### 2️⃣ Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `backend` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string_here
```

Start the backend server:

```bash
node server.js
```

The backend server will run at:

```text
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

Open a new terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend application will run at:

```text
http://localhost:5173
```

---

## 🌐 Usage

1. Open the application in your browser.
2. Browse available products.
3. Filter listings by category.
4. Add a new item using the "Sell Item" form.
5. Contact sellers directly using the provided details.

---

## 🎯 Future Enhancements

- User Authentication (JWT)
- Campus-specific verification
- Image upload using Cloudinary
- Wishlist functionality
- Search and sorting
- In-app messaging
- Product availability status

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit a pull request.

---

## 📜 License

This project is licensed under the MIT License.

---
