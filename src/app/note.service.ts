import { Injectable } from '@angular/core';
import { Note } from './model/note';

@Injectable({
  providedIn: 'root'
 
})
export class NoteService {

  private localStorageKey = 'notes';

  
  noteTitle : String = "";
  noteContent : String = "";
  noteDate : Date = new Date();

  notes : Note[] = [] // an array called notes to store all notes


  constructor() {
    this.loadNotesFromLocalStorage();
   }

  

  addNote(){
    if (this.noteTitle.trim().length && this.noteContent.trim().length){
      let newNote : Note ={
        id : Date.now(),
        title : this.noteTitle,
        content : this.noteContent,
        date : this.noteDate
      }

      this.notes.push(newNote);
      this.noteTitle = "";
      this.noteContent = "";
      this.noteDate = new Date();
    }

    // else{
    //   alert("Please add a note");
    // }

    this.saveNotesToLocalStorage();
  }


    //this will work when users click on a note, then it automatically opens up into a new page showing only the noteitem that was clicked
    //this will need routing
    //now, i need it that when i click on a particular note, i get that exact id for the note, not anyothe
    //solution is how i can use the id to generate the box itself

    getNoteById(id: number): Note | undefined {
      return this.notes.find(note => note.id === id);
    }

    updateNoteById(id: number, updatedNote: Note): void {
      // 1. You need to first find the index of the note with the given ID
      const noteIndex = this.notes.findIndex(note => note.id === id);
    
      // 2. Then check if the note exists]
      if (noteIndex !== -1) {
        // 3. Finally, update the note at the found index with the new note details
        this.notes[noteIndex] = updatedNote;
      }

      this.saveNotesToLocalStorage();
    }
    
    deleteNoteById(id: number): void {
      const noteIndex = this.notes.findIndex(note => note.id === id);
      if (noteIndex !== -1) {
        this.notes.splice(noteIndex,1);
        console.log("note with id ${note.id} is neing deleted");
        
      }
      else("it has not been deletd")

      this.saveNotesToLocalStorage();

    }

    private saveNotesToLocalStorage(): void {
      localStorage.setItem(this.localStorageKey, JSON.stringify(this.notes));
    }
  
    private loadNotesFromLocalStorage(): void {
      const storedNotes = localStorage.getItem(this.localStorageKey);
      if (storedNotes) {
        this.notes = JSON.parse(storedNotes);
      }
    }
}
