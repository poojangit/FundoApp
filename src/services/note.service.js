import HttpStatus from 'http-status-codes'
// import { Note } from '../models/note';
import sequelize, { DataTypes } from '../config/database';
import bcrypt from 'bcrypt';

const Note = require('../models/note')(sequelize, DataTypes);
/**
 * Create a new note
 */
export const createNote = async (noteBody) => {
    try {
        // const checkTitle = await Note.findOne({
        //     where : {
        //         title : noteBody.title
        //     }
        // })
        // // console.log(title);
        // console.log(noteBody.title);
        // // console.log(checkTitle);
        // if(checkTitle==null){
      const note = await Note.create(noteBody);
      return {
        code: HttpStatus.CREATED,
        data: note,
        message: 'Note created successfully'
      };
    // }
    // return {
    //     code : HttpStatus.CONFLICT,
    //     data : data,
    //     message : "This title already exists please check"
    // }
    } catch (error) {
      return {
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        data: [],
        message: 'Error creating note'
      };
    }
  };

/**
 * Get all notes
 */
export const getAllNotes = async () => {
    try {
      const notes = await Note.findAll();
      return {
        code: HttpStatus.OK,
        data: notes,
        message: 'Notes fetched successfully'
      };
    } catch (error) {
      return {
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        data: [],
        message: 'Error fetching notes'
      };
    }
  };

/**
 * Update a note by ID
 *
 */
export const updateNote = async (id, noteBody) => {
    try {
      const note = await Note.findOne({
         where: { 
            id : id
        } 
        })
      if (note==null) {
        return {
          code: HttpStatus.NOT_FOUND,
          data: [],
          message: 'Note not found'
        }
      }
  
      const updatedNote = await note.update(noteBody);
      return {
        code: HttpStatus.OK,
        data: updatedNote,
        message: 'Note updated successfully'
      };
    } catch (error) {
      return {
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        data: [],
        message: 'Error updating note'
      }
    }
  }
/**
 * Get a note by ID
 *
 */
export const getNoteById = async (id) => {
    try {
      const note = await Note.findOne({ 
        where: { id } 
    })
      if (note == null ) {
        return {
          code: HttpStatus.NOT_FOUND,
          data: [],
          message: 'Note not found'
        }
      }
      return {
        code: HttpStatus.OK,
        data: note,
        message: 'Note fetched successfully'
      };
    } catch (error) {
      return {
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        data: [],
        message: 'Error fetching note'
      };
    }
  };

  export const deleteNoteById = async (id) => {
    try {
      const note = await Note.findOne({ 
        where: { id } 
    });
      if (note == null) {
        return {
          code: HttpStatus.NOT_FOUND,
          data: [],
          message: 'Note not found'
        };
    }
      await note.destroy();
      return {
        code: HttpStatus.OK,
        data: [],
        message: 'Note deleted successfully'
      };
    } catch (error) {
      return {
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        data: [],
        message: 'Error deleting note'
      };
    }
  };
