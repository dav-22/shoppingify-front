import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Output() itemDetail: EventEmitter<Item> = new EventEmitter<Item>();
  @Input() item: Item;

  constructor() { }

  ngOnInit() {
  }

  setDetail() {
    this.itemDetail.emit(this.item);
    console.log('card > ', this.item);
    
  }
}
