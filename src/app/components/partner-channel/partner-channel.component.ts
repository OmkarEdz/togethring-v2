import { Component, OnInit, Input } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-partner-channel',
  templateUrl: './partner-channel.component.html',
  styleUrls: ['./partner-channel.component.scss']
})
export class PartnerChannelComponent implements OnInit {

  

  /* code for Follow-Following button start here */
  buttonText = 'Follow';
  isTextToggled = false;
  toggleButtonText() {
    this.isTextToggled = !this.isTextToggled;
    this.buttonText = this.isTextToggled ? 'Following' : 'Follow';
  }
  /* code for Follow-Following button end here */

  /* code for Featured channels tab start here */
  featuredChannels = [
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/youtube.jpg', imgtitle: 'Youtube', channelName: "Youtube", link: "https://www.youtube.com/"},
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partner-channel/mac-logo.jpg', imgtitle: 'Nextflix', channelName: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", link: "https://www.youtube.com/"},
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/spotify.png', imgtitle: 'Spotify', channelName: "Spotify", link: "https://www.youtube.com/"},
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/media_group.png', imgtitle: 'Media Group', channelName: "Media Group", link: "https://www.youtube.com/"},
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/hotstar.jpg', imgtitle: 'Hotstar', channelName: "Hotstar", link: "https://www.youtube.com/"},
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/voot.webp', imgtitle: 'Voot', channelName: "Voot", link: "https://www.youtube.com/"},
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/zee5.png', imgtitle: 'Zee5', channelName: "Zee5", link: "https://www.youtube.com/"},
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/prime_video.jpg', imgtitle: 'Prime Video', channelName: "Prime Video", link: "https://www.youtube.com/"},
  ];
  /* code for Featured channels tab start here */

  /* code for Images tab start here */
  slides = [
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/youtube.jpg', imgtitle: 'Youtube'},
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partner-channel/mac-logo.jpg', imgtitle: 'Nextflix'},
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/spotify.png', imgtitle: 'Spotify'},
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/media_group.png', imgtitle: 'Media Group'},
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/hotstar.jpg', imgtitle: 'Hotstar'},
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/voot.webp', imgtitle: 'Voot'},
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/zee5.png', imgtitle: 'Zee5'},
    { imgsrc: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/prime_video.jpg', imgtitle: 'Prime Video'},
  ];

  @Input() images: any[] = [];
  constructor(public dialog: MatDialog, private location: Location) {}

  backtopage() {
    this.location.back();
  }

  openPopup(slide: { imgsrc: string }): void {
    this.dialog.open(ImageDialogComponent, {
      data: { slide },
    });
  }
  /* code for Images tab end here */

  /* code for Audio tab start here */
  audios = [
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/audio/audio.jpg', audiotitle: 'Lorem Ipsum is simply dummy text of the printing', audiodesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', postedby:'10 months ago', duration:'10:05', views:'101k views'},
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/audio/audio2.png', audiotitle: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing', audiodesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', postedby:'2 weeks ago', duration:'22.15', views:'100 views'},
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/audio/audio3.jpg', audiotitle: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum', audiodesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text  Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', postedby:'9 months ago', duration:'01:54', views:'90 views'},
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/media_group.png', audiotitle: 'Lorem Ipsum is simply', audiodesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', postedby:'2 years ago', duration:'08:00', views:'10k views'},
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/audio/audio4.png', audiotitle: 'Lorem Ipsum is simply | dummy text of the | printing', audiodesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', postedby:'1 month ago', duration:'09"88', views:'5.3k views'},
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/voot.webp', audiotitle: 'Lorem Ipsum is simply dummy text of the printing ', audiodesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem IpsumLorem Ipsum has been the industrys standard dummy text  has been the industrys standard dummy text ever since the 1500s', postedby:'2 months ago', duration:'10:05', views:'105 views'},
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/audio/audio.jpg', audiotitle: 'Lorem Ipsum | is simply dummy text | of the printing', audiodesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', postedby:'3 months ago', duration:'02:38', views:'103 views'},
  ];
  /* code for Audio tab end here */

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

  /* code for Videos tab start here */
  playlists = [
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/media_group.png', playlisttitle: 'Lorem Ipsum is simply', playlistdesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', postedby:'2 years ago', videoscount:'07' },
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/spotify.png', playlisttitle: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum', playlistdesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text  Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', postedby:'9 months ago', videoscount:'08' },
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/voot.webp', playlisttitle: 'Lorem Ipsum is simply dummy text of the printing ', playlistdesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem IpsumLorem Ipsum has been the industrys standard dummy text  has been the industrys standard dummy text ever since the 1500s', postedby:'2 months ago', videoscount:'22' },
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/hotstar.jpg', playlisttitle: 'Lorem Ipsum is simply | dummy text of the | printing', playlistdesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', postedby:'1 month ago',  videoscount:'11' },
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/zee5.png', playlisttitle: 'Lorem Ipsum | is simply dummy text | of the printing', playlistdesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', postedby:'3 months ago', videoscount:'03' },
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/youtube.jpg', playlisttitle: 'Lorem Ipsum is simply dummy text of the printing', playlistdesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', postedby:'10 months ago', videoscount:'12' },
  ];
  /* code for Videos tab end here */


  /* code for Books tab start here */
  books = [
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/books/book1.jpg', booktitle: 'Lorem Ipsum is simply dummy text of the printing', bookdesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', postedby:'10 months ago', views:'16k views', pagecount:'53'},
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/books/book2.jpg', booktitle: 'Lorem Ipsum | is simply dummy text | of the printing', bookdesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', postedby:'3 months ago', views:'3.5k views', pagecount:'10'},
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/spotify.png', booktitle: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum', bookdesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text  Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', postedby:'9 months ago', views:'90 views', pagecount:'16'},
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/books/book1.jpg', booktitle: 'Lorem Ipsum is simply', bookdesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', postedby:'2 years ago', views:'1.1k views', pagecount:'21'},
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/hotstar.jpg', booktitle: 'Lorem Ipsum is simply | dummy text of the | printing', bookdesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', postedby:'1 month ago', views:'999 views', pagecount:'99'},
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partners/voot.webp', booktitle: 'Lorem Ipsum is simply dummy text of the printing ', bookdesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem IpsumLorem Ipsum has been the industrys standard dummy text  has been the industrys standard dummy text ever since the 1500s', postedby:'2 months ago', views:'121 views', pagecount:'12'},
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/partner-channel/mac-logo.jpg', booktitle: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing', bookdesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', postedby:'2 weeks ago', views:'100 views', pagecount:'34'},
    { thumbnail: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/books/book1.jpg', booktitle: 'Lorem Ipsum is simply dummy text of the printing', bookdesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', postedby:'4 months ago', views:'5.6k views', pagecount:'28'},
  ];
  /* code for Books tab end here */


  tabClick(event: Event): void {
    event.preventDefault();
    // Your tab click logic here
  }

  ngOnInit(): void {
  }

}
