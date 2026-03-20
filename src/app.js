import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: "*"
}));
app.use(express.json());

// Start server
const PORT = process.env.PORT || 5000;
const DB_PORT = process.env.DB_PORT || 5432;

app.listen(PORT, async () => {
  console.log(` Server running at http://localhost:${PORT}`);

  try {

    console.log(`Database connected successfully on`);
    
  } catch (err) {
    console.error(' Database connection failed:', err.message);
  }
});
