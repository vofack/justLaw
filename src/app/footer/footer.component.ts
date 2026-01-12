import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
declare let swal: any;


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgxSpinnerModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  modalRef: any;


  constructor(private  spinner: NgxSpinnerService, private router: Router) { }


  suscribtion(email: { value: string | any[]; }){
    /** spinner starts on init */
    this.spinner.show();
    if(email.value.length!==0) {
      
    }
  
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
      swal.fire({title: 'Suscribtion', text: 'Thank You !', 
            confirmButtonColor: '#29b1c9', customClass: 'swal-wide', icon: 'success', position: 'top-middle'});
    }, 1500);
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
