import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { List } from 'src/app/models/list';
import { Shopping } from 'src/app/models/shopping';
import { ListService } from 'src/app/services/list.service';

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
    private _toast: ToastrService
  ) { }

  ngOnInit() {
  }

  addItem() {
    this.goToAdd.emit(1);
  }

  complete() {
    this._listService.complete(this.list.id, this.list)
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
    this._listService.cancel(this.list.id)
      .subscribe({
        next: (res) => {
          this._toast.success('Lista cancelada');          
        },
        error: (err) => {
          this._toast.error('Ocurrio un error');
        }
      })
  }

  checked(l: Shopping, e) {
    l.checked = e.target.checked ? 1 : 0;
  }
}
