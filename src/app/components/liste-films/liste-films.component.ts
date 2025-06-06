import { Component, Signal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFilmComponent } from '../card-film/card-film.component';
import { FilmsService } from '../../core/services/film.service';
import { Film } from '../../core/models/film.model';
import { FiltresComponent } from '../filtres/filtres.component';

@Component({
  selector: 'app-liste-films',
  standalone: true,
  imports: [CommonModule, CardFilmComponent, FiltresComponent],
  templateUrl: './liste-films.component.html'
})
export class ListeFilmsComponent {
  films: Signal<Film[]>;
  genre = signal('');
  noteMin = signal(0);

  constructor(private filmsService: FilmsService) {
    this.films = this.filmsService.films;
  }

  filteredFilms: Signal<Film[]> = computed(() =>
    this.films().filter(film =>
      (this.genre() === '' || film.genre === this.genre()) &&
      film.note >= this.noteMin()
    )
  );

  onFiltreChange(filtres: { genre: string; noteMin: number }) {
    console.log('🎛️ Filtres reçus :', filtres); // j'ai ajouté ce log, car j'ai rencontré des souci avec la fonctionnalité du filtrage et du slider
    this.genre.set(filtres.genre);
    this.noteMin.set(filtres.noteMin);
  }
}
