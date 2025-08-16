// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const challanRoutes = require('./routes/challanRoutes');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// app.use('/api/challan', challanRoutes);

// app.listen(PORT, () => {
//   console.log(`✅ Server is running on port ${PORT}`);
// });

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Import Routes and Functions
const challanRoutes = require('./routes/challanRoutes');
const generateID = require('./generateID');

const app = express();
const PORT = process.env.PORT || 5000;

// Create folders if not exist
if (!fs.existsSync('uploads')) fs.mkdirSync('uploads');
if (!fs.existsSync('outputs')) fs.mkdirSync('outputs');

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/outputs', express.static('outputs'));

// --- Challan API Route ---
app.use('/api/challan', challanRoutes);

// --- Multer Setup for ID Photo Upload ---
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// --- ID Card Generation Route ---
app.post('/generate-id', upload.single('photo'), async (req, res) => {
  try {
    const data = req.body;
    const photoPath = req.file.path;

    const fileName = await generateID(data, photoPath);
    res.json({ pdfUrl: `http://localhost:${PORT}/${fileName}` });
  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({ error: 'Failed to generate ID PDF' });
  }
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
