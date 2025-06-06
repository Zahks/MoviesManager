import { Routes } from '@angular/router';
import { ListeFilmsComponent } from './components/liste-films/liste-films.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { AjoutFilmComponent } from './components/ajout-film/ajout-film.component';

import { StatsComponent } from './components/stats/stats.component';

export const routes: Routes = [
  { path: '', component: ListeFilmsComponent },
   { path: 'films/:id', component: FilmDetailsComponent },
   { path: 'ajout', component: AjoutFilmComponent },
   { path: 'stats', component: StatsComponent } 

];
