import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { CommonModule } from '@angular/common';
import { RouterLink} from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ContactComponent, RouterLink, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  menuOption: string = '';

  onOption(menuOption: string){
    this.menuOption = menuOption;
  }
  
}
