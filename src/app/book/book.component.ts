import { CommonModule } from '@angular/common';
import { Component, HostListener, TemplateRef, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ModalModule, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
  standalone: true,
  imports: [CommonModule], // Import BsModalModule without forRoot()
  providers: [BsModalService], // Provide BsModalService
  encapsulation: ViewEncapsulation.None // take the style of the modal popup in considaration
})
export class bookComponent  {
  showbook = false;
  pointOfScreen = 0;
  // modalRef?: BsModalRef; // ✅ Store the modal reference here


  constructor(private modalService:BsModalService, private spinner: NgxSpinnerService,
    private router: Router, public modalRef: BsModalRef
  ) { }

  @HostListener("window:scroll", []) onWindowScroll() {
    // do some stuff here when the window is scrolled
    const verticalOffset = window.pageYOffset 
          || document.documentElement.scrollTop 
          || document.body.scrollTop || 0;
          if (window.pageYOffset > 500) {
             this.showbook = true;
          }else{
            this.showbook = false;
          }
  }

   topFun() {
    window.scrollTo(0, 0);
   }


  public openModal(template:TemplateRef<any>){
    this.closeModal();
    this.modalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered'
    });
  
  }

  openWhasap(){
    window.open("https://wa.me/+15149992242", "_blank");
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
    this.closeModal();
 }


 closeModal() {
  if(this.modalRef) {
    this.modalRef?.hide();
  }else{
    console.log('not there')
  }
}

}
