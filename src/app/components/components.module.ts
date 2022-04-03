import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


@NgModule({
  declarations: [
    SideBarComponent,
    ItemCardComponent,
    ItemFormComponent,
    ItemDetailComponent,
    ShoppingListComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    SideBarComponent,
    ItemCardComponent,
    ItemFormComponent,
    ItemDetailComponent,
    ShoppingListComponent
  ]
})
export class ComponentsModule { }
