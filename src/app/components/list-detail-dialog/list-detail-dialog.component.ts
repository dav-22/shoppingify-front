import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import localEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localEs, 'es')
@Component({
  selector: 'app-list-detail-dialog',
  templateUrl: './list-detail-dialog.component.html',
  styleUrls: ['./list-detail-dialog.component.scss'],
  providers: [{provide: LOCALE_ID, useValue: 'es'}]
})
export class ListDetailDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    console.log(this.data.list);
    
  }

}
