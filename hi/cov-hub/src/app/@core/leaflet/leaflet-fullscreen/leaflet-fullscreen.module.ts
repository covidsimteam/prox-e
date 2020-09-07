
import { NgModule } from '@angular/core';
import { LeafletFullscreenDirective } from './leaflet-fullscreen.directive';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


@NgModule({
  declarations: [ LeafletFullscreenDirective ],
  imports: [
    LeafletModule,
  ],
  exports: [ LeafletFullscreenDirective ],
})
export class LeafletFullscreenModule { }
