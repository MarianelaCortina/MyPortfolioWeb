import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

   public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_zk2hb0b', 'template_dht42s5', e.target as HTMLFormElement, {
        publicKey: 'fc_xViW_Ezu-0ot6m',
      })
      .then(
        () => {
          alert('Mensaje enviado exitosamente!');
          location.reload(); 
        },
        (error: any) => {
          console.log('Algo falló...', (error as EmailJSResponseStatus).text);
        },
      );
  } 

}
