import { Component } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;


openInstagram() {
  window.open("https://www.instagram.com/kafecomafeto/", "_blank");
}

openWhatsapp() {
  window.open("https://api.whatsapp.com/send?phone=5581987307348", "_blank");
}
}
