import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrls: ['./add-category-dialog.component.scss'],
})
export class AddCategoryDialogComponent implements OnInit {
  categoryControl = new FormControl('', [Validators.required]);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _categoryService: CategoryService,
    private _toast: ToastrService
  ) {}

  ngOnInit() {}

  add() {
    const category = new Category();

    category.name = this.categoryControl.value;

    this._categoryService.add(category).subscribe({
      next: (value) => {
        this._toast.success('Categoria agredad', 'Éxito');
      },
      error: (err) => {
        if(err.error.error.includes('Duplicate entry')) {
          this._toast.error('Categoria existente', 'Error');
        }else {
          this._toast.error('Error al crear categoria', 'Error');
        }
        
      },
    });
  }
}
