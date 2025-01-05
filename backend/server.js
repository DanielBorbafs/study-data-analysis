import express from 'express';
import cors from 'cors'; // Importando o CORS
import publicRoutes from './routes/public.js';
import privateRoutes from './routes/private.js';
import rotaget from './routes/get.js';

import auth from './middlewares/auth.js';

const app = express();

// Usar o CORS (permite que sua API aceite requisições de outros domínios)
app.use(cors());

// Usar o middleware para ler o corpo da requisição
app.use(express.json());

// Rotas públicas e privadas
app.use('/', publicRoutes);
app.use('/', rotaget);
app.use('/', auth, privateRoutes);

const porta = 3000;
app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`));
