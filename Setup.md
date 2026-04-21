# 🔧 Prerequisites

Make sure you have installed:

 - Node.js (v18+ recommended)
 - MongoDB (running locally)

---

## 🛠️ 1. Backend Setup

Paste these commands in the terminal make sure you are inside the file-share-system

cd backend

npm install

---

## ▶️ 2. Start MongoDB

Must have MongoDB and mongoDB Compass installed in the system

---

## 🎨 3. Frontend Setup

Paste these commands in the terminal make sure you are inside the file-share-system

cd frontend

npm install

---

## 📡 4. Enable Cross-Device File Sharing

Step 1: Find Your IP Address

Run the below command in systems terminal 

ipconfig

Look for:

IPv4 Address: 192.168.x.x

Copy the ip address

Step 2: Update Frontend API URLs

In:
 - frontend/src/components/Upload.js
 - frontend/src/components/Download.js

Replace (your ip address) with the copied ip address

Step 4: Allow Firewall Access

Open Windows Defender Firewall

Click Allow an app through firewall

Enable Node.js (Private + Public)

---

## 📁 5. Create uploads

Create a uploads folder inside the backend folder

---

## 🌐 6. Access the Application

Open 2 New Terminal one for Backend and one for Frontend

Make sure yoy are inside the file-share-system folder in both Terminal and paste these command

In Terminal 1:

cd backend

node server.js

You should see:

Server running on port 5000

MongoDB Connected

In Terminal 2:

cd frontend

npm start

You will see:

Local:   http://localhost:3000

Network: http://YOUR-IP:3000

Local is for same device and on another device (same WiFi) you will use Network link

---

Now you are good to go

---
