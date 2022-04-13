import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  show: boolean = false;
  constructor() { }

  ngOnInit() {
    
  }

  showMenu() {
    this.show = !this.show;
  
    
  }

}
