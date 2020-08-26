import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormsModule  } from '@angular/forms';
import {Router} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
username: string;
password: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem('username', '');
  }
  login(): void{
    if (this.username === 'admin' && this.password === 'admin'){
      this.router.navigate(['dashboard']);
      localStorage.setItem('username', 'admin');
     }else {
       alert('Invalid credentials');
     }
  }

}
