import { CommonModule } from '@angular/common';
import { Component, HostListener, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule , NgxSpinnerModule],
  providers: [NgxSpinnerService, BsModalService], // Provide BsModalService
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  language = 'FR';
  user = 'Ornella';
  showConnexion = false;
  showUser = true;
  modalRef: any;


  constructor(private  spinner: NgxSpinnerService, private router: Router, private modalService: BsModalService) { }


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


  public openModal(template:TemplateRef<any>){
    if(this.modalRef) this.modalRef.hide();
    // this.modalRef = this.modalService.show(template);
    this.modalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered'
    });
  
  }

  booking(): void {

    console.log('Vous avez selectionné booking');
    let link = ['/booking'];
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
      this.router.navigate(link);
    }, 1000);
    if(this.modalRef) this.modalRef.hide(); // pour fermer le popup  
 }

  closeModal() {
    if(this.modalRef) this.modalRef.hide();
  }

}
