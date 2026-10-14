# Online Book Store

A full-stack React + TypeScript + MongoDB bookstore application with responsive pages for home, login, registration, and catalogue browsing.

## Features

- Responsive bookstore homepage with hero section and featured books
- User registration and login pages
- Book catalogue with search and filters
- MongoDB-backed backend with Express
- JWT authentication for login flows

## Tech Stack

- Frontend: React, TypeScript, Vite
- Backend: Node.js, Express, MongoDB, Mongoose

## Folder structure

```text
client/    # React frontend
server/    # Express + MongoDB backend
```

## Setup

### 1) Backend

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

### 2) Frontend

```bash
cd client
npm install
npm run dev
```

## Default URLs

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Environment config

The backend uses MongoDB connection string and JWT secret from `.env`.

## Notes

This project is designed for local development and can be extended with cart, checkout, admin dashboard, and orders.
