import { Component } from '@angular/core';
import { NoteService } from '../../note.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-note-input',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './note-input.component.html',
  styleUrl: './note-input.component.css',
  
})
export class NoteInputComponent {


  //addNote(){
    //alert("A note has been added")
  //}
  //will use add note function
  constructor(public noteService : NoteService) { }

  ngOnInit(){
    this.noteService.addNote();



  }
}
