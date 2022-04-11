import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryDialogComponent } from '../add-category-dialog/add-category-dialog.component';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  form: FormGroup;

  constructor(private _fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.form = this.buildForm();
  }

  buildForm(): FormGroup {
    return this._fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category_id: ['', [Validators.required]],

    });
  }

  openDialog() {
    this.dialog.open(AddCategoryDialogComponent, {
      
      width: '300px'
      
    });
  }
}


