import * as noteService from '../services/note.service';
import HttpStatus from 'http-status-codes';

export const createNote = async (req, res) => {
    const result = await noteService.createNote(req.body);
    res.status(result.code).json({
        code : result.code,
        data : result.data,
        message : result.message
    });
  };
  
  export const getAllNotes = async (req, res) => {
    const result = await noteService.getAllNotes();
    res.status(result.code).json({
        code : result.code,
        data : result.data,
        message : result.message
    });
  };
  
  export const updateNote = async (req, res) => {
    const { id } = req.params;
    const result = await noteService.updateNote(id, req.body);
    res.status(result.code).json({
        code : result.code,
        data : result.data,
        message : result.message
    });
  };
  
  export const getNoteById = async (req, res) => {
    const { id } = req.params;
    const result = await noteService.getNoteById(id);
    res.status(result.code).json({
        code : result.code,
        data : result.data,
        message : result.message
    });
  };
  
  export const deleteNoteById = async (req, res) => {
    const { id } = req.params;
    const result = await noteService.deleteNoteById(id);
    res.status(result.code).json({
        code : result.code,
        data : result.data,
        message : result.message
    });
  };