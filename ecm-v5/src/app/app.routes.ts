import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BuyAHorseComponent } from './buy-a-horse/buy-a-horse.component';
import { SellYourHorseComponent } from './sell-your-horse/sell-your-horse.component';
import { OtherServicesComponent } from './other-services/other-services.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'home' , component: HomeComponent},
{ path: 'about', component: AboutComponent },
{ path: 'buy-a-horse', component: BuyAHorseComponent },
{ path: 'sell-your-horse', component: SellYourHorseComponent },
{ path: 'other-services', component: OtherServicesComponent },
{ path: 'contact', component: ContactComponent },
{ path: '**', redirectTo: '/home', pathMatch: 'full'}
];
