import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RateTripePageRoutingModule } from './rate-tripe-routing.module';

import { RateTripePage } from './rate-tripe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RateTripePageRoutingModule
  ],
  declarations: [RateTripePage]
})
export class RateTripePageModule {}
