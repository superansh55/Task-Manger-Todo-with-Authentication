# Task-Manger-Todo-with-Authentication
Here is a comprehensive and professional `README.md` template tailored specifically for your project based on the code and features we've been working on.

You can copy and paste this directly into the `README.md` file in your repository!

---

```markdown
# 📝 Task Manager (Todo App) with Authentication

A full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to create, manage, and track their daily tasks with deadlines. It includes a robust user authentication system to ensure that users can securely manage their own private task lists.

## ✨ Features

* **User Authentication:** Secure signup and login functionality using JSON Web Tokens (JWT).
* **Protected Routes:** Frontend and backend logic to ensure users can only access and modify their own tasks.
* **Full CRUD Functionality:** Create, Read, Update, and Delete tasks seamlessly.
* **Deadline Tracking:** Set deadlines for tasks and view formatted date/time statuses (e.g., "in 2 days", "overdue") powered by `date-fns`.
* **Global State Management:** Utilizes React Context API (`AuthContext` and `TaskContext`) for efficient state management without prop drilling.
* **Sleek UI/UX:** A custom, fully responsive Dark Theme built with modern CSS variables, animations, and Google Material Symbols.

## 🛠️ Tech Stack

**Frontend:**
* React (with Hooks: `useState`, `useEffect`, Custom Hooks)
* Context API (State Management)
* CSS3 (Custom Dark Theme & Responsive Design)
* `date-fns` (Date formatting and relative time calculations)

**Backend:**
* Node.js
* Express.js
* MongoDB (Database)
* Mongoose (ODM for database schemas)
* JSON Web Tokens (JWT for secure authentication)
* bcrypt (Password hashing)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites
* [Node.js](https://nodejs.org/) installed on your machine.
* A [MongoDB](https://www.mongodb.com/) URI (either local or MongoDB Atlas).

### 1. Clone the repository
```bash
git clone [https://github.com/superansh55/Task-Manger-Todo-with-Authentication.git](https://github.com/superansh55/Task-Manger-Todo-with-Authentication.git)

```

### 2. Backend Setup

Navigate to the backend directory, install dependencies, and set up your environment variables.

```bash
cd backend
npm install

```

Create a `.env` file in the root of the `backend` directory and add the following:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
SECRET=your_super_secret_jwt_string

```

Start the backend server:

```bash
npm run dev
# Server should now be running on http://localhost:4000

```

### 3. Frontend Setup

Open a new terminal, navigate to the frontend directory, and install dependencies.

```bash
cd frontend
npm install

```

Start the React development server:

```bash
npm start
# or npm run dev (if you are using Vite)

```

## 📂 Folder Structure

```text
Task-Manger-Todo-with-Authentication/
├── backend/               # Express server, MongoDB models, Auth controllers
│   ├── controllers/       # Logic for handling routes (tasks, users)
│   ├── middleware/        # JWT verification middleware
│   ├── models/            # Mongoose schemas (User, Task)
│   ├── routes/            # API endpoints
│   └── server.js          # Entry point for backend
│
└── frontend/              # React application
    ├── src/
    │   ├── components/    # Reusable UI components (TaskDetails, etc.)
    │   ├── context/       # Auth and Task Context providers
    │   ├── hooks/         # Custom hooks (useLogin, useTasksContext, etc.)
    │   ├── pages/         # Main views (Home, Login, Signup)
    │   ├── index.css      # Custom styling and dark theme variables
    │   └── App.jsx        # Main React component and Router

```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://www.google.com/search?q=https://github.com/superansh55/Task-Manger-Todo-with-Authentication/issues).

## 👨‍💻 Author

**Ansh**

* GitHub: [@superansh55](https://www.google.com/search?q=https://github.com/superansh55)

```

```