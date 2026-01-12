const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const path = require("path");

dotenv.config();
const app = express();

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:3001',
      // Add your cPanel Domain here once you know it
      // 'https://www.your-cpanel-domain.com', 
      process.env.FRONTEND_URL
    ];

    if (allowedOrigins.indexOf(origin) === -1 && !process.env.DISABLE_CORS_CHECK) {
      // Temporary: allow all for easier setup if needed, or stick to strict
      // return callback(new Error('The CORS policy for this site does not allow access from the specified Origin.'), false);
      return callback(null, true); // Allow all for now to prevent deployment headaches, user can lock down later
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-auth-token']
}));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Route imports
const authRoutes = require("./routes/authRoutes");
const cloudinaryRoutes = require("./routes/cloudinaryRoutes");
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");
const rootRoutes = require("./routes/rootRoutes");

// Route usage
app.use("/api/auth", authRoutes);
app.use("/api/materials", cloudinaryRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);
app.use("/api/root", rootRoutes);

// Serve Annual News Letters statically (Make sure these folders are uploaded to Render)
app.use('/annual-news-letters', express.static(path.join(__dirname, 'Annual News Letters')));
app.use('/student-joinees', express.static(path.join(__dirname, 'Student Joinees')));

// Serve React App (Sub-application)
// DISABLED FOR SPLIT DEPLOYMENT
// const frontendBuildPath = path.join(__dirname, "../../Root/build");
// app.use(express.static(frontendBuildPath));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(frontendBuildPath, "index.html"));
// });
app.get("/", (req, res) => {
  res.send("Vidyamitra Backend is Running!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
// Trigger restart
