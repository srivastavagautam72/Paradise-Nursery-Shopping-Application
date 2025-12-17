# Paradise Nursery Shopping Application

## Description

Paradise Nursery Shopping Application is a modern React web application designed for an online plant shop. The application provides a seamless shopping experience for plant enthusiasts to browse, discover, and purchase high-quality houseplants from the comfort of their homes.

## Features

- Browse plants by categories (Indoor Plants, Succulents, Flowering Plants)
- Add items to shopping cart with quantity management
- Remove items from cart
- Calculate total cart value and item count
- Clean, responsive UI with background imagery
- React Router navigation
- Redux Toolkit state management

## Tech Stack

- **React**: Frontend library for building user interfaces
- **Redux Toolkit**: State management for cart functionality
- **React Router**: Client-side routing
- **CSS**: Styling and responsive design

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
paradise-nursery/
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── CartItem.jsx
│   │   ├── ProductList.jsx
│   │   └── index.css
│   ├── store/
│   │   └── CartSlice.jsx
│   ├── main.jsx
│   └── vite.config.js
├── package.json
└── README.md
```

## Usage

1. **Home Page**: View the landing page with company information
2. **Get Started**: Click to browse our plant collection
3. **Browse Plants**: Explore different categories of houseplants
4. **Add to Cart**: Add plants to your shopping cart
5. **Manage Cart**: View, modify quantities, or remove items from cart
6. **Checkout**: Proceed to checkout (feature coming soon)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
