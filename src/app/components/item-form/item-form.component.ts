import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { Item } from 'src/app/models/item';
import { CategoryService } from 'src/app/services/category.service';
import { ItemService } from 'src/app/services/item.service';
import { AddCategoryDialogComponent } from '../add-category-dialog/add-category-dialog.component';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss'],
})
export class ItemFormComponent implements OnInit {
  form: FormGroup;
  categories: Category[];

  constructor(
    private _fb: FormBuilder,
    public dialog: MatDialog,
    private _categoryService: CategoryService,
    private _itemService: ItemService,
    private toast: ToastrService
  ) {}

  ngOnInit() {
    this.form = this.buildForm();
    this.getAll();
  }

  buildForm(): FormGroup {
    return this._fb.group({
      name: ['', [Validators.required]],
      description: ['', []],
      image: ['', []],
      categoryId: ['', [Validators.required]],
    });
  }

  openDialog() {
    this.dialog.open(AddCategoryDialogComponent, {
      width: '300px',
    });
  }

  getAll() {
    this._categoryService.all()
      .subscribe((next) => {
        
        this.categories = next;
      })
  }

  addOne() {
    let item = new Item();
    item = this.form.getRawValue();

    this.categories.map(c => {
      
      if(c.name == this.form.getRawValue().categoryId) {
        
        item.categoryId = c.id;
        
      }
    })

    
    this._itemService.add(item)
      .subscribe({
        next: (value) => {
          this.toast.success('Producto agregado', 'Éxito');
          this.form.reset();
        },
        error: (err) => {
          this.toast.error('Erro al agregar producto', 'Error');
        }
      })
  }
}
