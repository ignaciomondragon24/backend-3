import { Router } from 'express';
import petsController from '../controllers/pets.controller.js';
import uploader from '../utils/uploader.js';
import PetRepository from '../repository/PetRepository.js';

const router = Router();

router.get('/', async (req, res) => {
  const pets = await PetRepository.findAll();
  res.json(pets);
});

router.post('/', petsController.createPet);
router.post('/withimage', uploader.single('image'), petsController.createPetWithImage);
router.put('/:pid', petsController.updatePet);
router.delete('/:pid', petsController.deletePet);

export default router;