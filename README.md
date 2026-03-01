
# 🌤️ Weather App (React + Vite)

## Description

This is a **Weather Application** built using **React**, **Vite**, **Tailwind CSS**, and **OpenWeather API**.
The application allows users to search for a city and get real-time weather information such as temperature, humidity, and wind speed.

---

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Real-time weather data
- 🧠 Context API for state management
- 🔐 Environment variables for API security
- 📱 Responsive UI using Tailwind CSS

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React | UI Framework |
| Vite | Build Tool |
| Tailwind CSS | Styling |
| Context API | State Management |
| OpenWeather API | Weather Data |
| Fetch API | HTTP Requests |

---

## 📁 Project Structure

```
my-react-app/
├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone 
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment variables

Create a `.env` file in the root directory:

```env
VITE_WEATHER_KEY=your_openweather_api_key
```

> ⚠️ **Important:** The variable name must start with `VITE_` because Vite is used.

---

## 🚀 Running the Project

Start the development server:

```bash
npm run dev
```

Then open your browser at:

```
http://localhost:5173
```

---

## ☁️ Deployment (Vercel)

When deploying to **Vercel**:

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Open your project **Settings**
3. Navigate to **Environment Variables** and add:

```
Name:  VITE_WEATHER_KEY
Value: Your API Key
```

4. **Redeploy** the project for changes to take effect.

---

## 🔐 Environment Variables

This project uses environment variables to keep your API key secure.

- ❌ Do **not** push your `.env` file to GitHub.
- ✅ Make sure `.gitignore` contains the following:

```
.env
```

---

## 🔮 Future Improvements

- [ ] Add 7-day forecast
- [ ] Add weather icons
- [ ] Add dark mode toggle
- [ ] Add location-based weather detection
- [ ] Improve UI animations

---


