### 🏆 Bounty Creation Application

A Multi-Step Bounty Creation Platform built with React, Vite, TailwindCSS, React Router & LocalStorage.

### 📌 Project Overview

This application is a 3-step bounty creation wizard used to collect structured data about a bounty.
The goal is to make the bounty creation process simple, guided, and error-free.  


At the end:  

✔ The user submits the bounty  
✔ A confirmation page appears  
✔ A final JSON payload is displayed for verification  
✔ All data is stored temporarily in localStorage

**The project mimics a real-world product flow such as Upwork job creation, bounty platforms, or hackathon task creation systems.**

### 🏗️ Project Structure
```
bounty-app/
│
├── public/
│    └── Assignment_Bounty_Creation_Application_Platform.pdf
│
├── src/
│   ├── components/
│   │   ├── Input.jsx
│   │   ├── Textarea.jsx
│   │   ├── Dropdown.jsx
│   │   ├── Toggle.jsx
│   │   ├── Button.jsx
│   │   └── Sidebar.jsx
│   │
│   ├── context/
│   │   └── BountyContext.jsx
│   │
│   ├── pages/
│   │   ├── Step1.jsx
│   │   ├── Step2.jsx
│   │   ├── Step3.jsx
│   │   ├── Confirmation.jsx
│   │   └── Result.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── netlify.toml
├── postcss.config.cjs
└── tailwind.config.cjs
```

### 🚀 How to Run Locally (Step-by-Step)

## 1️⃣ Clone the project
```
git clone https://github.com/<your-username>/bounty-app.git
cd bounty-app
```

## 2️⃣ Install dependencies
```
npm install
``` 

## 3️⃣ Start the dev server
```
npm run dev
```

## 4️⃣ Open the app
Visit the URL printed by Vite, usually:
```
http://localhost:5173
```

### 🌐 How I Deployed It to Netlify

## 1. Add all files to GitHub
```
git add .
git commit -m "Initial commit"
git push origin main
```
## 2. Go to Netlify
```
Click New Site from Git

Select GitHub

Choose the repo

Build command: npm run build

Publish directory: dist
```
## 3. Netlify builds and gives a live URL

Thanks to netlify.toml, routing works automatically:
```
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

This ensures React Router works even on refresh.

### 💾 Data Persistence

Form data automatically saves and restores due to:
```
localStorage.setItem('bounty_data', JSON.stringify(next));
```

So, user progress never disappears unless they clear storage manually.

### 📝 JSON Output Format

The final JSON payload contains:
```
{
  "title": "...",
  "description": "...",
  "type": "...",
  "dominant_core": "...",
  "mode": "digital | physical",
  "location": "...",
  "reward": {
    "currency": "USD",
    "amount": 100,
    "winners": 1
  },
  "timeline": {
    "expiration_date": "...",
    "estimated_completion": {
      "days": 2,
      "hours": 5,
      "minutes": 30
    }
  },
  "hasImpactCertificate": true,
  "impactBriefMessage": "...",
  "sdgs": [...],
  "has_backer": true,
  "backer": { "name": "...", "logo": "...", "message": "..." },
  "terms_accepted": true
}
```
