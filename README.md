# Inventory Management System

A MongoDB and Node.js powered inventory management system that allows for the creation, reading, and querying of inventory items and manufacturers.

## Deployment

This application is deployed at: https://nle.cs382.net

## Routes

### Web UI Routes

- `/` - Home page
- `/upload` - Form to create a new inventory item
- `/upload-manufacturer` - Form to create a new manufacturer
- `/list` - List all inventory items
- `/list-manufacturers` - List all manufacturers
- `/query` - Interface for querying inventory items

### REST API Routes

#### Products

- `POST /api/products` - Create a new product
  - Example request body:
    ```json
    {
      "name": "Laptop",
      "description": "High-performance laptop",
      "price": 1200,
      "quantity": 50,
      "manufacturer": "65f1234567890abcdef12345" // ObjectId reference to a manufacturer
    }
    ```

- `GET /api/products` - Get all products
  - Example: `/api/products`

- `GET /api/products?query=parameters` - Query products
  - Example: `/api/products?price[lt]=1000` - Get products less than $1000
  - Example: `/api/products?name=Laptop` - Get products with name "Laptop"
  - Example: `/api/products?quantity[gt]=10` - Get products with quantity greater than 10
  - Example: `/api/products?sort=price` - Get products sorted by price ascending
  - Example: `/api/products?sort=-price` - Get products sorted by price descending

#### Manufacturers

- `POST /api/manufacturers` - Create a new manufacturer
  - Example request body:
    ```json
    {
      "name": "Tech Corp",
      "location": "San Francisco, CA",
      "founded": "2005-01-15T00:00:00.000Z",
      "contactEmail": "contact@techcorp.com"
    }
    ```

- `GET /api/manufacturers` - Get all manufacturers
  - Example: `/api/manufacturers`

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS Templates
- Docker/Podman for containerization

## Local Development

1. Clone the repository
2. Install dependencies with `npm install`
3. Start MongoDB locally or use Docker Compose: `docker-compose up -d mongodb`
4. Start the application: `npm run dev`
5. Visit http://localhost:3000

## Deployment Instructions

1. SSH into the server: `ssh username@cs382.net`
2. Clone this repository
3. Use Podman Compose to start the application:
   ```
   podman-compose up -d
   ```
4. The application will be available at https://nle.cs382.net 