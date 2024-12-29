import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/listar-usuarios', async (req, res) => {
  try {
    // Trazendo todos os usuários, porém omitindo o password deles.
    const users = await prisma.user.findMany({
      select: {
        id: true, // Inclua os campos que você deseja retornar
        name: true,
        email: true,
      },
    });
    res.status(200).json({ message: 'Usuários listados com sucesso', users });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Falha no servidor' });
  }
});

export default router;
