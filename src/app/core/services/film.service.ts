import { Injectable, signal } from '@angular/core';
import { Film } from '../models/film.model';

@Injectable({ providedIn: 'root' })
export class FilmsService {
  private readonly STORAGE_KEY = 'films';

  private _films = signal<Film[]>(this.loadFilms());
  films = this._films.asReadonly();

  constructor() {
    // Pour s'assurer que les films sont bien chargés au démarrage
    this.saveFilms();
  }

  private loadFilms(): Film[] {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Erreur JSON dans localStorage ❌', e);
        return this.defaultFilms(); // fallback
      }
    }
    return this.defaultFilms();
  }

  private saveFilms() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this._films()));
  }

  private defaultFilms(): Film[] {
    return [
      {
        id: 1,
        titre: 'Inception',
        annee: 2010,
        genre: 'Science-fiction',
        note: 5,
        synopsis: 'Un voleur expérimenté dans l\'art de l\'extraction s\'infiltre dans les rêves pour voler des secrets.',
        vu: true
      },
      {
        id: 2,
        titre: 'Interstellar',
        annee: 2014,
        genre: 'Science-fiction',
        note: 4,
        synopsis: 'Un groupe d\'astronautes voyage à travers un trou de ver à la recherche d\'une nouvelle planète habitable.',
        vu: false
      },
      {
        id: 3,
        titre: 'The Dark Knight',
        annee: 2008,
        genre: 'Action',
        note: 5,
        synopsis: 'Batman affronte le Joker dans une lutte épique pour Gotham City.',
        vu: false
      },
      {
        id: 4,
        titre: 'Intouchables',
        annee: 2011,
        genre: 'Comédie',
        note: 4,
        synopsis: 'Une amitié improbable entre un riche tétraplégique et un jeune homme de banlieue.',
        vu: false
      },
      {
        id: 5,
        titre: 'La La Land',
        annee: 2016,
        genre: 'Drame',
        note: 3,
        synopsis: 'Une histoire d’amour entre une actrice en devenir et un musicien passionné de jazz.',
        vu: false
      }
    ];
  }

  marquerCommeVu(id: number) {
    this._films.update(films =>
      films.map(f => f.id === id ? { ...f, vu: true } : f)
    );
    this.saveFilms();
  }

  //Le toggle pour actioner le bouton
  toggleVu(id: number) {
    this._films.update(films =>
      films.map(f =>
        f.id === id ? { ...f, vu: !f.vu } : f
      )
    );
    this.saveFilms();
  }

  // méthode pour l'ajout d'un film
  ajouterFilm(film: Omit<Film, 'id' | 'vu'>) {
    const current = this._films();
    const nouveau: Film = {
      ...film,
      id: current.length + 1,
      vu: false
    };
    this._films.set([...current, nouveau]);
    this.saveFilms();
  }

  // méthode pour tout réinitialiser
  resetFilms() {
    localStorage.removeItem(this.STORAGE_KEY);
    this._films.set(this.defaultFilms());
  }
}
