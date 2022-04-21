import { registerLocaleData } from '@angular/common';
import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { List } from 'src/app/models/list';
import { ListService } from 'src/app/services/list.service';
import localEs from '@angular/common/locales/es'
import { MatDialog } from '@angular/material/dialog';
import { ListDetailDialogComponent } from 'src/app/components/list-detail-dialog/list-detail-dialog.component';
import { ToastrService } from 'ngx-toastr';

registerLocaleData(localEs, 'es')
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss'],
  providers: [{provide: LOCALE_ID, useValue: 'es'}]
})
export class HistorialComponent implements OnInit {
  lists: List[];
  list: List;
  constructor(
    private _listService: ListService,
    public dialog: MatDialog,
    private _toast: ToastrService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this._listService.all()
      .subscribe({
        next: (value) => {
          console.log(value);
          this.lists = value;
          
        },
        error: (err) => {
          console.error(err);
          
        } 
      })
  }

  openDialog(list: List) {
    this.dialog.open(ListDetailDialogComponent, {
      width: '500px',
      data: {
        list: list
      }
    });
  }

  setList(list: List) {
    if(list.status == 'completed') {
      this._toast.info(`La lista ${list.name} fue completada`);
    } else if(list.status == 'cancelled') {
      this._toast.info(`La lista ${list.name} fue cancelada`);
    } else {
      this.list = list;
      localStorage.setItem('list', JSON.stringify(list))
    }
   
  }
}
