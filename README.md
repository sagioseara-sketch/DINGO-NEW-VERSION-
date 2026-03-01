# 🎯 DiNGo — Live Multiplayer Bingo

A fully-featured 5×5 live multiplayer bingo game built with React + Firebase.

## ✅ Features
- 🎮 **6 AI difficulty levels** (Easy → GodMode)
- ⚡ **Live multiplayer** with room codes
- 🏆 **Global leaderboard**
- 👥 **Friends system** (search, add, online status)
- 📊 **Match history** (last 20 games)
- 🔔 **Push notifications** (friend challenges)
- 🔊 **4 SFX themes** (Classic, Ninja, Space, LoFi)
- 💬 **In-game emoji chat**
- 🔐 **Firebase Auth** (Email + Google)

---

## 📱 SETUP (Mobile Browser — StackBlitz)

### STEP 1: Set Up Firebase (10 minutes)

1. Go to **console.firebase.google.com** on your phone
2. Tap **"Add project"** → Name: `dingo-game` → Create
3. Enable **Authentication**:
   - Build → Authentication → Get started
   - Enable **Email/Password** ✅
   - Enable **Google** ✅ (enter your email as support email)
4. Create **Firestore Database**:
   - Build → Firestore → Create database
   - Start in **test mode** → us-central1 → Enable
5. Create **Realtime Database**:
   - Build → Realtime Database → Create database
   - Start in **test mode** → Enable
6. Register Web App:
   - Project Overview → `</>` web icon
   - App name: `dingo-web` → Register
   - **COPY the firebaseConfig object** — you need it next
7. Enable Push Notifications (optional):
   - Project Settings → Cloud Messaging
   - Web Push certificates → Generate key pair
   - **COPY the VAPID key**

---

### STEP 2: Add Your Firebase Config

Open **`src/firebase/config.js`** and replace ALL the placeholder values:

```js
const firebaseConfig = {
  apiKey:            "YOUR_API_KEY_HERE",
  authDomain:        "YOUR_AUTH_DOMAIN_HERE",
  databaseURL:       "YOUR_DATABASE_URL_HERE",
  projectId:         "YOUR_PROJECT_ID_HERE",
  storageBucket:     "YOUR_STORAGE_BUCKET_HERE",
  messagingSenderId: "YOUR_SENDER_ID_HERE",
  appId:             "YOUR_APP_ID_HERE"
};

export const VAPID_KEY = "YOUR_VAPID_KEY_HERE";  // for push notifications
```

Also open **`public/firebase-messaging-sw.js`** and replace the same values there too (needed for background notifications).

---

### STEP 3: Open in StackBlitz

1. Go to **stackblitz.com** on your phone
2. Tap **"Import from GitHub"** (if you uploaded to GitHub)
   **OR** tap **"Create project"** → React + Vite → manually paste files
3. In the terminal at the bottom, run:
   ```
   npm install
   npm run dev
   ```
4. Your game opens in the preview pane! ✅

---

### STEP 4: Push to GitHub

In StackBlitz:
1. Click the **GitHub icon** in the left sidebar
2. Connect your GitHub account
3. Select your `dingo-game` repository
4. Tap **"Push"**

---

### STEP 5: Enable GitHub Pages

1. Go to your GitHub repo → **Settings** tab
2. Scroll to **Pages** section
3. Source: **Deploy from a branch**
4. Branch: **gh-pages** → Save

Your game will be live at:
**`https://YOUR-USERNAME.github.io/dingo-game`** 🚀

After every push to `main`, GitHub Actions will:
- Automatically rebuild and redeploy the web app ✅
- Build an Android APK (downloadable from the Actions tab) ✅

---

### STEP 6: Download APK (after first push)

1. Go to GitHub repo → **Actions** tab
2. Click on the latest **"Build Android APK"** workflow run
3. Scroll to **Artifacts** section
4. Tap **"dingo-debug-apk"** → downloads to your phone 📲
5. Install the APK (enable "Install from unknown sources" in Android settings)

---

## 🔒 Security Rules

After testing, apply the security rules:

**Firestore Rules** — copy contents of `firestore.rules` into:
Firebase Console → Firestore → Rules → Edit → Publish

**Realtime Database Rules** — copy contents of `database.rules.json` into:
Firebase Console → Realtime Database → Rules → Edit → Publish

---

## 📁 File Structure

```
src/
├── firebase/
│   ├── config.js         ← 🔴 EDIT THIS FIRST with your keys
│   ├── auth.js           ← Login/logout
│   ├── userService.js    ← User profiles
│   ├── roomService.js    ← Live game rooms
│   ├── leaderboard.js    ← Global rankings
│   ├── friends.js        ← Friends system
│   ├── history.js        ← Match history
│   └── notifications.js  ← Push notifications
├── game/
│   ├── aiLogic.js        ← All 6 bot AI levels
│   ├── GameBoard.jsx     ← 5x5 bingo board
│   └── WinOverlay.jsx    ← Win/lose popup
├── screens/
│   ├── LoginScreen.jsx
│   ├── HomeScreen.jsx
│   ├── ProfileScreen.jsx ← Avatar, color, SFX theme
│   ├── BotGameScreen.jsx ← vs AI gameplay
│   ├── RoomScreen.jsx    ← Create/join room
│   ├── MultiGameScreen.jsx ← Live multiplayer
│   ├── LeaderboardScreen.jsx
│   ├── FriendsScreen.jsx
│   └── HistoryScreen.jsx
├── sounds/
│   └── sfxThemes.js      ← 4 sound themes
└── styles/
    └── index.css         ← All styles
```

---

## 🎮 How to Play

1. **Sign in** with email or Google
2. **vs Bot** — pick difficulty, tap numbers on your board to mark them
3. First to complete **5 lines** (rows, columns, or diagonals) wins
4. **Multiplayer** — create a room, share the 4-letter code with a friend
5. Both players have different board layouts — strategy matters!

---

## 💡 Troubleshooting

| Problem | Fix |
|---|---|
| "Firebase not configured" | Edit `src/firebase/config.js` with your real keys |
| Google sign-in fails | Add your domain to Firebase Auth → Authorized domains |
| Realtime DB error | Make sure databaseURL is set in config.js |
| Build fails | Run `npm install` first |
| APK not building | Check the GitHub Actions log for error details |

---

Made with ❤️ by KGames
