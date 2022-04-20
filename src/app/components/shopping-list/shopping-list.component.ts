import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { List } from 'src/app/models/list';
import { ListService } from 'src/app/services/list.service';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  @Output() goToAdd: EventEmitter<number> = new EventEmitter<number>();
  @Output() cancelListItem: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Input() itemList: any[];

  listName: FormControl = new FormControl('', [Validators.required]);
  lists: List[];
  idSelected: number = 0;


  constructor(
    private _toast: ToastrService,
    private _shoppingService: ShoppingService,
    private _listService: ListService
  ) { }

  ngOnInit() {
    this.getLists();
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

  getLists() {
    this._listService.all()
      .subscribe({
        next: (value) => {
          
          this.lists = value;
          console.log(value);
          
        },
        error: (err) => {
          console.error(err);
          
        }
       })
  }

  cancelList () {
    this.itemList = [];
    this.listName.reset();
    this.cancelListItem.emit(this.itemList);
  }

  selectedList(l: string) {
    this.lists.map(list => {
      this.idSelected = list.id;
      if(list.name === l) {
        this.listName.setValue(list.name);
        list.shoppingLists.map(s => {
          this.itemList.push({item: s.item, count: s.count, listId: list.id});
          
        })
      
      }
    })
    console.log(this.itemList);
    
    
  }

  removeItem(itemId: number) {
    // this.itemList = this.itemList.filter(e => e.item.id !== itemId);
    this.itemList.map(il => {
      if(il.item.id === itemId) {
        il.count = 0;
      }
    });

   

    console.log(this.itemList);
    this.cancelListItem.emit(this.itemList);
    
  }
  
  restoreItem(itemId: number) {
    this.itemList.map(il => {
      if(il.item.id === itemId) {
        il.count = 1;
      }
    });

    console.log(this.itemList);
    this.cancelListItem.emit(this.itemList);
  }

  update() {
    this._listService.update(this.idSelected, this.listName.value, this.itemList)
      .subscribe({
        next: (val) => {
          this._toast.success('Lista editada correctamente', 'Éxito');
        },
        error: (err) => {
          this._toast.error('Error al editar lista', 'Error');
        }
      })
  }

  addOrUpdate() {
    if(this.idSelected == 0) {
      this.saveList();
      
    }else {
      this.update();
    }
  }
}
