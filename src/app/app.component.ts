import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'onLineStore';
  currentUser: string;
  constructor(private router: Router){
    console.log(this.currentUser);
    if (this.currentUser === 'admin') {
      this.router.navigate(['dashboard']);
    }
  }
}
