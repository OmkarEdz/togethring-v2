import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TBoxComponent } from './components/t-box/t-box.component';
import { PartnerChannelComponent } from './components/partner-channel/partner-channel.component';
import { ImagePageComponent } from './components/image-page/image-page.component';
import { AudioPageComponent } from './components/audio-page/audio-page.component';
import { VideoPageComponent } from './components/video-page/video-page.component';
import { BookPageComponent } from './components/book-page/book-page.component';
import { PlaylistPageComponent } from './components/playlist-page/playlist-page.component';

const routes: Routes = [
  {
    path: 't-box' , component: TBoxComponent,
  },
  {
    path: 'partner-channel' , component: PartnerChannelComponent,
  },
  {
    path: 'image-page' , component: ImagePageComponent,
  },
  {
    path: 'audio-page' , component: AudioPageComponent,
  },
  {
    path: 'video-page' , component: VideoPageComponent,
  },
  {
    path: 'book-page' , component: BookPageComponent,
  },
  {
    path: 'playlist-page' , component: PlaylistPageComponent,
  },
  {
    path: '**', component: TBoxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
