import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {

  subscriptions:any[];
  constructor() { 
  	if(this.subscriptions == undefined){
  		this.subscriptions=[];
  		this.consultarSubscripciones();
  	}
  }

  getSubscripciones(){
  	return this.subscriptions;
  }
  consultarSubscripciones(){
  	if(this.subscriptions != undefined && this.subscriptions.length > 0){
  		console.log("leyendo subscripciones del array");
  	}else{
      console.log("leyendo favoritos del localstorage");
      if(localStorage["subscriptions"] != null){
        this.subscriptions = JSON.parse(localStorage["subscriptions"]);
      }
  		
	
  	}

  	console.log("consultando suscripciones");
  	return this.subscriptions;
  }

  guadarSubscripcion(elem){
  	console.log(elem.title);
  	this.subscriptions.push(elem);
  	localStorage.setItem("subscriptions",  JSON.stringify(this.subscriptions));

  }

  borrarSubscripcion(elem){
  	for (var i =0; i < this.subscriptions.length; i++){
      if (this.subscriptions[i].humedal.id === elem.humedal.id) {
          this.subscriptions.splice(i,1);
          break;
      }
    }
    
  	localStorage.setItem("subscriptions",  JSON.stringify(this.subscriptions));

  }
}
