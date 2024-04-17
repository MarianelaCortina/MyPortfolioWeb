import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ HomeComponent, ContactComponent, PortfolioComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen: boolean = false;


  constructor(
    private router: Router,
   
  ) {}

  //Sidebar toggle show hide function
  status = false;
  addToggle(){
    this.status = !this.status;       
  }
/* 
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
 */
/* 
  onHome(){
    this.router.navigate(['/']);
  }

  onContact(){
    this.router.navigate(['/contact']);
  }

  onPortfolio(){
    this.router.navigate(['/portfolio']);
  }
 */



}