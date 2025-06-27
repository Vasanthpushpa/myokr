// app.js
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// Routes
import authRoutes from './routes/auth.routes.js';
import orgRoutes from './routes/organisation.routes.js';
import deptRoutes from './routes/department.routes.js';
import teamRoutes from './routes/team.routes.js';
import okrRoutes from './routes/okr.routes.js';

// Middlewares
import { notFound, errorHandler } from './middleware/error.middleware.js';

dotenv.config();
connectDB();

const app = express();

// ✅ CORRECT CORS SETUP
const allowedOrigins = ['http://localhost:5173'];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

// Other middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/organisations', orgRoutes);
app.use('/api/departments', deptRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/okrs', okrRoutes);

// Error Handling
app.use(notFound);
app.use(errorHandler);

export default app;
