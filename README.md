# E-Commerce React App

## Features

- **Product Listing**
  - Display all products in a responsive grid layout.
  - Each product shows image, title, price, and description (truncated for uniform card size).
  
- **Category Filtering**
  - Sidebar shows all available categories fetched from the API.
  - Users can select one or multiple categories to filter products dynamically.

- **Product Detail Page**
  - Dynamic routing: `/product/:id/details`.
  - Display full product information including image, title, description, price, and "Add to Cart" button.

- **Shopping Cart**
  - Add products to cart from the product list or detail page.
  - Adjust quantity directly in the cart page with "+" and "-" buttons.
  - Display total items and total cart value.
  - Responsive cart design.



---

## Technologies Used

- React.js (functional components & hooks)
- React Context API for global state management
- CSS Flexbox/Grid for responsive layouts
- Fake Store API ([https://fakestoreapi.com](https://fakestoreapi.com)) for product data

---

## Installation

1. Clone the repository:

git clone git@github.com:AK1857/e-com-app.git


2. ** Navigate to the project directory:**
cd e-com-app

3.Install dependencies:
npm install

4.Start the development server:
npm start

---

## Notes
Product data is fetched from Fake Store API.
Cart state persists only during the session (in-memory state using Context API).
Designed for learning and portfolio demonstration purposes.

