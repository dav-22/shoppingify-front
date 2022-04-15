import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { Item } from 'src/app/models/item';
import { CategoryService } from 'src/app/services/category.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  item: Item;
  itemToAdd: Item;
  categories: Category[];
  show: number = 3;
  itemList:any[] = [];

  constructor(
    private _itemService: ItemService,
    private _categoryService: CategoryService,
    private _toast: ToastrService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this._categoryService.all()
      .subscribe({
        next: (value) => {
          console.log(value);
          this.categories = value;
        },
        error: (err) => {
          console.error(err);
          
        }
      })
  }

  setDetail(e: Item) {
    this.item = e;
    this.show = 2;
    console.log(e);
    
  }

  addItem(e: Item) {
    this.itemToAdd = e;
    this.show = 3;
    if(this.itemList.length == 0) {

      this.itemList.push({item: this.itemToAdd, count: 1});

    } else  {
      if(!this.itemList.find(l => l.item.id == e.id)) {

        this.itemList.push({item: this.itemToAdd, count: 1});
      } else {
        this._toast.warning('El producto ya se encuentra en la lista!');
      }
    } 
    console.log(this.itemList);
    
  }
}
