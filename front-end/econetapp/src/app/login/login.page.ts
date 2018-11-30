import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  


  username:string;
  password:string;
  constructor(public router: Router, public auth:AuthService) { }

  ngOnInit() {
  }
  
  login(){
    this.auth.loginEmail(this.username,this.password).then(()=>{
      this.router.navigate(['/home']);
    });
   
  }
  loginGoogle(){
    this.auth.logInGmail().then(()=>{
      this.router.navigate(['/home']);
    });
    
  }
  loginFacebook(){
    this.auth.loginFacebook().then(()=>{
      this.router.navigate(['/home']);
    });
  }
  registerAction(){
    this.router.navigate(['/registration']);
  }

}
