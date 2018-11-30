import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  username:string;
  password:string;
  constructor(public authService:AuthService,public router:Router) { }

  ngOnInit() {
  }

  registerAction(){
    this.authService.registerUser(this.username,this.password).then(()=>{
      this.router.navigate(['/home']);
    }

    );
  }


}
