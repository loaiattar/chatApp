# 💬 ChatApp

A real-time chat application built with **Node.js**, **Express**, and **Socket.IO**. This project demonstrates the core functionality of a live chat system where multiple users can connect, exchange messages instantly, and enjoy a smooth communication experience.

## 🚀 Features

- Real-time communication using WebSockets
- Multi-user chat room
- Join and leave notifications
- Basic UI with instant message updates
- Lightweight and fast setup

## 🛠 Tech Stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.IO](https://socket.io/)
- HTML, CSS, JavaScript (Vanilla)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/loaiattar/chatApp.git
   cd chatApp
  2. **Install Dependencies:
     ```bash
     npm install
3. **Start the Server:
   ```bash
   node index.js

## 🚀 Project Structure:

chatApp/
│
├── public/               # Static frontend assets
│   ├── index.html        # Main HTML file
│   ├── style.css         # Basic styling
│   └── script.js         # Handles frontend socket logic
│
├── index.js              # Express + Socket.IO server logic
├── package.json          # Project metadata and dependencies
└── README.md             # You're here!

## ⚙️ Socket Events

Event	         Emitted By	        Description
join	         Client	            User joins with a username
chatMessage 	 Client	            Sends message to server
message 	     Server	           Broadcasts message to all clients
disconnect	  Socket.IO	         Detects when a user leaves

## ⚙️ Socket Events

** Event	Emitted By	Description
** join	Client	User joins with a username
** chatMessage	Client	Sends message to server
** message	Server	Broadcasts message to all clients
** disconnect	Socket.IO	Detects when a user leaves
##👤 Author

Loai Attar
🔗 GitHub
✉️ Feel free to reach out with questions or ideas!

## Built with ❤️ for learning, experimenting, and having fun!
