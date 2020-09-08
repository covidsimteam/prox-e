import { ImagePickerComponent } from './image-picker/image-picker.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [ImagePickerComponent],
  imports: [CommonModule, IonicModule],
  exports: [ImagePickerComponent]
})
export class SharedModule {}
