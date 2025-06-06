import { Component, computed, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsService } from '../../core/services/film.service';
import { Film } from '../../core/models/film.model';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  providers: [FilmsService],
  templateUrl: './stats.component.html',
})
export class StatsComponent {
  films: Signal<Film[]>;

  constructor(private filmsService: FilmsService) {
    this.films = this.filmsService.films;
  }

  totalFilms = computed(() => this.films().length);

  filmsVus = computed(() =>
    this.films().filter((film: Film) => film.vu).length
  );

  moyenneNote = computed(() => {
    const list = this.films();
    if (!list.length) return 0;
    const total = list.reduce((acc: number, film: Film) => acc + film.note, 0);
    return (total / list.length).toFixed(1);
  });

  repartitionParGenre = computed(() => {
    const genres: Record<string, number> = {};
    this.films().forEach((film: Film) => {
      genres[film.genre] = (genres[film.genre] || 0) + 1;
    });
    return genres;
  });

  
  genresKeys = computed(() => Object.keys(this.repartitionParGenre()));
}
