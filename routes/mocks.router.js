import { Router } from 'express';
import bcrypt from 'bcrypt';
import { generateMockUsers } from '../utils/mocking.js';
import UserRepository from '../repository/UserRepository.js';
import PetRepository from '../repository/PetRepository.js';
import Pet from '../dao/Pets.dao.js';

const router = Router();

// Endpoint para mockingpets
router.get('/mockingpets', async (req, res) => {
  const pets = await PetRepository.getAll();
  res.json(pets);
});

// Endpoint para mockingusers
router.get('/mockingusers', async (req, res) => {
  const users = generateMockUsers(50);
  res.json(users);
});

// Endpoint para generateData
router.post('/generateData', async (req, res) => {
  const { users, pets } = req.body;

  // Generar y guardar usuarios
  const mockUsers = generateMockUsers(users);
  await UserRepository.insertMany(mockUsers);

  // Generar y guardar mascotas (pets)
  const mockPets = generateMockPets(pets); 
  await PetRepository.insertMany(mockPets);

  res.send('Data generated successfully');
});

export default router;