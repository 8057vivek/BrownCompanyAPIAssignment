# Node Express Product & Cart API

## Overview

A simple Node.js/Express service with:
- **GET /products**: Returns a hardcoded list of 30 products.
- **POST /cart**: Accepts a product ID and quantity, returns the total price.

## Setup

1. **Install dependencies**
    ```
    npm install
    ```

2. **Run the server**
    ```
    node src/app.js
    ```
    or
    ```
    npm start
    ```

## API Endpoints

## Testing the API with Postman

You can test all endpoints using [Postman](https://www.postman.com/):

---

### 1. GET /products

**Steps:**
1. Open Postman and create a new request.
2. Set the method to **GET**.
3. Enter the URL: `http://localhost:3000/products`
4. Click **Send**.
5. You should see a list of products in the response.

---

### 2. POST /cart

#### Valid Example

**Steps:**
1. Create a new request in Postman.
2. Set the method to **POST**.
3. Enter the URL: `http://localhost:3000/cart`
4. Go to the **Body** tab, select **raw**, and choose **JSON**.
5. Enter:
   ```json
   {
     "productId": 1,
     "quantity": 2
   }
   ```
6. Click **Send**.
7. **Expected Response:**
   ```json
   {
     "product": "Product A",
     "quantity": 2,
     "totalPrice": 20
   }
   ```

---

#### Invalid Product Example

**Steps:**
1. Use the same POST setup as above.
2. Enter:
   ```json
   {
     "productId": 999,
     "quantity": 2
   }
   ```
3. Click **Send**.
4. **Expected Response:**
   ```json
   {
     "error": "Product not found"
   }
   ```

---

#### Invalid Quantity Example

**Steps:**
1. Use the same POST setup as above.
2. Enter:
   ```json
   {
     "productId": 1,
     "quantity": 0
   }
   ```
3. Click **Send**.
4. **Expected Response:**
   ```json
   {
     "error": "Invalid quantity"
   }
   ```

---

**Note:**  
- Always select **JSON** in the body type.
- Use double quotes for JSON keys and values.
- Make sure your server is running (`npm start`).

## Project Structure

- `src/models/product.js` - Product data
- `src/controllers/productsController.js` - API logic
- `src/routes/index.js` - API routes
- `src/app.js` - Express app entry point

---

## Scripts

- `npm start` - Start the server

---
