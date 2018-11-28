import { Component, OnInit } from '@angular/core';
import { HumedalService } from '../services/humedal.service';
import { SubscriptionsService } from '../services/subscriptions.service';

@Component({
  selector: 'app-humedal-detail',
  templateUrl: './humedal-detail.page.html',
  styleUrls: ['./humedal-detail.page.scss'],
})
export class HumedalDetailPage implements OnInit {
  subscribed:boolean=false;
  constructor(public subscriptionsService:SubscriptionsService,public humedal:HumedalService) { }

  ngOnInit() {
  
   let subscriptions:any[]=this.subscriptionsService.consultarSubscripciones();
   console.log(subscriptions);
   console.log(this.humedal.humedal);
   if (subscriptions.includes(this.humedal.humedal)){
     this.subscribed=true;
   }


  }

  subscribeTo(){
    this.subscribed=true;
    this.subscriptionsService.guadarSubscripcion(this.humedal.humedal);
  }

}
