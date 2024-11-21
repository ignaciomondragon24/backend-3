import { Router } from 'express';
import usersController from '../controllers/users.controller.js';
import uploader from '../utils/uploader.js';
import UserRepository from '../repository/UserRepository.js';

const router = Router();

router.get('/', async (req, res) => {
  const users = await UserRepository.findAll();
  res.json(users);
});

router.post('/:uid/documents', uploader.array('documents'), async (req, res) => {
  const { uid } = req.params;
  const files = req.files.map(file => ({
    name: file.originalname,
    reference: file.path
  }));

  const user = await UserRepository.getUserById(uid);
  if (!user) {
    return res.status(404).send('User not found');
  }

  user.documents.push(...files);
  await user.save();

  res.send('Documents uploaded successfully');
});

router.get('/:uid', usersController.getUser);
router.put('/:uid', usersController.updateUser);
router.delete('/:uid', usersController.deleteUser);

export default router;