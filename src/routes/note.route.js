import express from 'express';
import * as notesController from '../controllers/note.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// console.log('Notes Controller:', notesController); 
router.post('/', notesController.createNote);
router.get('/', notesController.getAllNotes);
router.put('/:id',  notesController.updateNote);
router.get('/:id', notesController.getNoteById);
router.delete('/:id', notesController.deleteNoteById);

export default router;
