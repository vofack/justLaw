import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ModalModule, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, Subscription } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
declare let swal: any;


@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.scss',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Import BsModalModule without forRoot()
  providers: [BsModalService], // Provide BsModalService
  encapsulation: ViewEncapsulation.None // take the style of the modal popup in considaration
})
export class ConfirmationModalComponent {
  @Input() bookingDetails: any;
  private sendMsgSuscribtions: Subscription = new Subscription;
  private apiUrl = 'https://nodemailerapi-ohbheeq7pq-uc.a.run.app/';
  serviceImmigrationEmail = 'serviceenimmigrationkwuning@gmail.com';



  constructor(public modalRef: BsModalRef, private  spinner: NgxSpinnerService, 
              private router: Router, private http: HttpClient) {}

  closeModal() {
    this.modalRef.hide();
        /** spinner starts on init */
        this.spinner.show();
        console.log('Vous avez selectionné home');

        setTimeout(() => {
          /** spinner ends after 2 seconds */
          this.spinner.hide();
          this.confirm();
          // swal.fire({title: 'Reservation', text: 'We will cantact you soon <br>Thank You !', 
          //       confirmButtonColor: '#29b1c9', customClass: 'swal-wide', icon: 'success', position: 'top-middle'
          //     }).then((result: { isConfirmed: any; }) => {
          //         if (result.isConfirmed) {
          //           // Add the script or function you want to execute here
          //           console.log('User clicked OK');
          //           this.router.navigate(link);
          //         } else {
          //           // The user clicked "No" - Handle the cancellation (optional)
          //           console.log("User canceled.");
          //         }
                
          //       });
        }, 500);
  }

confirm(){
  let link = ['/'];
  swal.fire({
    title: 'Reservation 🚀',
    text: 'Est que vos informations sont correctes ?',
    icon: 'question',
    position: 'top-middle',
    showCancelButton: true,  // Enables the "No" button
    confirmButtonColor: '#29b1c9',  // Color for the "Yes" button
    cancelButtonColor: '#d33',  // Color for the "No" button
    confirmButtonText: 'Oui',
    cancelButtonText: 'Non',
    customClass: 'swal-wide'
  }).then((result: { isConfirmed: any; }) => {
    if (result.isConfirmed) {
      // The user clicked "Yes" - Execute your script here
      console.log("User confirmed! Running the script...");
      this.sendMsg(this.serviceImmigrationEmail);
      swal.fire({title: 'Nos Forfaits', html: '<strong>50$/30Min ou 100$/Heure ...</strong><br><br>Virement interac à ce numero: <strong>+514 (999) 4222</strong><br>Vous serez bientot contacté<br>Merci  !', 
        confirmButtonColor: '#29b1c9', customClass: 'swal-wide', icon: 'success', position: 'top-middle'
      }).then((result: { isConfirmed: any; }) => {
          if (result.isConfirmed) {
            // Add the script or function you want to execute here
            console.log('User clicked OK');
            this.router.navigate(link);
          } else {
            // The user clicked "No" - Handle the cancellation (optional)
            console.log("User canceled.");
          }
        
        });
    } else {
      // The user clicked "No" - Handle the cancellation (optional)
      console.log("User canceled.");
    }
  });
  
  // Example function to be executed after clicking "Yes"
  function myCustomScript() {
    alert("Your custom script is running!");
  }
  
}

  sendMsg(email: string){
    this.sendMsgSuscribtions = this.sendEmail(email).subscribe((res: any) => {

    console.log(`messsage sent successfuly : ${res}`);
      
  }, 
    (err: { status: number; }) => {
          if (err.status === 200){
            this.unsuscribe();
          }
    }
  );
  }

  sendEmail(email: string): Observable<any> {
    let msg = this.buildMessage();
    return this.http.get<any>(this.apiUrl + `sendEmailToServiceImmigration/${email}/${this.bookingDetails.name}/${this.bookingDetails.email}/${this.bookingDetails.date}/${this.bookingDetails.origin}/${this.bookingDetails.residence}/${this.bookingDetails.matrimonial}/${this.bookingDetails.sexe}/${this.bookingDetails.trainingToggleOption}/${this.bookingDetails.formation}/${this.bookingDetails.trainingExpertise}/${this.bookingDetails.trainingNberExpertise}/${this.bookingDetails.proToggleOption}/${this.bookingDetails.professional}/${this.bookingDetails.proExpertise}/${this.bookingDetails.proNberExpertise}/${this.bookingDetails.frenchToggleOption}/${this.bookingDetails.frenchTest}/${this.bookingDetails.frenchScore}/${this.bookingDetails.enToggleOption}/${this.bookingDetails.enTest}/${this.bookingDetails.enScore}/${this.bookingDetails.linkToggleOption}/${this.bookingDetails.link}/${this.bookingDetails.visaToggleOption}`);
  }

  buildMessage(): string{
    const serviceimmigrationHtml =
    `
    <h1>Service En Immigration Kwuning </h1>
      <h2>Details du client : </h2>
      <p><strong>Name:</strong> ${ this.bookingDetails.name }</p>
      <p><strong>Email:</strong> ${ this.bookingDetails.email }</p>
      <p><strong>Date:</strong> ${ this.bookingDetails.date }</p>
      <p><strong>Pays d'origine :</strong> ${ this.bookingDetails.origin }</p>
      <p><strong>Pays de residence:</strong> ${ this.bookingDetails.residence }</p> 
      <p><strong>Situation matrimoniale :</strong> ${ this.bookingDetails.matrimonial }</p> 
      <p><strong>Sexe :</strong> ${ this.bookingDetails.sexe }</p> 
      <p><strong>trainingToggleOption  :</strong> ${ this.bookingDetails.trainingToggleOption }</p>
      <p><strong>formation :</strong> ${ this.bookingDetails.formation }</p>  
      <p><strong>trainingExpertise :</strong> ${ this.bookingDetails.trainingExpertise }</p>  
      <p><strong>trainingNberExpertise :</strong> ${ this.bookingDetails.trainingNberExpertise }</p>  
      <p><strong>proToggleOption  :</strong> ${ this.bookingDetails.proToggleOption }</p> 
      <p><strong>Professional :</strong> ${ this.bookingDetails.professional }</p> 
      <p><strong>proExpertise :</strong> ${ this.bookingDetails.proExpertise }</p>    
      <p><strong>proNberExpertise :</strong> ${ this.bookingDetails.proNberExpertise }</p>  
      <p><strong>frenchToggleOption  :</strong> ${ this.bookingDetails.frenchToggleOption }</p>
      <p><strong>Test de francais :</strong> ${ this.bookingDetails.frenchTest }</p>
      <p><strong>FrenchScore :</strong> ${ this.bookingDetails.frenchScore }</p>   
      <p><strong>EnToggleOption  :</strong> ${ this.bookingDetails.enToggleOption }</p>
      <p><strong>Test de d'aglais :</strong> ${ this.bookingDetails.enTest }</p>
      <p><strong>EnScore :</strong> ${ this.bookingDetails.enScore }</p>   
      <p><strong>LinkToggleOption  :</strong> ${ this.bookingDetails.linkToggleOption }</p>
      <p><strong>Link:</strong> ${ this.bookingDetails.link }</p>
      <p><strong>visaToggleOption  :</strong> ${ this.bookingDetails.visaToggleOption }</p>`;
      return serviceimmigrationHtml;
  }

  unsuscribe(): void {
    if(this.sendMsgSuscribtions){
      this.sendMsgSuscribtions.unsubscribe();
    }
  }

}