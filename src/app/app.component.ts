import { Component, HostListener, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

// import { BsModalService } from 'ngx-bootstrap/modal';
// import { FirebaseService } from './services/firebase.service';
// import { MessagingService } from './services/messaging.service';
declare let AOS: any;
declare let WOW: any;
declare function initChatBox(): void; 
declare function initMain(): void;
declare function initNotification(): void;
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
// import { NgxSpinnerModule } from 'ngx-spinner';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { CommonModule } from '@angular/common';
import { AppointmentComponent } from './appointment/appointment.component';
import { ContactComponent } from './contact/contact.component';
import { bookComponent } from './book/book.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AppointmentComponent,
    NgxSpinnerModule,
    HeaderComponent,
    FooterComponent
],
  providers: [NgxSpinnerService], // Provide BsModalService
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Early Transfert';
  message: any;
  idleTimer = 0;
  reloadCounter = 0;
  activityInterval: any;
  reloadInterval: any;
  modalRef: any;
  cpuWorker:any;
  @ViewChild('templateLogout', {read: TemplateRef}) modalTemplate: TemplateRef<any> | undefined;

  constructor(
              // private modalService:BsModalService, 
              // private firebaseService: FirebaseService,
              // private messagingService: MessagingService, 
              private  spinner: NgxSpinnerService,
              private titleService: Title) { 
                // this.titleService.setTitle($localize`${this.title}`);
              }

  ngOnInit() {



  }
  
  ngAfterViewInit() {  
  }

  ngOnDestroy() {
    //clearInterval(this.activityInterval);
    //clearInterval(this.reloadInterval);
  }

  goToTop(): void {
    const elt = window.document.getElementById("goToTop");
    if(elt) elt.scrollIntoView({behavior: 'smooth'});

  }

  private init() {
    var  _this = this;


    this.mouseHandlers();
  }

  private mouseHandlers() {
    document.addEventListener('mousemove', 
      (event: MouseEvent) => {
        if (this.idleTimer < 59 ) {
          this.idleTimer = 0;
        }
        clearInterval(this.reloadInterval);
      }
    )
  }



  stillAround(): void {
    this.idleTimer = 0;
    this.reloadCounter = 30;
    clearInterval(this.reloadInterval);
    if(this.modalRef) this.modalRef.hide(); // pour fermer le popup
  }

  initializeWorker(): void {
    
    if(typeof Worker !== 'undefined') {
      if(!this.cpuWorker) {
        this.cpuWorker = new Worker('./app.worker', 
        { type: 'module'});
      }
    } else {
      throw new Error('not available');
    }
  }
 

}
