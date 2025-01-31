import { Routes } from '@angular/router';
import { DemopipesComponent } from './BuiltInpipes/demopipes/demopipes.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'BuiltInPipe',component:DemopipesComponent},
];
