import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterModule, RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, ContactComponent, PortfolioComponent]
})
export class AppComponent {
  title = 'MyPortfolioWeb';
}
