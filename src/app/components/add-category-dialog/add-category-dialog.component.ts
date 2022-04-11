import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrls: ['./add-category-dialog.component.scss']
})
export class AddCategoryDialogComponent implements OnInit {

  categoryControl = new FormControl('', [Validators.required]);

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _categoryService: CategoryService) { }

  ngOnInit() {

  }

  add() {
    const category = new Category();

    category.name = this.categoryControl.value;
    
    this._categoryService.add(category).subscribe({
      next(res) {
        console.log(res);
        
      },
      error(err) {
        console.error(err);
        
      }
    })
  }

}
