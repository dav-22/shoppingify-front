import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import localEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { ListService } from 'src/app/services/list.service';
import { ToastrService } from 'ngx-toastr';

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
    private _listService: ListService,
    private _toast: ToastrService
  ) { }

  ngOnInit() {
    console.log(this.data);
    
  }

  accept() {
    if(this.data.action === 'complete') {
      this.complete();
    } else {
      this.cancel();
    }
  }

  complete() {
    this._listService.complete(this.data.list.id, this.data.list)
      .subscribe({
        next: (res) => {
          this._toast.success('Lista completada');          
        },
        error: (err) => {
          this._toast.error('Ocurrio un error');
        }
      })
  }

  cancel() {
    this._listService.cancel(this.data.list.id)
      .subscribe({
        next: (res) => {
          this._toast.success('Lista cancelada');          
        },
        error: (err) => {
          this._toast.error('Ocurrio un error');
        }
      })
  }

}
