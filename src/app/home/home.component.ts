import { Component, HostListener, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document
        .getElementsByTagName('app-main-nav-bar')[0]
        .classList.add('sticky');
      // document.getElementById('paragraph').classList.add('green');
    } else {
      document
        .getElementsByTagName('app-main-nav-bar')[0]
        .classList.remove('sticky');
    }
  }
}
