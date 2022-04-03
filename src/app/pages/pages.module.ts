import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages.routing.module';
import { ItemsComponent } from './items/items.component';
import { HistoryComponent } from './history/history.component';
import { StatsComponent } from './stats/stats.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    ItemsComponent,
    HistoryComponent,
    StatsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
