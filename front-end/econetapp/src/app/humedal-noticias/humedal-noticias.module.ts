import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HumedalNoticiasPage } from './humedal-noticias.page';

const routes: Routes = [
  {
    path: '',
    component: HumedalNoticiasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HumedalNoticiasPage]
})
export class HumedalNoticiasPageModule {}
