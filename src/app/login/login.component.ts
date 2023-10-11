import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  
  @Output() i: EventEmitter<any> = new EventEmitter<any>();
  loginEvent: any;
constructor(private router: Router){}
  login() {
    if (this.username === 'admin' && this.password === '123') {
      //this.loginEvent.emit(false);
      this.router.navigate(['/reporting']); // Navigate to the report component
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
}



