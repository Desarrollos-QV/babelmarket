import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoneCommPage } from './done-comm.page';

const routes: Routes = [
  {
    path: '',
    component: DoneCommPage
  },
  {
    path: 'rate-tripe',
    loadChildren: () => import('./rate-tripe/rate-tripe.module').then( m => m.RateTripePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoneCommPageRoutingModule {}
