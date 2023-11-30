import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {

  constructor(private location: Location) { }

  backtopage() {
    this.location.back();
  }

  likepost = false;

  toggleLike() {
    this.likepost = !this.likepost;
  }

  showAddCmnt = false;

  toggleCmnt() {
    this.showAddCmnt = !this.showAddCmnt;
  }
  

  ngOnInit(): void {
  }

}
