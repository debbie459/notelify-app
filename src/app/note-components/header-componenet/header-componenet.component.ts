import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-componenet',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-componenet.component.html',
  styleUrl: './header-componenet.component.css'
})
export class HeaderComponenetComponent {
 

}
