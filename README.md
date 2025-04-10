# Inventory Management System

A Node.js and MongoDB powered web application for inventory management.

## Features

- Create, Read, and Query documents within a MongoDB collection
- Each product document has 5 fields (name, description, price, quantity, createdAt)
- HTML forms for creating new documents
- Display all objects in the collection
- Query products with parameters

## Routes

### Pages

- `/` - Home page with navigation links
- `/upload` - Form to add new products
- `/list` - View all products in the database
- `/query` - Query products based on price, sort by various fields

### API

- `POST /api/products` - Create a new product
  - Example request body:
  ```json
  {
    "name": "Product Name",
    "description": "Product Description",
    "price": 19.99,
    "quantity": 100
  }
  ```

- `GET /api/products` - Get all products

- `GET /api/products/query` - Query products with parameters
  - Query Parameters:
    - `priceBelow` - Filter products below a certain price
    - `sortBy` - Sort by field (price, name, quantity, createdAt)
    - `order` - Sort order (asc, desc)
  - Example: `/api/products/query?priceBelow=50&sortBy=price&order=asc`

## Setup and Running

### Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file based on the example
4. Run the development server: `npm run dev`

### Docker Deployment

1. Make sure Docker and Docker Compose are installed
2. Build and run the containers: `docker-compose up -d`
3. Access the application at `http://localhost:3000` or the assigned port

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS for templating
- Docker for containerization 

## Environment Variables

- `PORT`: The port on which the application runs
- `MONGODB_URI`: The MongoDB connection string
- `NODE_ENV`: The environment in which the application runs 

## Docker Compose Configuration

```
ports:
  - "20925:3000"
``` 