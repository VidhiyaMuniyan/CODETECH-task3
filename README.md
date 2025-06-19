# CODETECH-task3

 Collaborative Real-Time Editor (Like Google Docs)

 **Task Description**

Build a **real-time collaborative editor** for code or notes, similar to Google Docs, using **WebSockets** for instant updates. The platform must support **multi-user editing**, reflect real-time changes across all clients, and provide a clean and responsive user interface.


 **Tech Stack**

| Layer         | Technology                        |
| ------------- | --------------------------------- |
| **Frontend**  | HTML, CSS, JavaScript             |
| **Backend**   | Node.js, Express.js               |
| **Real-time** | WebSocket (`ws` library)          |
| **Optional**  | MongoDB (for session persistence) |



 **Installation & Run Instructions**

 1. **Clone the repository**

```bash
git clone https://github.com/your-username/collab-editor.git
cd collab-editor
```

 2. **Install dependencies**

```bash
npm install
```

 3. **Start the server**

```bash
node server.js
```

 4. **Open in browser**

Visit `http://localhost:3000` in multiple tabs or browsers to test real-time collaboration.

---

 **Project Structure**

```
collab-editor/
├── public/
│   ├── index.html     # Frontend UI
│   ├── style.css      # Styling
│   └── script.js      # WebSocket logic
├── server.js          # Express + WebSocket backend
└── package.json       # Project config and dependencies
```



 **Features**

* Multi-user real-time editing
* Auto-synced changes using WebSocket
* Clean and simple text editor interface
* Lightweight and easy to deploy



 **Conclusion**

This project demonstrates a basic but fully functional **real-time collaborative editor** built with WebSockets and Express. It allows multiple users to collaboratively write and edit text with immediate updates. The project serves as a strong foundation for building more advanced tools with features like authentication, version control, code syntax highlighting (using CodeMirror or Monaco), and document persistence.



