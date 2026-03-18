import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// import routes from './routes/server.route.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: "*"
}));
app.use(express.json());

// API routes
// app.use('/api/v1', routes);

app.get('/', (req,res) =>{
    res.status(200).json({
        message: 'API is running',
    })
})
// 🔹 404 Handler (Route Not Found)
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
  });
});

// 🔹 Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    error: 'Something went wrong',
  });
});
// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(` Server running at http://localhost:${PORT}`);

  try {

    console.log(' Database connected successfully ');
    
  } catch (err) {
    console.error(' Database connection failed:', err.message);
  }
});
