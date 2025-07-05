iamRajatSharma: this is my project. Generate a readme file for this which includes all request and response with api endpoint

Workspace: Collecting workspace information```markdown
# Invoice Billing System Microservices

This project is a microservices-based invoice billing system, consisting of four main services:

- **Auth Service** (`PORT 3001`)
- **User Service** (`PORT 3002`)
- **Invoice Service** (`PORT 3003`)
- **Payment Service** (`PORT 3004`)

Each service runs independently and communicates via REST APIs. All endpoints (except `/health` and `/api/auth/*`) require a valid JWT token in the `Authorization` header as `Bearer <token>`.

---

## Auth Service

**Base URL:** `http://localhost:3001`

### Register

- **POST** `/api/auth/register`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "yourpassword"
  }
  ```
- **Response:**
  ```json
  { "msg": "User registered successfully" }
  ```

### Login

- **POST** `/api/auth/login`
- **Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "yourpassword"
  }
  ```
- **Response:**
  ```json
  { "token": "<jwt_token>" }
  ```

---

## User Service

**Base URL:** `http://localhost:3002`

### Get My Profile

- **GET** `/api/users/me`
- **Headers:** `Authorization: Bearer <token>`
- **Response:**
  ```json
  {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2024-06-01T00:00:00.000Z"
  }
  ```

### Update My Profile

- **PATCH** `/api/users/me`
- **Headers:** `Authorization: Bearer <token>`
- **Body:** (any updatable fields, e.g. `name`)
  ```json
  {
    "name": "Jane Doe"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "user_id",
    "name": "Jane Doe",
    "email": "john@example.com",
    "password": "...",
    "createdAt": "...",
    "updatedAt": "..."
  }
  ```

---

## Invoice Service

**Base URL:** `http://localhost:3003`

### Create Invoice

- **POST** `/api/invoices`
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
  ```json
  {
    "items": [
      { "name": "Item 1", "quantity": 2, "price": 100 }
    ],
    "totalAmount": 200
  }
  ```
- **Response:**
  ```json
  {
    "_id": "invoice_id",
    "userId": "user_id",
    "items": [
      { "name": "Item 1", "quantity": 2, "price": 100 }
    ],
    "totalAmount": 200,
    "status": "unpaid",
    "createdAt": "...",
    "updatedAt": "..."
  }
  ```

### Get My Invoices

- **GET** `/api/invoices`
- **Headers:** `Authorization: Bearer <token>`
- **Response:**
  ```json
  [
    {
      "_id": "invoice_id",
      "userId": "user_id",
      "items": [ ... ],
      "totalAmount": 200,
      "status": "unpaid",
      "createdAt": "...",
      "updatedAt": "..."
    }
  ]
  ```

---

## Payment Service

**Base URL:** `http://localhost:3004`

### Make Payment

- **POST** `/api/payment`
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
  ```json
  {
    "invoiceId": "invoice_id",
    "amount": 200
  }
  ```
- **Response:**
  ```json
  {
    "_id": "payment_id",
    "userId": "user_id",
    "invoiceId": "invoice_id",
    "amount": 200,
    "status": "success",
    "createdAt": "...",
    "updatedAt": "..."
  }
  ```

### Get My Payments

- **GET** `/api/payment`
- **Headers:** `Authorization: Bearer <token>`
- **Response:**
  ```json
  [
    {
      "_id": "payment_id",
      "userId": "user_id",
      "invoiceId": "invoice_id",
      "amount": 200,
      "status": "success",
      "createdAt": "...",
      "updatedAt": "..."
    }
  ]
  ```

---

## Health Check

Each service exposes a health check endpoint:

- **GET** `/health`
- **Response:**
  ```json
  {
    "status": "OK",
    "message": "<Service Name> is up and running"
  }
  ```

---

## Environment Variables

Each service uses a `.env` file. See the `.env.sample` in each service directory for required variables.

---

## Running the Services

1. Install dependencies in each service directory:
   ```sh
   npm install
   ```
2. Start each service:
   ```sh
   npm start
   ```
3. Ensure MongoDB is running and accessible as per the `MONGO_URI` in each `.env`.

---

## Notes

- All protected endpoints require a valid JWT token in the `Authorization` header.
- Register and login via the Auth Service to obtain a token.
```
