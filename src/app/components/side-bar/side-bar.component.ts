import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { iif } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  menuSelected: number;


  constructor(private _router: Router) { }

  ngOnInit() {
    let url: string = this._router.url;

    if(url.includes('items')) {
      this.menuSelected = 1;

    } else if(url.includes('historial')) {
      this.menuSelected = 2;

    } else {
      this.menuSelected = 3;
    }
  }

  goTo(route: string) {
    this._router.navigate(['pages', route])
  }
}
