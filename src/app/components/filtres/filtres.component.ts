import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtres',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filtres.component.html'
})
export class FiltresComponent {
  genre: string = '';
  noteMin: number = 0;

  @Output() filtreChange = new EventEmitter<{ genre: string; noteMin: number }>();

  emitFiltres() {
    this.filtreChange.emit({ genre: this.genre, noteMin: this.noteMin });
  }
}
