import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

router.post('/cadastro', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Verificando se o usuário já existe
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return res.status(400).json({ message: 'Usuário já cadastrado' });
    }

    // Criptografando a senha
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Criando usuário no banco
    const userDB = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
    });

    res
      .status(201)
      .json({ message: 'Usuário criado com sucesso', user: userDB });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro no servidor, tente novamente' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    // Comparando a senha informada com a armazenada
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Senha inválida' });
    }

    // Gerando o token JWT
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1d' });

    res.status(200).json({ message: 'Login bem-sucedido', token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro no servidor, tente novamente' });
  }
});

router.delete('/usuarios/:id', async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({ message: 'Usuario deletado com sucesso' });
});
export default router;
