import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { PlaysComponent } from './plays/plays.component';
import { ElementsModule } from '../elements/elements.module';
import { DashboardModule } from '../dashboard/dashboard.module';


@NgModule({
  declarations: [
    MoviesComponent,
    PlaysComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    ElementsModule,
    DashboardModule
  ]
})
export class MoviesModule { }
