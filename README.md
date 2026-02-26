# 🎓 Student Management System 🌐💻

![](https://images.unsplash.com/photo-1523050854058-8df90110c9f1)

A **Full Stack Web Application** built using **Java Spring Boot, MySQL, HTML, CSS, and JavaScript**.  
This project demonstrates **REST API development, database integration, and frontend-backend communication** in a real-world CRUD application.

---

## 📝 Description

The **Student Management System** is a full-stack application designed to manage student records efficiently.

It allows users to:

- Add new students  
- View all students  
- Update student details  
- Delete students  

The backend is implemented using **Spring Boot** with **RESTful APIs**, while the frontend is built using **HTML, CSS, and JavaScript (Fetch API)**.

The system stores data persistently using **MySQL Database**, following a clean layered architecture.

---

## 🎯 Objectives

- Build a complete **CRUD application**
- Understand **Spring Boot REST API development**
- Implement **database connectivity using JPA & MySQL**
- Connect frontend with backend using JavaScript Fetch API
- Practice clean architecture (Controller → Service → Repository)
- Gain full-stack development experience

---

## 💻 Technologies Used

### 🔹 Backend
- **Java 17**
- **Spring Boot**
- **Spring Data JPA**
- **MySQL**
- **Maven**

### 🔹 Frontend
- **HTML5**
- **CSS3**
- **JavaScript (Fetch API)**

### 🔹 Tools
- **Git & GitHub**
- **VS Code**
- **MySQL Workbench**

---

## 🏗️ Application Architecture

```
Frontend (HTML / CSS / JavaScript)
              ↓
Spring Boot REST Controller
              ↓
Service Layer
              ↓
Repository Layer (JPA)
              ↓
MySQL Database
```

---

## ⚙️ Features Implemented

- ✅ Create Student  
- ✅ Read All Students  
- ✅ Update Student  
- ✅ Delete Student  
- ✅ RESTful API Endpoints  
- ✅ Modern Responsive UI  
- ✅ Persistent Data Storage  

---

## 📊 Database Structure

**Table: students**

| Column | Type | Description |
|--------|------|------------|
| id     | Long (Auto Increment) | Primary Key |
| name   | String | Student Name |
| email  | String (Unique) | Student Email |
| course | String | Course Enrolled |

---

## 🚀 How to Run Locally

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/student-management-system.git
```

### 2️⃣ Navigate to Backend

```bash
cd backend/backend
```

### 3️⃣ Configure Database

Update `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/sms_db
spring.datasource.username=root
spring.datasource.password=yourpassword
```

### 4️⃣ Run Application

```bash
mvn spring-boot:run
```

Backend runs at:

```
http://localhost:8080/api/students
```

### 5️⃣ Open Frontend

Open:

```
frontend/index.html
```

---

## 🌟 Key Learnings

- REST API Development with Spring Boot  
- JPA & Database Integration  
- Full CRUD Operations  
- Frontend-Backend Communication  
- Git Version Control & GitHub Hosting  
- Full Stack Project Structure  

---

## 🔮 Future Enhancements

- 🔐 User Authentication (JWT)  
- 🔎 Search & Filter Functionality  
- 📊 Admin Dashboard  
- 🌐 Cloud Deployment  
- 📱 Mobile Responsive Design  
- 🐳 Docker Containerization  

---

## 👨‍💻 Author

**B Prasad**

---

⭐ If you found this project helpful, consider giving it a star!
