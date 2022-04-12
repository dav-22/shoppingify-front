import { Component, OnInit } from '@angular/core';
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
  categories: Category[];
  show: number = 1;

  constructor(
    private _itemService: ItemService,
    private _categoryService: CategoryService
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
  }
}
