import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html',
  styleUrls: ['./image-page.component.scss']
})
export class ImagePageComponent implements OnInit {

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
