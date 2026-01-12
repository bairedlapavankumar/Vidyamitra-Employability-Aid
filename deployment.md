# Modern Deployment Guide (Vercel + Render)

This is the easiest, most modern way to host your app for **free**.
1.  **Backend (API)**: Hosted on **Render** (Node.js).
2.  **Frontend (UI)**: Hosted on **Vercel** (React).

---

## Part 1: Push to GitHub (Required)

Both Vercel and Render need your code to be on GitHub.
1.  Create a new Repository on [GitHub.com](https://github.com/new).
2.  Open your project folder in terminal/command prompt.
3.  Run these commands:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git push -u origin main
    ```

---

## Part 2: Deploy Backend (Render)

1.  Go to [Render.com](https://render.com/) and create a free account.
2.  Click **New +** -> **Web Service**.
3.  Connect your GitHub repository.
4.  **Configuration**:
    *   **Root Directory**: `Employability Aid/backend` (Crucial!).
    *   **Runtime**: Node
    *   **Build Command**: `npm install`
    *   **Start Command**: `node server.js`
    *   **Region**: Singapore (or closest to you).
    *   **Instance Type**: Free.
5.  **Environment Variables**:
    *   Add your existing secrets: `MONGO_URI`, `JWT_SECRET`, etc.
    *   Add `NODE_ENV` = `production`.
6.  Click **Create Web Service**.
    *   Copy your **Backend URL** (e.g., `https://vidyamitra-backend.onrender.com`) once it's live.

---

## Part 3: Deploy Frontend (Vercel)

1.  Go to [Vercel.com](https://vercel.com/) and create a free account.
2.  Click **Add New...** -> **Project**.
3.  Import the **same GitHub repository**.
4.  **Framework Preset**: Select **Create React App**.
5.  **Root Directory**:
    *   Click **Edit** relative to Root Directory.
    *   Select the `Root` folder.
6.  **Build Settings**:
    *   It should auto-detect: `npm run build` and `build` output directory.
7.  **Environment Variables**:
    *   Name: `REACT_APP_API_URL` (Wait! We need to update your code to use this, see Part 4).
    *   Value: Your **Render Backend URL** (e.g., `https://vidyamitra-backend.onrender.com`).
8.  Click **Deploy**.

---

## Part 4: Final Code Tweak (Important!)

Vercel injects environment variables differently. We need to update `apiConfig.js` one last time to read `process.env.REACT_APP_API_URL`.

**I will do this for you right now.**

After I update the file:
1.  Run `git add .`, `git commit -m "Update API config"`, `git push`.
2.  Vercel will **automatically** redeploy your site with the new changes!

---

## Part 5: Keep Backend Awake

Use **UptimeRobot** (same as before) to ping your Render URL every 5 minutes so it doesn't sleep.
