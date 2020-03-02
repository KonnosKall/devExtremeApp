import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RfqsRoutingModule } from './rfqs-routing.module';
import { RfqsComponent } from './rfqs.component';
import { DxDataGridModule, DxButtonModule } from 'devextreme-angular';
import { CreateRfqComponent } from './single-rfq/create-rfq/create-rfq.component';
import { UpdateRfqComponent } from './single-rfq/update-rfq/update-rfq.component';
import { ViewRfqComponent } from './single-rfq/view-rfq/view-rfq.component';


@NgModule({
  declarations: [RfqsComponent, CreateRfqComponent, UpdateRfqComponent, ViewRfqComponent],
  imports: [
    CommonModule,
    RfqsRoutingModule,
    DxDataGridModule,
    DxButtonModule
    
  ]
})
export class RfqsModule { }
