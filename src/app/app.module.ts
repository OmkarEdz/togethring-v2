import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LogoComponent } from './components/nav-bar/logo/logo.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { WebcamModule } from 'ngx-webcam';

import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular-highcharts';
import { TBoxComponent } from './components/t-box/t-box.component';
import { PartnerChannelComponent } from './components/partner-channel/partner-channel.component';
import { ImageDialogComponent } from './components/image-dialog/image-dialog.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { UploadVideoComponent } from './components/upload-video/upload-video.component';
import { UploadAudioComponent } from './components/upload-audio/upload-audio.component';
import { UploadDocsComponent } from './components/upload-docs/upload-docs.component';
import { UploadCameraComponent } from './components/upload-camera/upload-camera.component';
import { AudioPageComponent } from './components/audio-page/audio-page.component';
import { BookPageComponent } from './components/book-page/book-page.component';
import { PlaylistPageComponent } from './components/playlist-page/playlist-page.component';
import { VideoPageComponent } from './components/video-page/video-page.component';
import { ImagePageComponent } from './components/image-page/image-page.component';
import { BottomNavigationComponent } from './components/bottom-navigation/bottom-navigation.component';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        LogoComponent,
        TBoxComponent,
        PartnerChannelComponent,
        ImageDialogComponent,
        UploadImageComponent,
        UploadVideoComponent,
        UploadAudioComponent,
        UploadDocsComponent,
        UploadCameraComponent,
        AudioPageComponent,
        BookPageComponent,
        PlaylistPageComponent,
        VideoPageComponent,
        ImagePageComponent,
        BottomNavigationComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        //Material
        MatSnackBarModule,
        MatTabsModule,
        MatTooltipModule,
        //AngularFireModule.initializeApp(environment.firebase),
        //AngularFireAuthModule,
        MatToolbarModule,
        MatProgressBarModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatMenuModule,
        MatSidenavModule,
        MatSelectModule,
        MatListModule,
        MatCardModule,
        MatButtonToggleModule,
        MatGridListModule,
        MatCheckboxModule,
        MatRadioModule,
        MatTableModule,
        MatChipsModule,
        MatSortModule,
        ChartModule,
        MatPaginatorModule,
        WebcamModule,
        // ServiceWorkerModule.register('ngsw-worker.js', {
        //   enabled: environment.production,
        //   // Register the ServiceWorker as soon as the app is stable
        //   // or after 30 seconds (whichever comes first).
        //   registrationStrategy: 'registerWhenStable:30000'
        // })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {


}
