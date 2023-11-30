import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-docs',
  templateUrl: './upload-docs.component.html',
  styleUrls: ['./upload-docs.component.scss']
})
export class UploadDocsComponent implements OnInit {
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
