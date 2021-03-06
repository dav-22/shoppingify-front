import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AddCategoryDialogComponent } from './add-category-dialog/add-category-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteItemDialogComponent } from './delete-item-dialog/delete-item-dialog.component';
import { ListDetailDialogComponent } from './list-detail-dialog/list-detail-dialog.component';
import { CheckItemListComponent } from './check-item-list/check-item-list.component';

@NgModule({
  declarations: [
    SideBarComponent,
    ItemCardComponent,
    ItemFormComponent,
    ItemDetailComponent,
    ShoppingListComponent,
    AddCategoryDialogComponent,
    DeleteItemDialogComponent,
    ListDetailDialogComponent,
    CheckItemListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [
    SideBarComponent,
    ItemCardComponent,
    ItemFormComponent,
    ItemDetailComponent,
    ShoppingListComponent,
    CheckItemListComponent
  ]
})
export class ComponentsModule { }
