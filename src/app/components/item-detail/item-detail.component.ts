import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Item } from 'src/app/models/item';
import { DeleteItemDialogComponent } from '../delete-item-dialog/delete-item-dialog.component';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  @Output() goBack: EventEmitter<number> = new EventEmitter<number>()
  @Input() item: Item;

  constructor(
    public dialog: MatDialog
  ) { }
  

  ngOnInit() {
  }

  back() {
    this.goBack.emit(3);
  }

  openDialog() {
    this.dialog.open(DeleteItemDialogComponent, {
      width: '300px',
      data: {
        item: this.item
      }
    });
  }

}
