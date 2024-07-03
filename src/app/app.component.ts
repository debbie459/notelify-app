import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoteInputComponent } from './note-components/note-input/note-input.component';
import { NoteItemsComponent } from './note-components/note-items/note-items.component';
import { HeaderComponenetComponent } from './note-components/header-componenet/header-componenet.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NoteInputComponent, NoteItemsComponent, HeaderComponenetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Notes-App';
}
