import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { AppointmentComponent } from '../appointment/appointment.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { bookComponent } from '../book/book.component';
declare function initMap(): void;
declare let AOS: any;
declare let swal: any;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, NgxSpinnerModule, bookComponent],
   providers: [NgxSpinnerService], // Provide BsModalService
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  messageError: boolean | undefined;
  emailError: boolean | undefined;
  nameError: boolean | undefined;
  subjectError: boolean | undefined;
  emailError_: boolean | undefined;
  subjectError_: boolean | undefined;

  constructor(private  spinner: NgxSpinnerService) { }
  

  ngOnInit(): void {
    AOS.init();
    // initMap();
  }

  reinitialiseError(){
       this.messageError = false;
       this.nameError = false;
       this.emailError = false;
       this.emailError_ = false;
       this.subjectError = false;
       this.subjectError_ = false;
  } 

  onKeyUpForMessage(event: KeyboardEvent){
    this.messageError = false;
    let message = document.getElementById("message") as HTMLFormElement;
    if (message['value'].length === 0) this.messageError = true;
  }
  onKeyUpForName(event: KeyboardEvent){
    this.nameError = false;
    let name = document.getElementById("name") as HTMLFormElement;
    if (name['value'].length === 0) this.nameError = true;
  }
  onKeyUpForEmail(event: KeyboardEvent){
    this.emailError = false;
    this.emailError_ = false;
    let email = document.getElementById("email") as HTMLFormElement;
    if (email['value'].length === 0) {
      this.emailError = true;
    } else {
      if (!this.validateEmail(email)) this.emailError_ = true;
    }
  }
  onKeyUpForSubject(event: KeyboardEvent){
    console.log("allo")
    this.subjectError = false;
    this.subjectError_ = false;
    let subject = document.getElementById("subject") as HTMLFormElement;
    if (subject['value'].length === 0) {
      this.subjectError = true;
    } else {
      if (subject['value'].length < 4) this.subjectError_ = true;
    }
  }

  validateEmail(email: HTMLFormElement) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email['value'].match(mailformat)  
  }
  
  sendMessage(InputMessage: { value: string | any[]; },InputName: { value: string | any[]; },InputEmail: any,InputSubject: { value: string | any[]; }){
    this.reinitialiseError();
    
    if(InputMessage.value.length===0 || InputName.value.length===0 
       || InputEmail['value'].length===0 || InputSubject.value.length===0
       || !this.validateEmail(InputEmail) || InputSubject.value.length < 4){
        if (InputMessage.value.length === 0) this.messageError = true;
        if (InputName.value.length === 0) this.nameError = true;
        if (InputEmail['value'].length === 0) {
          this.emailError = true;
        } else {
          if (!this.validateEmail(InputEmail)) this.emailError_ = true;
        }  
        if (InputSubject.value.length === 0) {
          this.subjectError = true;
        } else {
          if (InputSubject.value.length < 4) this.subjectError_ = true;
        }
    
    }else{
        
        let message_ = InputMessage.value.toString().trim();
        let name_ = InputName.value.toString().trim();
        let email_ = InputEmail['value'].toString().trim();
        let subject_ = InputSubject.value.toString().trim();

        this.spinner.show();
    
        setTimeout(() => {
          /** spinner ends after 2 seconds */
          this.spinner.hide();
          swal.fire({title: 'Feedback', text: 'Send successfuly . We will contact you soon', 
        confirmButtonColor: '#29b1c9', customClass: 'swal-wide', icon: 'success', position: 'top-middle'});
        }, 1000);    
        
    }    
  }
  

}

