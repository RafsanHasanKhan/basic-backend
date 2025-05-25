import express from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/module/student/student.route';
const app = express();

// parser
app.use(express.json());
app.use(cors());


// application routes

app.use('/api/v1/students', StudentRoutes)

export default app;
