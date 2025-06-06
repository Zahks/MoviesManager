import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../../core/services/film.service';

@Component({
  selector: 'app-film-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './film-details.component.html',
})
export class FilmDetailsComponent {
  film: any;

  constructor(
    private route: ActivatedRoute,
    private filmsService: FilmsService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.film = this.filmsService.films().find(f => f.id === id);
  }

  marquerVu() {
    this.filmsService.marquerCommeVu(this.film.id);
    this.film.vu = true; // mise à jour locale
  }
}
