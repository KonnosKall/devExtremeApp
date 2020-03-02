import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RfqsComponent } from './rfqs.component';
import { CreateRfqComponent } from './single-rfq/create-rfq/create-rfq.component';
import { UpdateRfqComponent } from './single-rfq/update-rfq/update-rfq.component';

const routes: Routes = [
  {
    path: '',
    component: RfqsComponent
  },
  {
    path: 'create',
    component: CreateRfqComponent
  },
  {
    path: 'view/:rfqId',
    component: UpdateRfqComponent
  },
  {
    path: 'update/:rfqId',
    component: UpdateRfqComponent
  }
]




@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RfqsRoutingModule { }
