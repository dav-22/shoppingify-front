import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  @Output() goBack: EventEmitter<number> = new EventEmitter<number>()
  @Input() item: Item;

  constructor() { }
  

  ngOnInit() {
  }

  back() {
    this.goBack.emit(1);
  }

}
