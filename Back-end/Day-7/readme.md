# 🎵 Moody Player

> An AI-powered music player that detects a user's mood through facial expressions and recommends songs that match their emotions in real time.

---

## 📖 Description

Moody Player is a full-stack web application that combines **Artificial Intelligence** and **Music Recommendation** to create a personalized listening experience. Using **face-api.js**, the application detects the user's facial expression through the webcam, identifies the dominant emotion, and fetches songs associated with that mood from a MongoDB database.

The project demonstrates the integration of computer vision with modern web technologies to deliver an interactive and responsive user experience.

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Axios
- CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### AI / Machine Learning
- face-api.js

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## 🧠 How It Works

1. The user opens the application and grants webcam access.
2. The webcam captures facial expressions in real time.
3. **face-api.js** analyzes the face and detects the user's dominant emotion.
4. The detected mood is sent to the backend through a REST API.
5. The backend queries MongoDB for songs matching that mood.
6. The recommended songs are displayed in the music player for the user to enjoy.

---

## 😊 Supported Moods

| Mood | Recommendation |
|------|----------------|
| 😊 Happy | Upbeat & Energetic Songs |
| 😢 Sad | Calm & Emotional Songs |
| 😠 Angry | High-Energy Tracks |
| 😐 Neutral | Mixed Playlist |
| 😲 Surprised | Trending Songs |
| 😨 Fearful | Relaxing Music |
| 🤢 Disgusted | Chill & Soft Music |

---

## 📁 Project Structure

```
Moody-Player/
│
├── Backend/
│   ├── src/
│   │   ├── db/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── app.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── config.js
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Live Application
🔗 **Here:** http://moody-player-jade.vercel.app

---

## 👨‍💻 Author

**Harsh Pandey**
