import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreedListComponent } from './breedList/breedList.component';
import { BreedDetailComponent } from './breedDetail/breedDetail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BreedListComponent, BreedDetailComponent, PaginationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dog-app';
}
