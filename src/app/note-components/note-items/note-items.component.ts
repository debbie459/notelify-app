import { Component } from '@angular/core';
import { NoteService } from '../../note.service';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { Note } from '../../model/note';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-note-items',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,CommonModule,NgIf,FormsModule],
  templateUrl: './note-items.component.html',
  styleUrl: './note-items.component.css',
 
})

export class NoteItemsComponent implements OnInit {
  note: Note | undefined;
  editMode = false;
  editTitle : String = "";
  eidtContent : String = "";

  constructor(private route: ActivatedRoute, public noteService: NoteService, public router:Router) { }

  // note-items.component.ts
ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const noteId = +params.get('id')!;
    console.log('Fetched Note ID:', noteId); // Debugging log
    this.note = this.noteService.getNoteById(noteId);
    console.log('Fetched Note:', this.note); // Debugging log
    if (this.note){
      this.editTitle = this.note.title;
      this.eidtContent = this.note.content;

    }
  });

}

enableEditMode(): void{
  this.editMode = true;
}

saveEditedNote() : void{
  if (this.note){
  console.log("trying to save new title");
  this.note.title = this.editTitle;
  console.log("saved new title");
  this.note.content = this.eidtContent;
  console.log("saved new content")
  this.noteService.updateNoteById(this.note.id,this.note)
  this.editMode = false;
  }
}

deleteNote(): void {
  if (this.note) {
    console.log("trying to delete", this.note)
    this.noteService.deleteNoteById(this.note.id);
    console.log("deleted", this.note)
    this.note = undefined;
    alert("note has been deleted");

    
    this.router.navigate(["/note-input"])
  }
}

}
