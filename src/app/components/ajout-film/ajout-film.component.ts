import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FilmsService } from '../../core/services/film.service';
import { Film } from '../../core/models/film.model';

@Component({
  selector: 'app-ajout-film',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ajout-film.component.html'
})
export class AjoutFilmComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, private filmsService: FilmsService) {
    // ✅ Initialisation dans le constructeur
    this.form = this.fb.group({
      titre: ['', Validators.required],
      annee: [null, [Validators.required, Validators.min(1900)]],
      genre: ['', Validators.required],
      note: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      synopsis: ['', Validators.required]
    });
  }

  onSubmit() {
  if (this.form.valid) {
    console.log('✅ Film en cours d\'ajout', this.form.value); // pour test
    this.filmsService.ajouterFilm(this.form.value as Omit<Film, 'id' | 'vu'>);
    this.form.reset(); // ✅ vide les champs après ajout
  }
}
}
