import { Component, OnInit } from '@angular/core';
import { HumedalesService } from '../services/humedales.service';
import { HumedalDetailPage } from '../humedal-detail/humedal-detail.page';
import { Router } from '@angular/router';
import { HumedalService } from '../services/humedal.service';

@Component({
  selector: 'app-humedales',
  templateUrl: './humedales.page.html',
  styleUrls: ['./humedales.page.scss'],
})
export class HumedalesPage implements OnInit {

  constructor(public humedalesService:HumedalesService,public router:Router,public humedal:HumedalService) { }
  truncating=true;
  humedales=[];
  ngOnInit() {
    this.humedalesService.getHumedales().subscribe((res)=>{
      this.humedales=res["humedales"];
      console.log(this.humedales);
    });

  }
  humedalDetail(h:Object){
    console.log(h[0].humedal.id);
    this.humedal.humedal=h[0];
    this.router.navigate(["/humedal"]);
  }

}
