import { Component, OnInit } from '@angular/core';
import { HumedalService } from '../services/humedal.service';
import { SubscriptionsService } from '../services/subscriptions.service';

@Component({
  selector: 'app-humedal-detail',
  templateUrl: './humedal-detail.page.html',
  styleUrls: ['./humedal-detail.page.scss'],
})
export class HumedalDetailPage implements OnInit {
  subscribed:boolean;
  constructor(public subscriptionsService:SubscriptionsService,public humedal:HumedalService) { }

  ngOnInit() {
  
   this.subscribed=false;
   let subscriptions:any[]=this.subscriptionsService.consultarSubscripciones();
   subscriptions.forEach(element => {
     if(element.humedal.id===this.humedal.humedal.humedal.id){
       this.subscribed=true;
       return;
     }
   });


  }

  subscribeTo(){
    if(this.subscribed){
      this.subscribed=false;
      this.subscriptionsService.borrarSubscripcion(this.humedal.humedal);  
    }else{
      this.subscribed=true;
      this.subscriptionsService.guadarSubscripcion(this.humedal.humedal);
    }
    
  }

}
