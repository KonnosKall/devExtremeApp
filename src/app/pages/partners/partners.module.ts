import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnersRoutingModule } from './partners-routing.module';
import { PartnersComponent } from './partners.component';
import { UpdatePartnerComponent } from './single-partner/update-partner/update-partner.component';
import { CreatePartnerComponent } from './single-partner/create-partner/create-partner.component';
import { ViewPartnerComponent } from './single-partner/view-partner/view-partner.component';



@NgModule({
  declarations: [PartnersComponent, UpdatePartnerComponent, CreatePartnerComponent, ViewPartnerComponent],
  imports: [
    CommonModule,
    PartnersRoutingModule,
    
  ]
})
export class PartnersModule { }
