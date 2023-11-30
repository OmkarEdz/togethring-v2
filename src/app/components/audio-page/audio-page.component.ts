import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-audio-page',
  templateUrl: './audio-page.component.html',
  styleUrls: ['./audio-page.component.scss']
})
export class AudioPageComponent implements OnInit {
  

  @ViewChild('audio') audio: ElementRef;

  tracks = [
    { url: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/audios/audio1.mp3' },
    { url: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/audios/audio2.mp3' },
    { url: 'https://webdevfolio.com/edreamz_projects/youtubeClone/assets/audios/audio3.mp3' },
    // Add more tracks as needed
  ];

  currentTrackIndex = 0;

  get currentTrack() {
    return this.tracks[this.currentTrackIndex];
  }

  isPlaying = false;
  progress = 0;

  playPause() {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.audio.nativeElement.play();
      this.updateProgress();
      this.isPlaying = true;
    } else {
      this.audio.nativeElement.pause();
      this.isPlaying = false;
    }
  }

  updateProgress() {
    const duration = this.audio.nativeElement.duration;
    const currentTime = this.audio.nativeElement.currentTime;
    this.progress = (currentTime / duration) * 100;

    if (this.isPlaying && currentTime < duration) {
      setTimeout(() => this.updateProgress(), 1000);
    } else {
      this.isPlaying = false;
    }
  }

  prevTrack() {
    this.currentTrackIndex = (this.currentTrackIndex - 1 + this.tracks.length) % this.tracks.length;
    this.audio.nativeElement.load();
    this.audio.nativeElement.play();
    this.isPlaying = true;
  }

  nextTrack() {
    this.currentTrackIndex = (this.currentTrackIndex + 1) % this.tracks.length;
    this.audio.nativeElement.load();
    this.audio.nativeElement.play();
    this.isPlaying = true;
  }

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
