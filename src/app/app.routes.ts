import { Routes } from '@angular/router';
import { HeroComponent } from './componente/hero/hero.component';
import { AddHeroComponent } from './heroes/add-hero/add-hero.component';
import { CapitalizeComponent } from './componente/capitalize/capitalize.component';

export const routes: Routes = [
  { path: '', component: CapitalizeComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'add-hero', component: AddHeroComponent },
];
