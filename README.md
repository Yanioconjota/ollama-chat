# 🧠 React Chat UI for FastAPI + Ollama

A lightweight and responsive chat interface built with **React**, **Vite**, and **Tailwind CSS**, designed to interact with a FastAPI backend powered by **Ollama** (LLaMA3 model).

---

## 🚀 Features

- ⚛️ Built with React + Vite for fast development
- 💬 Connects to FastAPI `/ask` endpoint
- 📦 Tailwind CSS for responsive UI
- 🔁 Async request handling with loading state

---

## 📦 Project Structure

```
ollama-chat/
├── src/
│   ├── App.tsx          # Main chat component
│   ├── index.tsx        # Entry point
│   └── index.css        # Tailwind CSS styles
├── public/
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts
```

---

## ⚙️ Setup

### 1. Clone the repo
```bash
git clone <your-repo-url> ollama-chat
cd ollama-chat
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Tailwind CSS
Tailwind is already set up. If needed, update `tailwind.config.js`:

```js
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
]
```

### 4. Run the app
```bash
npm run dev
```

Go to: [http://localhost:5173](http://localhost:5173)

---

## 🔗 FastAPI Endpoint Required
Make sure you have a backend running at:

```http
POST http://localhost:8000/ask
```

It should receive a payload:
```json
{ "prompt": "Why is the sky blue?" }
```

And return a response like:
```json
{ "result": "The sky appears blue because of Rayleigh scattering..." }
```

---

## 🧪 Testing
You can test the endpoint separately using `curl`:

```bash
curl -X POST http://localhost:8000/ask \
     -H "Content-Type: application/json" \
     -d '{ "prompt": "Tell me a joke" }'
```

---

## 🎨 UI Preview

> Chat interface includes:
> - Textarea input
> - Loading state
> - Display of API response

You can customize it with avatars, chat bubbles, and history.

---

## 📚 Tech Stack
- React + Vite
- Tailwind CSS
- Axios
- FastAPI (Backend)
- Ollama (LLaMA3)

---

## 🥚 Easter Egg
> **"¡Vamooo Ñubeeeeeeee!"** — The Ñubel Dev rallying cry 🔥

---

## 📜 License
MIT License. Use it, hack it, ship it. 🚀
