import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./services/auth.service";
import { Component } from "@angular/core";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
      <h2>Admin Login</h2>
      <input [(ngModel)]="email" placeholder="Email" />
      <input [(ngModel)]="password" type="password" placeholder="Password" />
      <button (click)="login()">Login</button>
    `,
  })
  export class LoginComponent {
    email = '';
    password = '';
  
    constructor(private auth: AuthService, private router: Router) {}
  
    async login() {
      await this.auth.login(this.email, this.password);
      this.router.navigate(['/admin']);
    }
  }
  