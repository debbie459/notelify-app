import { Routes } from '@angular/router';
import { NoteInputComponent } from './note-components/note-input/note-input.component';
import { NoteItemsComponent } from './note-components/note-items/note-items.component';

 export const routes: Routes = [
    {'path':"", 'title': "Home", component:NoteInputComponent},
    {'path':"note-items/:id", 'title': "Your Notes", component:NoteItemsComponent},
    {'path': "note-input", component:NoteInputComponent}
    
    
];

