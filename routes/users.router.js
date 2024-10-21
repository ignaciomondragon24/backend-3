import { Router } from 'express';
import usersController from '../controllers/users.controller.js';
import UserRepository from '../repository/UserRepository.js';

const router = Router();

router.get('/', async (req, res) => {
  const users = await UserRepository.findAll();
  res.json(users);
});

router.get('/:uid', usersController.getUser);
router.put('/:uid', usersController.updateUser);
router.delete('/:uid', usersController.deleteUser);

export default router;