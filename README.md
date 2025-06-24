# 👮‍♀️ Women Safety Website

A real-time women safety web application designed to help women during emergencies by offering features like panic alerts, rights information, and more.

---

## 🔌 API You Integrated

The API exposes the following endpoints:

| Method | Endpoint           | Description                   |
| ------ | ------------------ | ----------------------------- |
| POST   | `/api/reports`     | Create a new emergency report |
| GET    | `/api/reports`     | Fetch all emergency reports   |
| PUT    | `/api/reports/:id` | Update a report's status      |
| DELETE | `/api/reports/:id` | Delete a report by ID         |

---

## 🔍 Features

- 🆘 **Panic Button** with siren alert (frontend and audio trigger)
- 📜 **Women's Rights Page** with visual support (Unsplash images)
- 🔊 **Emergency Alert** voice support
- 🚨 Sends real-time emergency alert to selected contacts or services _(future scope)_
- 🎨 Simple, intuitive UI built with HTML, CSS, JS, and React (if used)

---

## 🛠 Tech Stack

- **Frontend**: HTML, CSS, JavaScript (and React if applicable)
- **Backend**: Node.js, Express
- **Database**: MongoDB (via Mongoose)
- **Environment Variables**: dotenv
- **Testing**: Jest (test runner), Supertest (API testing)
- **Audio**: Police siren `.mp3` integrated into the panic button
- **Hosting**: GitHub Pages _(optional)_
- **Version Control**: Git & GitHub

---

## 🚀 Getting Started

### 📁 Clone the repository:

```bash
git clone https://github.com/Sristi29/Women_Safety_v.git
cd Women_Safety_v
⚙️ Install backend dependencies:
bash
Copy code
npm install
🌐 Set up your .env file:
Create a .env file in the root folder and add:

env
Copy code
MONGODB_URI=your_mongodb_connection_string
PORT=5000
▶️ Run the backend server:
bash
Copy code
npm start
🌍 Start a local server for frontend (optional):
bash
Copy code
npx live-server
🧪 How to Run Tests
bash
Copy code
npm test
This will run unit, integration, and API tests.

✅ Test Coverage
📸 Test Coverage Screenshot:


Tests written using Jest and Supertest

Covers unit logic, DB integration, and API responses

Achieved approximately 60% coverage and improving

🧰 Testing Tools Used
✅ Jest — Unit & integration test framework

✅ Supertest — HTTP request testing for Express APIs

✅ MongoDB Memory Server (optional) — For mocking MongoDB in tests

📖 Learn About Your Rights
Visit the "Rights" section of the app to read about:

Fundamental rights of women in India

Emergency helpline numbers

Self-defense resources

🌱 Future Scope
Real-time location tracking

Auto-SMS to emergency contacts

Integration with police and helpline APIs

Multi-language support

👩‍💻 About the Author
Sristi Srivastava

Final Year B.Tech CSE Student, KIIT University

Passionate about building real-world projects that make an impact.




```
