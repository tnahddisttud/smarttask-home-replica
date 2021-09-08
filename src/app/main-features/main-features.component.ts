import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-features',
  templateUrl: './main-features.component.html',
  styleUrls: ['./main-features.component.css'],
})
export class MainFeaturesComponent implements OnInit {
  constructor() {}
  step = 'step1';
  ngOnInit(): void {}
}
