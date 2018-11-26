import { Component, OnInit } from '@angular/core';
import { HumedalService } from '../services/humedal.service';
import { MapService } from '../services/map.service';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-humedal-home',
  templateUrl: './humedal-home.page.html',
  styleUrls: ['./humedal-home.page.scss'],
})
export class HumedalHomePage implements OnInit {

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  lng=0;
  ltd=0;
  constructor(public humedal:HumedalService, public mapService: MapService) { 
    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set(environment.mapbox.accessToken);
  }

  ngOnInit() {
    console.log(this.humedal.humedal.humedal.ubicacion);
    this.ltd=this.humedal.humedal.humedal.ubicacion.split(',')[0];
    this.lng=this.humedal.humedal.humedal.ubicacion.split(',')[1];
    this.initializeMap();
  }

  initializeMap(){
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng,this.ltd],
      
    });



  }

}
