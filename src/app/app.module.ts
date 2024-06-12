import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


@NgModule({
  declarations: [
   
  ],
  imports: [
    AppComponent,
    BrowserModule,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    PortfolioComponent,
    

  ],
  providers: [],
  bootstrap: []
})
export class AppModule { 
  
}


