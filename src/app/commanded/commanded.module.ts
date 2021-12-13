import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandedPageRoutingModule } from './commanded-routing.module';

import { CommandedPage } from './commanded.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandedPageRoutingModule
  ],
  declarations: [CommandedPage]
})
export class CommandedPageModule {}
