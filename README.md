# Server-Side-Form-Validation-in-Express.js-using-express-validator
Express.js application demonstrating server-side form validation using express-validator with EJS templates. Includes validation, sanitization, and error handling.

# User Registration Form Validation with Express.js

This project demonstrates **server-side form validation** in an Express.js application using **express-validator** and **EJS**.  
It validates user input, sanitizes data, and displays validation errors in a clean and structured way.

---

## 🚀 Features

- Express.js backend
- EJS templating engine
- Form validation using `express-validator`
- Custom error messages
- Input sanitization & normalization
- Age, email, password, state validation
- Prevents reserved usernames (like `admin`)

---

## 🛠 Tech Stack

- Node.js
- Express.js
- express-validator
- EJS

---

## 📂 Project Structure

project/
│── views/
│ └── myform.ejs
│── app.js
│── package.json



---

## 🧪 Validation Rules

- **Username**
  - Required
  - Minimum 3 characters
  - Only alphabets allowed
  - Cannot be `admin`

- **Email**
  - Must be a valid email format

- **Password**
  - Length between 5–10 characters
  - Must be a strong password

- **Age**
  - Numeric only
  - Minimum age: 18

- **State**
  - Allowed states:
    - Maharashtra
    - Karnataka
    - Andhra Pradesh
    - Goa

👨‍💻 Author

Swaraj Salunkhe
