import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HealthFormsModule } from '../forms/forms.module';
import { FilesComponent } from './files.component';
import { FilesPipe } from './files.pipe';

@NgModule({
  declarations: [FilesComponent, FilesPipe],
  imports: [
    CommonModule,
    HealthFormsModule
  ]
})
export class FilesModule { }
