import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CardComponent } from './card/card.component';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CardComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    CardComponent
  ]
})
export class DashboardModule { }
