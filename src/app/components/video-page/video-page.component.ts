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
  

  AddCmnt = false;
  toggleAddCmnt() {
    this.AddCmnt = !this.AddCmnt;
  }

  AddReplyCmnt = false;
  toggleAddReplyCmnt() {
    this.AddReplyCmnt = !this.AddReplyCmnt;
  }

  comments = [
    { id: 1, username: 'Omkar0019', user_prof: 'https://web.togethring.net/favicon.ico', comment: 'Lorem Ipsum is simply dummy text.', postedat: '10 months', 
      replies: [
        { id: 1, username: 'User5005', user_prof: 'https://web.togethring.net/favicon.ico', comment: 'Lorem Ipsum is simply dummy text.', postedat: '3 months'},
        { id: 2, username: 'priya0011', user_prof: 'https://web.togethring.net/favicon.ico', comment: 'This is comment.', postedat: '2 months'}
      ] 
    },
    { id: 2, username: 'Nakul007', user_prof: 'https://web.togethring.net/favicon.ico', comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', postedat: '2 weeks', replies: [] },
    // Add more comments as needed
  ];

  // Track the open/closed state for each item
  itemStates: { [key: number]: boolean } = {};
  toggleItem(id: number): void {
    this.itemStates[id] = !this.itemStates[id];
  }

  // Track the open/closed state for each item
  itemReplyStates: { [key: number]: boolean } = {};
  toggleReplyItem(id: number): void {
    this.itemReplyStates[id] = !this.itemReplyStates[id];
  }

  ngOnInit(): void {}

}
