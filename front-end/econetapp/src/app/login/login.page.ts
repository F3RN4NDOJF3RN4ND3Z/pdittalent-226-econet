import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  username:String="";
  password:String="";
  constructor(public router: Router) { }

  ngOnInit() {
  }

  login(){
    console.log(this.username);
    console.log(this.password);
    this.router.navigate(['/home']);
  }
  loginGoogle(){
    console.log(this.username);
    console.log(this.password);
    this.router.navigate(['/home']);
  }
  loginFacebook(){
    console.log(this.username);
    console.log(this.password);
    this.router.navigate(['/home']);
  }
  registerAction(){
    this.router.navigate(['/registration']);
  }

}
