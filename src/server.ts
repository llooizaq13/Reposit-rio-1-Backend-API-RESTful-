import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.listen(PORT, () => {
  console.log(`============================================`);
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Endpoints CRUD disponíveis.`);
  console.log(`============================================`);
});
