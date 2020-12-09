import express from 'express';
import dotenv from 'dotenv';
import connection from './config/connection.js';

import apiRoutes from './routes/api.js';
import viewRoutes from './routes/view.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

// Connect to DB
connection();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// Routes
app.use(apiRoutes);
app.use(viewRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
