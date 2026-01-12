import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';

export const routes: Routes = [
    {path:'' , component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'booking', component: BookingComponent}


];
