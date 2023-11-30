import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {
  selectedFile: File | null = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  uploadImage(): void {
    if (this.selectedFile) {
      // TODO: Add logic to upload the image
      console.log('Uploading image:', this.selectedFile);
    } else {
      console.warn('No file selected.');
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
