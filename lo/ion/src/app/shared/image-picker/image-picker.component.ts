import { CameraPhoto } from '../../models/types';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CameraResultType, CameraSource, Capacitor, Plugins } from '@capacitor/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss']
})
export class ImagePickerComponent implements OnInit {
  selectedPhoto: CameraPhoto;
  useFilePicker = false;

  @ViewChild('filePicker', { static: false })
  filePickerRef: ElementRef<HTMLInputElement>;

  @Input() showPreview: boolean;

  @Output() imageTaken = new EventEmitter<CameraPhoto | File>();
  constructor(private platform: Platform) {}

  ngOnInit() {
    if (
      (this.platform.is('mobile') && !this.platform.is('hybrid')) ||
      this.platform.is('desktop')
    ) {
      this.useFilePicker = true;
    }
  }

  onFileChosen(event: Event) {
    const pickedFile = (event.target as HTMLInputElement).files[0];
    console.log('pickedFile', pickedFile);
    if (!pickedFile) {
      return;
    }
    const fr = new FileReader();
    fr.onload = () => {
      const dataUrl = fr.result.toString();
      this.selectedPhoto = { dataUrl, format: 'png' };
      this.imageTaken.emit(pickedFile);
    };
    fr.readAsDataURL(pickedFile);
  }

  onPickImage() {
    if (!Capacitor.isPluginAvailable('Camera')) {
      this.filePickerRef.nativeElement.click();
      return;
    }

    Plugins.Camera.getPhoto({
      quality: 50,
      source: CameraSource.Prompt,
      correctOrientation: true,
      height: 320,
      width: 200,
      saveToGallery: true,
      resultType: CameraResultType.DataUrl
    })
      .then(image => {
        console.log('Cam Image2: ', image);
        this.selectedPhoto = image as CameraPhoto;
        console.log('Cam Image str', this.selectedPhoto);
        this.imageTaken.emit(this.selectedPhoto);
      })
      .catch(error => {
        if (this.useFilePicker) {
          this.filePickerRef.nativeElement.click();
        }
        return false;
      });
  }
}
