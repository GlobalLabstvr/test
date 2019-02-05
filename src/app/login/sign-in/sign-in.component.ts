import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
 constructor(
   public authService: AuthService
 ) {}
   ngOnInit() {
  }

  login(){
   // this.authService.SignIn()
  }
}
