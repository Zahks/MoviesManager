import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFilmComponent } from './ajout-film.component';

describe('AjoutFilmComponent', () => {
  let component: AjoutFilmComponent;
  let fixture: ComponentFixture<AjoutFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutFilmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
