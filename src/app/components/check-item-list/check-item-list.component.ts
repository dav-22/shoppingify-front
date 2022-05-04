import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { List } from 'src/app/models/list';
import { Shopping } from 'src/app/models/shopping';
import { ListService } from 'src/app/services/list.service';
import { ListDetailDialogComponent } from '../list-detail-dialog/list-detail-dialog.component';

@Component({
  selector: 'app-check-item-list',
  templateUrl: './check-item-list.component.html',
  styleUrls: ['./check-item-list.component.scss']
})
export class CheckItemListComponent implements OnInit {

  @Output() goToAdd: EventEmitter<number> = new EventEmitter<number>();
  @Input() list: List;

  constructor(
    private _listService: ListService,
    private _toast: ToastrService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    
  }

  addItem() {
    this.goToAdd.emit(1);
  }

  complete() {
    
    this.openDialog(this.list, 'complete');

  }

  cancel() {
   
    this.openDialog(this.list, 'cancel');
  }

  openDialog(list: List, action: string) {
    this.dialog.open(ListDetailDialogComponent, {
      width: '500px',
      data: {
        list: list,
        action: action

      }
    });
  }

  checked(l: Shopping, e) {
    l.checked = e.target.checked ? 1 : 0;
  }
}
