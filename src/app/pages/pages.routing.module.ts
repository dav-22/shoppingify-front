import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { ItemsComponent } from './items/items.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  {
    path: 'items',
    component: ItemsComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
  {
    path: 'stats',
    component: StatsComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
