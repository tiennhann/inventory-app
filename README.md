# Inventory Management System

A Node.js and MongoDB powered web application for inventory management.

## Features

- Create, Read, and Query documents within a MongoDB collection
- Each product document has 5 fields (name, description, price, quantity, createdAt)
- HTML forms for creating new documents
- Display all objects in the collection
- Query products with parameters



## Deployment

This application is deployed at: https://nle.cs382.net

## Demo

[Download Demo Video](./demo.mov)

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