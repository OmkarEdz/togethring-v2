import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';

@Component({
  selector: 'app-upload-camera',
  templateUrl: './upload-camera.component.html',
  styleUrls: ['./upload-camera.component.scss']
})
export class UploadCameraComponent implements OnInit  {

  @ViewChild('webcam') webcamElement: ElementRef<any>;

  public webcamImage: WebcamImage = null;
  public showWebcam = true;
  public errors: WebcamInitError[] = [];

  constructor(public dialogRef: MatDialogRef<UploadCameraComponent>) { }

  ngAfterViewInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        if (mediaDevices && mediaDevices.length > 0) {
          this.webcamElement.nativeElement.nativeElement.srcObject = mediaDevices[0];
        }
      });
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

  public onCapture(): void {
    // Handle the captured image here (e.g., upload it to a server)
    console.log('Captured image:', this.webcamImage);

    // Close the modal
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
