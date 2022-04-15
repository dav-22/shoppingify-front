import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages.routing.module';
import { ItemsComponent } from './items/items.component';
import { HistorialComponent } from './historial/historial.component';
import { StatsComponent } from './stats/stats.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    ItemsComponent,
    HistorialComponent,
    StatsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
