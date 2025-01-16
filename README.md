# customer-crud-app 
**Customer CRUD Application**

This is a simple Customer CRUD application built with Laravel for the backend and React for the frontend. The application is containerized using Docker and orchestrated with Docker Compose.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/) and npm
- [Composer](https://getcomposer.org/)

## Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/customer-crud-app.git
cd customer-crud-app
```

### 2. Set Up the Backend

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Install PHP dependencies:

   ```bash
   composer install
   ```

3. Copy the environment file and configure it:

   ```bash
   cp .env.example .env
   ```

4. Generate the application key:

   ```bash
   php artisan key:generate
   ```

5. Configure the `.env` file for your database and application settings:

   ```env
   DB_CONNECTION=mysql
   DB_HOST=mysql
   DB_PORT=3306
   DB_DATABASE=customer_crud
   DB_USERNAME=root
   DB_PASSWORD=password
   ```

6. Run database migrations:

   ```bash
   php artisan migrate
   ```

### 3. Set Up the Frontend

1. Navigate to the `frontend` directory:

   ```bash
   cd ../frontend
   ```

2. Install JavaScript dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

### 4. Run the Application with Docker

1. Go back to the root of the project:

   ```bash
   cd ..
   ```

2. Start the Docker containers:

   ```bash
   docker-compose up -d
   ```

3. Verify the containers are running:

   ```bash
   docker ps
   ```

### 5. Test the Application

- **Backend API**: Accessible at `http://localhost:8000/api/customers`.
- **Frontend**: Accessible at `http://localhost:3000`.

### 6. Using Postman or curl to Test Endpoints

#### API Endpoints

- **POST** `/api/customers`: Create a customer.
- **GET** `/api/customers`: List all customers.
- **GET** `/api/customers/{id}`: View a specific customer.
- **PUT** `/api/customers/{id}`: Update a customer.
- **DELETE** `/api/customers/{id}`: Delete a customer.

#### Example curl Commands

1. **Create a Customer:**

   ```bash
   curl -X POST http://localhost:8000/api/customers \
   -H "Content-Type: application/json" \
   -d '{"first_name": "John", "last_name": "Doe", "email": "john.doe@example.com", "contact_number": "1234567890"}'
   ```

2. **List All Customers:**

   ```bash
   curl -X GET http://localhost:8000/api/customers
   ```

3. **View a Customer:**

   ```bash
   curl -X GET http://localhost:8000/api/customers/1
   ```

4. **Update a Customer:**

   ```bash
   curl -X PUT http://localhost:8000/api/customers/1 \
   -H "Content-Type: application/json" \
   -d '{"first_name": "Jane", "last_name": "Doe", "email": "jane.doe@example.com", "contact_number": "0987654321"}'
   ```

5. **Delete a Customer:**

   ```bash
   curl -X DELETE http://localhost:8000/api/customers/1
   ```

## Additional Notes

- Ensure your Docker containers are running before accessing the application.
- Update the `.env` file if needed to match your local configuration.
- If you encounter issues, check the logs using:
  ```bash
  docker-compose logs
  ```




