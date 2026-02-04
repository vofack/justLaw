import { CommonModule } from '@angular/common';
import { Component, HostListener, TemplateRef } from '@angular/core';
import { AppointmentComponent } from "../appointment/appointment.component";
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactComponent } from '../contact/contact.component';
import { bookComponent } from '../book/book.component';
import { AdminDataService } from '../services/admin-data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

declare function initCounter(): void;
declare let AOS: any;
declare let swal: any;

 


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgxSpinnerModule, bookComponent, AppointmentComponent],
   providers: [NgxSpinnerService], // Provide BsModalService
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  language = 'FR';
  user = 'Ornella';
  youtubeUrl: SafeResourceUrl;
  content = "26 Rue JB D'amour"
  showConnexion = false;
  showUser = true;
  modalRef: any;


  constructor(
    private spinner: NgxSpinnerService,
    private adminData: AdminDataService,
    private sanitizer: DomSanitizer
  ) {
    // Set default URL
    this.youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/covooklRdTQ');

    // Load from Firestore if available
    this.adminData.getContent().subscribe(data => {
      if (data?.youtubeUrl) {
        this.youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(data.youtubeUrl);
        this.content = data.contentText;
      }
    });
  }


  ngOnInit() {
    AOS.init();
    initCounter();
  }


   //this is a variable that hold number
   projectcount:number = 0;
   //same process
   accuratecount:number = 0;
   clientcount:number = 0;
   customerfeedback:number = 0;
 
   //we have created setinterval function with arrow function and
   //and set them in a variable that is projectcountstop.
   projectcountstop:any = setInterval(()=>{
     this.projectcount++;
     //we need to stop this at  particular point; will use if condition
     if(this.projectcount ==250)
     {
       //clearinterval will stop tha function
       clearInterval(this.projectcountstop);
     }
 
   },10) //10 is milisecond you can control it
 
 
   accuratecountstop:any = setInterval(()=>{
     this.accuratecount++;
     if(this.accuratecount == 95)
     {
       
       clearInterval(this.accuratecountstop);
     }
   },10) 
 
 
   clientcountstop:any = setInterval(()=>{
     this.clientcount++;
     if(this.clientcount == 920)
     {
       
       clearInterval(this.clientcountstop);
     }
   },10)
 
   customerfeedbackstop:any = setInterval(()=>{
     this.customerfeedback++;
     if(this.customerfeedback == 100)
     {
       
       clearInterval(this.customerfeedbackstop);
     }
   },10);

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


   suscribtion(email: { value: string | any[]; }){
    /** spinner starts on init */
    this.spinner.show();
    if(email.value.length!==0) {
      
    }
  
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
      swal.fire({title: 'Souscription', text: 'Merci !', 
            confirmButtonColor: '#29b1c9', customClass: 'swal-wide', icon: 'success', position: 'top-middle'});
    }, 1500);
  }


}
