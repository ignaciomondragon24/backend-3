import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno desde el archivo .env

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js'; // Importa el mocksRouter

const app = express();
const PORT = process.env.PORT || 8080;
const connection = mongoose.connect(process.env.MONGO_CONN_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(cookieParser());

app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/api/mocks', mocksRouter); // Usa el mocksRouter

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

export default app;