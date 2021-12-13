import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionPayPageRoutingModule } from './option-pay-routing.module';

import { OptionPayPage } from './option-pay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionPayPageRoutingModule
  ],
  declarations: [OptionPayPage]
})
export class OptionPayPageModule {}
