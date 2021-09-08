import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-views',
  templateUrl: './main-views.component.html',
  styleUrls: ['./main-views.component.css'],
})
export class MainViewsComponent implements OnInit {
  view = 'view1';

  constructor() {}

  ngOnInit(): void {}
}
