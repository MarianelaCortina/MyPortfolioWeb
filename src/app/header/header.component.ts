import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ HomeComponent, ContactComponent, PortfolioComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
    private router: Router,
   
  ) {}

  //Sidebar toggle show hide function
  status = false;
  addToggle(){
    this.status = !this.status;       
  }


  onHome(){
    this.router.navigate(['/']);
  }

  onContact(){
    this.router.navigate(['/contact']);
  }

  onPortfolio(){
    this.router.navigate(['/portfolio']);
  }




}