import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { FilmsService } from '../../core/services/film.service';
import { RouterModule } from '@angular/router';
import { Film } from '../../core/models/film.model';

@Component({
  selector: 'app-card-film',
  standalone: true,
  imports: [CommonModule, TruncatePipe, RouterModule],
  templateUrl: './card-film.component.html',
  providers: []
})
export class CardFilmComponent {
  @Input() film!: Film;

  constructor(private filmsService: FilmsService) {}

  marquerVu() {
    this.filmsService.marquerCommeVu(this.film.id);
  }

  toggleVu() {
  this.filmsService.toggleVu(this.film.id);
}

}
