import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.css'],
})
export class MainNavBarComponent implements OnInit {
  myElement;
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementsByTagName('section')[0].classList.add('sticky');
      // document.getElementById('paragraph').classList.add('green');
    } else {
      document.getElementsByTagName('section')[0].classList.remove('sticky');
    }
  }
}
