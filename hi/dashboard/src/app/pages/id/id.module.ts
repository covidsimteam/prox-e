import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IdDirective } from './id.directive';
import { IdPipe } from './id.pipe';
import { IdComponent } from './id/id.component';

@NgModule({
  declarations: [IdComponent, IdPipe, IdDirective],
  imports: [
    CommonModule
  ]
})
export class IdModule { }
