# HTTP Baseline Course 🚀

This project demonstrates the fundamentals of **HTTP** through practical implementations and a simple **Todo Application**.  
It covers key topics like URL encoding, HTTP security, content negotiation, status codes, and an overview of how the web works.  

---

## 📌 Topics Covered

### 1. HTTP and Web Overview 🌐
- Explanation of how the **web works** (client → server → response).
- Example: Sending a request from the browser and receiving JSON responses from the backend.

### 2. HTTP URL Encoding 🔑
- Shows how special characters are encoded in URLs (`%20` for spaces, etc.).
- Example: Searching with encoded parameters.

### 3. HTTP Security 🔒
- Uses **HTTPS**, **CORS**, and secure headers in Express.
- Example: Demonstrates safe API access.

### 4. Content Negotiation 📄
- Server returns different content (`JSON` or `HTML`) based on the **Accept header**.
- Example: If client asks for `application/json`, returns JSON. If `text/html`, returns HTML.

### 5. HTTP Status Codes ✅
- Demonstrates status codes:
  - `200 OK` → Success  
  - `201 Created` → Resource created  
  - `400 Bad Request` → Invalid input  
  - `404 Not Found` → Resource missing  
  - `500 Internal Server Error` → Unexpected error  

### 6. Todo Application 📝
- A simple **CRUD Todo app** using:
  - `GET` → Fetch all todos  
  - `POST` → Add a new todo  
  - `PUT` → Update a todo (replace)  
  - `PATCH` → Update part of a todo  
  - `DELETE` → Remove a todo  

---

1. Clone this repository
git https://github.com/abhaykalshetti-gif/JSON-baseline.git
cd http-baseline

2. Install dependencies
npm install

3. Run the backend server
node server.js
Server runs on: http://localhost:5000

4. Open the frontend
Open index.html in your browser.
The Todo App and HTTP examples will be available.
