import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnersComponent } from './partners.component';
import { CreatePartnerComponent } from './single-partner/create-partner/create-partner.component';
import { UpdatePartnerComponent } from './single-partner/update-partner/update-partner.component';

const routes: Routes = [
  {
    path: '',
    component: PartnersComponent
  },
  {
    path: 'create',
    component: CreatePartnerComponent
  },
  {
    path: 'view/:partnerId',
    component: UpdatePartnerComponent
  },
  {
    path: 'update/:partnerId',
    component: UpdatePartnerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PartnersRoutingModule { }
