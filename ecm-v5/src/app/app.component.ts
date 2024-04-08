import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NavComponent } from "./nav/nav.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from './home/home.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavComponent, FooterComponent, AboutComponent, HomeComponent]
})
export class AppComponent {
  title = 'ecm-v5';
}
