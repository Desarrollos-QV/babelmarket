import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RateTripePage } from './rate-tripe.page';

const routes: Routes = [
  {
    path: '',
    component: RateTripePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RateTripePageRoutingModule {}
