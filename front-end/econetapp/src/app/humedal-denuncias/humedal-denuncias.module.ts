import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HumedalDenunciasPage } from './humedal-denuncias.page';

const routes: Routes = [
  {
    path: '',
    component: HumedalDenunciasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HumedalDenunciasPage]
})
export class HumedalDenunciasPageModule {}
