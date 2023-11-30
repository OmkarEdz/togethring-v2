import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent implements OnInit {
  videoSource  = 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/videos/video1.mp4'; // Replace with your video URL
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
  

  ngOnInit(): void {}

}
