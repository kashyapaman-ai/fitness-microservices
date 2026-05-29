# 🏋️ Fitness Tracker Microservices

A scalable fitness tracking platform built using Spring Boot Microservices, React, Keycloak, RabbitMQ, MongoDB, and Google Gemini AI.

## 🚀 About The Project

This application allows users to track fitness activities, manage workout records, and receive AI-powered fitness recommendations. The system follows a microservices architecture to ensure modularity, scalability, and maintainability.

## ✨ Features

* 🔐 Secure authentication with Keycloak
* 👤 User management
* 🏃 Activity tracking and history
* 🤖 AI-powered fitness recommendations using Gemini AI
* 🌐 API Gateway for centralized routing
* 📡 Service Discovery with Eureka
* ⚙️ Centralized configuration using Config Server
* 📨 Event-driven communication with RabbitMQ
* 🎨 Responsive React frontend

## 🛠️ Tech Stack

| Category          | Technologies                    |
| ----------------- | ------------------------------- |
| Backend           | Java, Spring Boot, Spring Cloud |
| Frontend          | React, Vite, Redux Toolkit      |
| Database          | MongoDB                         |
| Authentication    | Keycloak, OAuth2                |
| Messaging         | RabbitMQ                        |
| AI                | Google Gemini API               |
| Service Discovery | Eureka                          |
| Configuration     | Spring Cloud Config             |

## 📂 Project Structure

```text
fitness-microservices/
├── userservice/
├── activityservice/
├── aiservice/
├── gateway/
├── configserver/
├── eureka/
└── fitness-app-frontend/
```

## 🏗️ Architecture

```text
React Frontend
       │
       ▼
   API Gateway
       │
 ┌─────┼─────┐
 ▼     ▼     ▼
User Activity AI
Service Service Service
       │
       ▼
    MongoDB

RabbitMQ → Event Communication
Eureka → Service Discovery
Config Server → Centralized Configuration
```

## 🎯 Learning Outcomes

* Microservices Architecture
* API Gateway Pattern
* Service Discovery
* Event-Driven Communication
* OAuth2 Authentication
* AI Integration with Gemini
* Full-Stack Development

## 👨‍💻 Author

**Aman Raj**
