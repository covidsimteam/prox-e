import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilesComponent } from './files.component';
import { HealthFormsModule } from '../forms/forms.module';
import { FilesPipe } from './files.pipe';


@NgModule({
  declarations: [FilesComponent, FilesPipe],
  imports: [
    CommonModule,
    HealthFormsModule
  ]
})
export class FilesModule { }
