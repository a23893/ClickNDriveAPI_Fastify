# ClickNDrive API

🚗 **ClickNDrive** is a RESTful API built with Fastify for managing vehicle sales and user operations. It follows MVC architecture, connects to MongoDB, and includes API versioning and Swagger documentation.

---

## Features

- Fastify-based API with TypeScript support
- MongoDB integration
- API versioning (e.g., `/api/v1/users`, `/api/v1/vehicles`)
- Modular route structure
- Input validation with Zod
- Swagger (OpenAPI) documentation with UI
- CORS enabled for all origins
- Docker Compose setup for MongoDB and Mongo Express

---

## Getting Started

### Prerequisites

- Node.js (>=16)
- npm
- Docker & Docker Compose (for MongoDB and Mongo Express)

### Installation

1. Clone the repository

```bash
git clone https://github.com/a23893/ClickNDriveAPI_Fastify.git
cd clickndrive-api
```

2. Install dependencies

```bash
npm install
```

3. Configure environment variables

Change the connection string if you need to in the config folder and db.ts file (example):

```db.ts
mongodb://mongoadmin:mongoadmin@localhost:27017/ClickNdriveDB?authSource=admin
```

4. Start MongoDB and Mongo Express using Docker Compose

```bash
docker-compose up -d
```

5. Run the API in development mode with auto reload (with nodemon)

```bash
npm run dev
```

The API will be available at `http://localhost:3000`.

Swagger UI documentation is available at `http://localhost:3000/docs`.

Endpoint example: `http://localhost:3000/api/v1/users`.

---

## Project Structure

```plaintext
src/
├── controllers/
├── models/
├── routes/
│   └── v1/
│       ├── user.routes.ts
│       └── vehicle.routes.ts
├── services/
├── lib/
│   └── db.ts
└── index.ts
```

---

## Scripts

- `npm run dev` - Start development server with auto reload
- `npm run build` - Build production code (if configured)
- `npm start` - Run production server (if configured)

---

## Technologies

- Fastify
- TypeScript
- MongoDB
- Zod (validation)
- Swagger / OpenAPI
- Docker & Docker Compose

---

## 📄 License

MIT Diogo Gomes

---

## 👨‍💻 Author

Diogo Gomes - https://github.com/a23893 / https://github.com/diogo22gomes

---

Feel free to contribute or report issues!
