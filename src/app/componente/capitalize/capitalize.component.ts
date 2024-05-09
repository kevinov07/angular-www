import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-capitalize',
  templateUrl: './capitalize.component.html',
  styleUrl: './capitalize.component.css',
  standalone: true,
  imports: [],
})
export class CapitalizeComponent {
  title = 'Practica de Angular';

  capitalizar():void {
    this.title = this.title.charAt(0).toUpperCase()+
    this.title.slice(1).toLowerCase();
    }

}
