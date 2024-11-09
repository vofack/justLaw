import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule , NgxSpinnerModule],
  providers: [NgxSpinnerService], // Provide BsModalService
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  language = 'FR';
  user = 'Ornella';
  showConnexion = false;
  showUser = true;
  modalRef: any;


  constructor(private  spinner: NgxSpinnerService, private router: Router) { }


  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    event.target.innerWidth;
    if(localStorage.getItem('user') !== null) {
      this.showConnexion = false;
      this.showUser = true;
    }else{
      this.showConnexion = true;
      this.showUser = false;
    }
  }

  contact(): void {
  
    console.log('Vous avez selectionné contact');
    let link = ['/contact'];
    let elt = document.getElementById("menuCheckbox");
    if (elt) elt.click(); // to close the menu
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
      this.router.navigate(link);
    }, 2000);
    if(this.modalRef) this.modalRef.hide(); // pour fermer le popup  
  }


  Home(): void {

    let link = ['/'];
    let elt = document.getElementById("menuCheckbox");
    if (elt) elt.click(); // to close the menu    this.spinner.show();
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
      this.router.navigate(link);
    }, 2000);
    if(this.modalRef) this.modalRef.hide(); // pour fermer le popup  
  }
}
