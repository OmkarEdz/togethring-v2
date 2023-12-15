import { Component, OnInit, AfterViewInit, ViewEncapsulation  } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { UploadImageComponent } from '../upload-image/upload-image.component';
import { UploadVideoComponent } from '../upload-video/upload-video.component';
import { UploadAudioComponent } from '../upload-audio/upload-audio.component';
import { UploadDocsComponent } from '../upload-docs/upload-docs.component';
import { UploadCameraComponent } from '../upload-camera/upload-camera.component';

declare var $: any;

@Component({
  selector: 'app-t-box',
  templateUrl: './t-box.component.html',
  styleUrls: ['./t-box.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TBoxComponent implements OnInit, AfterViewInit {
  constructor(public dialog: MatDialog) {}
  openDialogImage() {
    this.dialog.open(UploadImageComponent);
  }
  openDialogVideo() {
    this.dialog.open(UploadVideoComponent);
  }
  openDialogAudio() {
    this.dialog.open(UploadAudioComponent);
  }
  openDialogDocs() {
    this.dialog.open(UploadDocsComponent);
  }
  openDialogCamera() {
    this.dialog.open(UploadCameraComponent, {
      panelClass: 'custom-dialog-container-full-width-camera', 
    });
  }

  items = [
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/youtube.jpg', imgtitle: 'Youtube', pagelink: 'partner-channel' },
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partner-channel/mac-logo.jpg', imgtitle: 'Nextflix', pagelink: 'partner-channel' },
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/spotify.png', imgtitle: 'Spotify', pagelink: 'partner-channel' },
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/media_group.png', imgtitle: 'Media Group', pagelink: 'partner-channel' },
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/hotstar.jpg', imgtitle: 'Hotstar', pagelink: 'partner-channel' },
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/voot.webp', imgtitle: 'Voot', pagelink: 'partner-channel' },
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/zee5.png', imgtitle: 'Zee5', pagelink: 'partner-channel' },
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/prime_video.jpg', imgtitle: 'Prime Video', pagelink: 'partner-channel' },
  ];

  slides = [
    'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/tboxbanner.jpg',
    'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partner-channel/partner-channel-banner.png',
  ];


  channels = [
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/zee5.png', imgtitle: 'Zee5', pagelink: 'partner-channel', channelName:'Lorem Ipsum is simply dummy text' },
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/prime_video.jpg', imgtitle: 'Prime Video', pagelink: 'partner-channel', channelName:'Lorem Ipsum is simply dummy text' },
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/voot.webp', imgtitle: 'Voot', pagelink: 'partner-channel', channelName:'Lorem Ipsum is simply dummy text' },
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/spotify.png', imgtitle: 'Spotify', pagelink: 'partner-channel', channelName:'Lorem Ipsum is simply dummy text' },
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/media_group.png', imgtitle: 'Media Group', pagelink: 'partner-channel', channelName:'Lorem Ipsum is simply dummy text' },
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/hotstar.jpg', imgtitle: 'Hotstar', pagelink: 'partner-channel', channelName:'Lorem Ipsum is simply dummy text' },
  ];


  ngOnInit() {}

  ngAfterViewInit() {
    $(document).ready(() => {
      $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false,
        arrows: true
      });
    });
  }

}
