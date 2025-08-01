require('dotenv').config();
const express = require('express');
const cors = require('cors');
const challanRoutes = require('./routes/challanRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/challan', challanRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
