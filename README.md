
```md
# 🛒 E-SHOP | E-Commerce Web Application

A modern and responsive **E-Commerce web application** built with **React**, **Redux Toolkit**, and **Tailwind CSS**.  
The project provides a complete shopping experience including product listing, product details, cart management, authentication modals, and static pages.

---

## 🚀 Features

- 🏠 Home page with product listing
- 🛍️ Shop page
- 🔍 Product Details page (dynamic routing)
- 🛒 Shopping Cart
  - Add to cart
  - Increment / decrement quantity
  - Remove item
  - Clear cart
- 🔐 Login & Register (Modal based UI)
- 📄 About & Contact pages
- ⭐ Product rating display
- 📱 Fully responsive design
- ⚡ Fast and optimized UI

---

## 🧑‍💻 Tech Stack

- **Frontend:** React.js
- **State Management:** Redux Toolkit
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **API:** Fake Store API
- **HTTP Requests:** Axios

---

## 📂 Project Structure

```

src/
│── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── ProductDetails.jsx
│   ├── Login.jsx
│   └── Register.jsx
│
│── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── Cart.jsx
│   ├── About.jsx
│   └── Contact.jsx
│
│── redux/
│   ├── cartSlice.js
│   └── store.js
│
│── layout/
│   └── Layout.jsx
│
│── App.jsx
│── main.jsx

```

---

## 🌐 API Used

This project uses **Fake Store API** for product data:

```

[https://fakestoreapi.com/products](https://fakestoreapi.com/products)

````

---

## 🛠️ Installation & Setup

1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/e-shop.git
````

2️⃣ Navigate to the project folder

```bash
cd e-shop
```

3️⃣ Install dependencies

```bash
npm install
```

4️⃣ Run the development server

```bash
npm run dev
```

The app will run on:

```
http://localhost:5173
```

---

## 🛒 Cart Logic (Redux)

* Global cart state managed with Redux Toolkit
* Automatically calculates:

  * Total items
  * Total price
* Supports:

  * Add / remove product
  * Update quantity
  * Clear cart

---

## 🔐 Authentication UI

* Login & Register handled via **modal**
* Easy switch between Login ↔ Register
* Ready to be connected with backend authentication


## 📈 Future Improvements

* 🔐 Real authentication (JWT)
* 💳 Payment gateway integration
* ❤️ Wishlist feature
* 🧠 Product recommendations
* 🌙 Dark mode
* ⏳ Skeleton loading

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repository and submit a pull request.

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 👨‍💻 Author

**Mahmoud**
Frontend Developer
🇪🇬 Egypt

---

⭐ If you like this project, don't forget to give it a star on GitHub!

