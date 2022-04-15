import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  @Output() goToAdd: EventEmitter<number> = new EventEmitter<number>();
  @Input() itemList: any[];

  listName: FormControl = new FormControl('', [Validators.required]);

  constructor(
    private _toast: ToastrService,
    private _shoppingService: ShoppingService
  ) { }

  ngOnInit() {
  }

  decrease(il: any) {
    if(il.count > 1) {
      il.count -= 1;
    } else {
      this._toast.warning('El minimo permitido es 1');
    }
  }

  increment(il: any) {
    il.count += 1;
  }

  saveList() {
    this._shoppingService.addShoppingList(this.itemList, this.listName.value)
      .subscribe({
        next: (value) => {
          this._toast.success('Lista agregada correctamente!', 'Éxito');
        },
        error: (err) => {

          if(err.error === 'Duplicate entry') {
            this._toast.error('Error al agregar lista', 'Error');
          } else {

            this._toast.error('Ya éxiste lista con ese nombre', 'Error');
          }
         
        }
      })

        
  }

  addItem() {
    this.goToAdd.emit(1);
  }
}
