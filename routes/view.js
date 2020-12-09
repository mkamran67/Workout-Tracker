import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __dirname = dirname(fileURLToPath(import.meta.url));

router.get('/exercise', (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/stats.html'));
});

export default router;
