import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-delete-item-dialog',
  templateUrl: './delete-item-dialog.component.html',
  styleUrls: ['./delete-item-dialog.component.scss']
})
export class DeleteItemDialogComponent implements OnInit {
  loading: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _itemService: ItemService,
    private _toast: ToastrService
  ) { 
      
  }

  ngOnInit() {
    
  }

  delete() {
    this.loading = true;
    this._itemService.delete(this.data.item.id)
      .subscribe({
        next: (value) => {
          this.loading = false;
          this._toast.success('Producto eliminado correctamente', 'Éxito');
        },
        error: (err) => {
          this.loading = false;
          
          if(err.error.original.code == 'ER_ROW_IS_REFERENCED_2') {
            this._toast.error('No puede eliminar un producto que pertenezca a una lista', 'Error');
          } else {
            this._toast.error('Error al eliminar producto', 'Error');
          }
          
        }
      })
  }
}
