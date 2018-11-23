import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HumedalFotosPage } from './humedal-fotos.page';

const routes: Routes = [
  {
    path: '',
    component: HumedalFotosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HumedalFotosPage]
})
export class HumedalFotosPageModule {}
