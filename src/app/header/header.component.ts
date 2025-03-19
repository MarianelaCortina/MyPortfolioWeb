import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  isVisible: boolean = true;
  lastScrollTop: number = 0;


  menuOption: string = '';

  status = false;
  addToggle(){
    this.status = !this.status;       
  }

  onOption(menuOption: string){
    this.menuOption = menuOption;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop) {
      this.isVisible = false; // Oculta el navbar al hacer scroll hacia abajo
    } else {
      this.isVisible = true; // Muestra el navbar al hacer scroll hacia arriba
    }

    this.lastScrollTop = scrollTop;
  }
}