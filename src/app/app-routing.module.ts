import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

// const routes: Routes = [
//   {path:'' , component: HomeComponent},
//   {path:'fr' , component: HomeComponent},
//   {path:'en-US' , component: HomeComponent},
//   {path: 'contact', component: ContactComponent},
//   {path: 'fr/contact', component: ContactComponent},
//   {path: 'en-US/contact', component: ContactComponent},
//   {path: 'beneficiaire', component: BeneficiaireComponent},
//   {path: 'fr/beneficiaire', component: BeneficiaireComponent},
//   {path: 'en-US/beneficiaire', component: BeneficiaireComponent},
//   {path: 'transactions', component: TransactionsComponent},
//   {path: 'fr/transactions', component: TransactionsComponent},
//   {path: 'en-US/transactions', component: TransactionsComponent},
//   {path: 'about', component: AboutComponent},
//   {path: 'fr/about', component: AboutComponent},
//   {path: 'en-US/about', component: AboutComponent},
//   {path: 'faq', component: FaqComponent}, 
//   {path: 'fr/faq', component: FaqComponent}, 
//   {path: 'en-US/faq', component: FaqComponent}, 
//   {path: 'transactionWithNoAccount', component: TransactionWithNoAccountComponent},
//   {path: 'fr/transactionWithNoAccount', component: TransactionWithNoAccountComponent},
//   {path: 'en-US/transactionWithNoAccount', component: TransactionWithNoAccountComponent},
//   {path: 'confirmTransactionWna', component: ConfirmTransactionWnaComponent},
//   {path: 'fr/confirmTransactionWna', component: ConfirmTransactionWnaComponent},
//   {path: 'en-US/confirmTransactionWna', component: ConfirmTransactionWnaComponent},
//   {path: 'transaction', component: TransactionComponent},
//   {path: 'fr/transaction', component: TransactionComponent},
//   {path: 'en-US/transaction', component: TransactionComponent},
//   {path: 'manageTransaction', component: ManageTransactionsComponent},
//   {path: 'fr/manageTransaction', component: ManageTransactionsComponent},
//   {path: 'en-US/manageTransaction', component: ManageTransactionsComponent},
//   {path: 'confirmTransaction', component: ConfirmTransactionComponent},
//   {path: 'fr/confirmTransaction', component: ConfirmTransactionComponent},
//   {path: 'en-US/confirmTransaction', component: ConfirmTransactionComponent},
//   {path: 'tracking', component: TrackingComponent},
//   {path: 'fr/tracking', component: TrackingComponent},
//   {path: 'en-US/tracking', component: TrackingComponent},
//   {path: 'trackingWithId', component: TrackingWithIdComponent},
//   {path: 'fr/trackingWithId', component: TrackingWithIdComponent},
//   {path: 'en-US/trackingWithId', component: TrackingWithIdComponent},
//   {path: 'houseLoan', component: HouseLoanComponent},
//   {path: 'houseDetails', component: HouseDetailsComponent}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
