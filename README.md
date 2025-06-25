## 📥 Installation & Setup

### 🔧 1. Clone the Repository

```bash
git clone https://github.com/your-username/invoice-billing-system.git
cd invoice-billing-system/auth-service
```

> 📁 Make sure you're inside the `auth-service` folder before continuing.

---

### 📦 2. Install Dependencies

```bash
npm install
```

---

### 🛠️ 3. Create `.env` File

Create a `.env` file in the root of the `auth-service` folder:

```bash
touch .env
```

Paste the following into `.env`:

```env
PORT=4001
MONGO_URI=mongodb://localhost:27017/auth_db
JWT_SECRET=your_jwt_secret_key
```

---

### ▶️ 4. Run the Server in Development Mode

```bash
npm run dev
```

> You should see output like:
>
> ```
> Server running on http://localhost:4001
> Connected to MongoDB
> ```

---

### 🐳 5. Run with Docker

> Make sure Docker is installed and running on your machine.

#### 🛠️ Build Docker Image

```bash
docker build -t auth-service .
```

#### ▶️ Run Docker Container

```bash
docker run -d \
  --name auth-service-container \
  --env-file .env \
  -p 4001:4001 \
  auth-service
```

#### 🧾 View Logs

```bash
docker logs -f auth-service-container
```

---

### 🧹 6. Stop & Remove Docker Container (Optional)

```bash
docker stop auth-service-container
docker rm auth-service-container
```
