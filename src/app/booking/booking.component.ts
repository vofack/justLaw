import { CommonModule } from '@angular/common';
import { Component, HostListener, TemplateRef, ViewEncapsulation } from '@angular/core';
import { AppointmentComponent } from "../appointment/appointment.component";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactComponent } from '../contact/contact.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConfirmationModalComponent } from '../confirmation/confirmation-modal.component';

declare function initCounter(): void;
declare let AOS: any;
declare let swal: any;



@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule, NgxSpinnerModule],
   providers: [NgxSpinnerService, BsModalService], // Provide BsModalService
     encapsulation: ViewEncapsulation.None, // take the style of the modal popup in considaration
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {
  bookingForm: FormGroup;
  modalRef?: BsModalRef;
  trainingIsOptionActive: boolean = false;
  proIsOptionActive: boolean = false;
  frenchIsOptionActive: boolean = false;
  enIsOptionActive: boolean = false;
  linkIsOptionActive: boolean = false;


  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      // time: ['', Validators.required],
      origin: ['', Validators.required],
      residence: ['', Validators.required],
      matrimonial: ['', Validators.required],
      sexe: ['', Validators.required],
      trainingToggleOption: [false], // Default to "No"   
      proToggleOption: [false], // Default to "No" 
      formation: this.trainingIsOptionActive ? ['', Validators.required]:[], 
      trainingExpertise: this.trainingIsOptionActive ? ['', Validators.required]:[],  
      trainingNberExpertise: this.trainingIsOptionActive ? ['', Validators.required]:[],
      professional: this.proIsOptionActive ? ['', Validators.required]:[],   
      proExpertise: this.trainingIsOptionActive ? ['', Validators.required]:[], 
      proNberExpertise: this.trainingIsOptionActive ? ['', Validators.required]:[],  
      frenchToggleOption: [false], // Default to "No" 
      frenchTest: this.frenchIsOptionActive ? ['', Validators.required]: [],
      frenchScore: this.frenchIsOptionActive ? ['', Validators.required]:[],  
      enToggleOption: [false], // Default to "No" 
      enScore: this.enIsOptionActive ? ['', Validators.required]:[],  
      enTest: this.enIsOptionActive ? ['', Validators.required]: [],
      linkToggleOption: [false], // Default to "No" 
      link: this.linkIsOptionActive ? ['', Validators.required]: [],
      visaToggleOption: [false], // Default to "No" 




    });
  }

  submitBooking() {
    if (this.bookingForm.valid) {
      console.log('Booking Confirmed:', this.bookingForm.value);
      this.openConfirmationModal();
    }
  }

  openConfirmationModal() {
    this.modalRef = this.modalService.show(ConfirmationModalComponent, {
      class: 'modal-dialog-centered',
      initialState: {
        bookingDetails: this.bookingForm.value
      }
    });
  }

     // Correct method to handle the toggle change event
     onTrainingToggleChange(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;  // Access checked property
    console.log('Toggle is now: ', isChecked ? 'Oui' : 'Non');
    if(isChecked) {
      this.trainingIsOptionActive = true;;
    }else{
      this.trainingIsOptionActive = false;
    }
    
    // Optionally update the form control value or perform any other actions
    this.bookingForm.controls['trainingToggleOption'].setValue(isChecked);
  }


       // Correct method to handle the toggle change event
       onProToggleChange(event: Event) {
        const isChecked = (event.target as HTMLInputElement).checked;  // Access checked property
        console.log('Toggle is now: ', isChecked ? 'Oui' : 'Non');
        if(isChecked) {
          this.proIsOptionActive = true;;
        }else{
          this.proIsOptionActive = false;
        }
        
        // Optionally update the form control value or perform any other actions
        this.bookingForm.controls['proToggleOption'].setValue(isChecked);
      }

      // Correct method to handle the toggle change event
      onFrenchToggleChange(event: Event) {
        const isChecked = (event.target as HTMLInputElement).checked;  // Access checked property
        console.log('Toggle is now: ', isChecked ? 'Oui' : 'Non');
        if(isChecked) {
          this.frenchIsOptionActive = true;;
        }else{
          this.frenchIsOptionActive = false;
        }
        
        // Optionally update the form control value or perform any other actions
        this.bookingForm.controls['frenchToggleOption'].setValue(isChecked);
      }

      // Correct method to handle the toggle change event
      onEnToggleChange(event: Event) {
        const isChecked = (event.target as HTMLInputElement).checked;  // Access checked property
        console.log('Toggle is now: ', isChecked ? 'Oui' : 'Non');
        if(isChecked) {
          this.enIsOptionActive = true;;
        }else{
          this.enIsOptionActive = false;
        }
        
        // Optionally update the form control value or perform any other actions
        this.bookingForm.controls['enToggleOption'].setValue(isChecked);
      }

      // Correct method to handle the toggle change event
      onLinkToggleChange(event: Event) {
        const isChecked = (event.target as HTMLInputElement).checked;  // Access checked property
        console.log('Toggle is now: ', isChecked ? 'Oui' : 'Non');
        if(isChecked) {
          this.linkIsOptionActive = true;;
        }else{
          this.linkIsOptionActive = false;
        }
        
        // Optionally update the form control value or perform any other actions
        this.bookingForm.controls['linkToggleOption'].setValue(isChecked);
      }

            // Correct method to handle the toggle change event
       onVisaToggleChange(event: Event) {
              const isChecked = (event.target as HTMLInputElement).checked;  // Access checked property
              console.log('Toggle is now: ', isChecked ? 'Oui' : 'Non');
              
              // Optionally update the form control value or perform any other actions
              this.bookingForm.controls['visaToggleOption'].setValue(isChecked);
       }




}

