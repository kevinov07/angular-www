import { Component } from '@angular/core';
import { HeroComponent } from './componente/hero/hero.component';
import { AddHeroComponent } from './heroes/add-hero/add-hero.component';
import { RouterOutlet } from '@angular/router';
import { RoutingComponent } from './componente/routing/routing.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [HeroComponent, AddHeroComponent, RouterOutlet, RoutingComponent],

})
export class AppComponent {}
