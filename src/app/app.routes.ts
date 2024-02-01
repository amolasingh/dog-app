import { Routes } from '@angular/router';
import { BreedListComponent } from './breedList/breedList.component';

export const routes: Routes = [
    {path: 'breedslist', component: BreedListComponent},
    {path: '', redirectTo: '/breedslist', pathMatch: 'full'}
];
