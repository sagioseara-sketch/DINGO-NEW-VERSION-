# 🏪 MathMart Arena

> **Master Math. Compete Globally. Dominate Exams.**

A competitive math learning game built as a Progressive Web App (PWA). Features real-time leaderboards, item shop, achievements, daily missions, streak system, and more.

---

## 🌐 Play Online
Once deployed: `https://<your-username>.github.io/mathmart-arena/`

---

## 📁 Project Files

```
mathmart-arena/
├── index.html          ← The entire game (single file)
├── manifest.json       ← PWA manifest (icons, name, colors)
├── sw.js               ← Service worker (offline support)
├── icons/              ← App icons (all sizes)
│   ├── icon-72.png
│   ├── icon-96.png
│   ├── icon-128.png
│   ├── icon-144.png
│   ├── icon-152.png
│   ├── icon-192.png
│   ├── icon-384.png
│   └── icon-512.png
├── generate_icons.py   ← Script to regenerate icons
├── .github/
│   └── workflows/
│       └── deploy.yml  ← Auto-deploy to GitHub Pages
└── .gitignore
```

---

## 🚀 Step-by-Step Setup

### STEP 1 — Generate Icons

You need PNG icons before publishing.

```bash
# Install Pillow (Python image library)
pip install Pillow

# Generate all icon sizes
python3 generate_icons.py

# Create screenshot
cp icons/icon-512.png icons/screenshot1.png
```

> **Alternative:** Use https://realfavicongenerator.net — upload any image and download the icon pack.

---

### STEP 2 — Publish to GitHub

#### 2a. Create a GitHub repository

1. Go to https://github.com/new
2. Repository name: `mathmart-arena`
3. Set to **Public**
4. Click **Create repository**

#### 2b. Push your files

```bash
# In your project folder
git init
git add .
git commit -m "🚀 Initial release of MathMart Arena"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mathmart-arena.git
git push -u origin main
```

#### 2c. Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The `deploy.yml` workflow will auto-deploy on every push
4. Your live URL: `https://YOUR_USERNAME.github.io/mathmart-arena/`

---

### STEP 3 — Convert to APK (Android App)

There are two methods:

---

#### ✅ METHOD A — PWABuilder (Easiest, Free)

1. Open https://www.pwabuilder.com
2. Enter your GitHub Pages URL: `https://YOUR_USERNAME.github.io/mathmart-arena/`
3. Click **Start** → wait for analysis
4. Click **Package for stores** → select **Android**
5. Choose **"Android (TWA)"** — this is the real APK method
6. Click **Download Package**
7. You'll get a `.zip` with an APK + signing instructions

**To install on Android:**
- Enable "Install from unknown sources" in Android Settings
- Transfer the APK to your phone
- Tap to install ✅

---

#### ✅ METHOD B — Capacitor (Full Native App)

Use this if you want to publish on the **Google Play Store**.

```bash
# Prerequisites: Node.js + Android Studio installed

# 1. Install Capacitor
npm install -g @capacitor/cli
npm init -y
npm install @capacitor/core @capacitor/android

# 2. Initialize
npx cap init "MathMart Arena" "com.mathmart.arena" --web-dir .

# 3. Add Android platform
npx cap add android

# 4. Copy web files
npx cap copy android

# 5. Open in Android Studio
npx cap open android
```

In Android Studio:
- Click **Build** → **Build Bundle(s)/APK(s)** → **Build APK(s)**
- Find APK in `android/app/build/outputs/apk/debug/app-debug.apk`

---

## 🔥 Firebase Setup

The game uses Firebase Firestore. To use your own database:

1. Go to https://console.firebase.google.com
2. Create a new project
3. Enable **Firestore Database**
4. Go to **Project Settings** → copy your config
5. In `index.html`, find `firebaseConfig` and replace:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

6. Set Firestore rules (in Firebase Console → Firestore → Rules):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

---

## 🎮 Features

| Feature | Description |
|---|---|
| 🧮 14 Question Types | Math, Reasoning, English |
| 🏆 Global Leaderboard | Live rankings via Firebase |
| 🎒 50+ Item Shop | Buy/sell items with coins |
| 🔥 Streak System | Daily login rewards |
| 🎖️ 16 Achievements | Unlock badges as you play |
| 📋 Daily Missions | Earn bonus coins |
| 🎰 Daily Spin | Free spin wheel every day |
| 📊 Stats & Charts | Detailed performance tracking |
| 📝 Mistake Review | Review wrong answers |
| ⏱️ Time Attack | 60-second blitz mode |
| 📚 Practice Mode | Learn with explanations |
| 🔐 PIN Security | Protected accounts |

---

## 📱 APK Quick Install (No Play Store)

1. Deploy to GitHub Pages (Step 2)
2. Visit your site on Android Chrome
3. Tap the **"Add to Home Screen"** banner
4. App installs instantly as a PWA ✅

---

## 🛠 Tech Stack

- **Frontend:** Vanilla HTML/CSS/JS (single file)
- **Database:** Firebase Firestore
- **Hosting:** GitHub Pages
- **PWA:** Web App Manifest + Service Worker
- **APK:** PWABuilder / Capacitor

---

*Built with ❤️ for exam preparation — IBPS · SBI · RRB · SSC*
