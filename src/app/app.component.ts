import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'; 
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header> 
    
    <div class="container mt-4">
      <router-outlet></router-outlet>
    </div>

    <app-footer></app-footer>
  `
})
export class AppComponent {}
