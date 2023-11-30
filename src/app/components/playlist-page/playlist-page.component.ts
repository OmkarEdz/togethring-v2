import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.scss']
})
export class PlaylistPageComponent implements OnInit {

  /* code for Videos tab start here */
  videos = [
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/youtube.jpg', videotitle: 'Lorem Ipsum is simply dummy text of the printing', videodesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', postedby:'10 months ago', duration:'10:05', views:'16k views'},
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/zee5.png', videotitle: 'Lorem Ipsum | is simply dummy text | of the printing', videodesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', postedby:'3 months ago', duration:'02:38', views:'3.5k views'},
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/spotify.png', videotitle: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum', videodesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text  Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', postedby:'9 months ago', duration:'01:54', views:'90 views'},
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/media_group.png', videotitle: 'Lorem Ipsum is simply', videodesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', postedby:'2 years ago', duration:'08:00', views:'1.1k views'},
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/hotstar.jpg', videotitle: 'Lorem Ipsum is simply | dummy text of the | printing', videodesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', postedby:'1 month ago', duration:'09:88', views:'999 views'},
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/voot.webp', videotitle: 'Lorem Ipsum is simply dummy text of the printing ', videodesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem IpsumLorem Ipsum has been the industrys standard dummy text  has been the industrys standard dummy text ever since the 1500s', postedby:'2 months ago', duration:'10:05', views:'121 views'},
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partner-channel/mac-logo.jpg', videotitle: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing', videodesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', postedby:'2 weeks ago', duration:'22.15', views:'100 views'},
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/prime_video.jpg', videotitle: 'Lorem Ipsum is simply dummy text of the printing', videodesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', postedby:'4 months ago', duration:'10:05', views:'5.6k views'},
  ];
  /* code for Videos tab end here */

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
