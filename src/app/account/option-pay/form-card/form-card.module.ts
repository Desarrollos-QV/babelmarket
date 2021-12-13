import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormCardPageRoutingModule } from './form-card-routing.module';

import { FormCardPage } from './form-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormCardPageRoutingModule
  ],
  declarations: [FormCardPage]
})
export class FormCardPageModule {}
