import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'about', component: AboutComponent},
{ path: '**', redirectTo: '/home', pathMatch: 'full'}
];
