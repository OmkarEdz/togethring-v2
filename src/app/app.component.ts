import { Component,Input } from '@angular/core';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public MatProgressBarModule:MatProgressBarModule
  title = 'youtubeClone';
  @Input() opened: boolean;
  @Input() widthSideBar: string = '16.5%';
  showProgressBar:boolean = false;

  changeState(event) {
    this.opened = event.opened;
    this.widthSideBar = event.sidebarwidth;
  }
  changeProgressState(event) {
    console.log("calling");
    this.showProgressBar = event;
  }
}
