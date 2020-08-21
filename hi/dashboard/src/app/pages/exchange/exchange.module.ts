import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeAssetComponent } from './exchange-asset/exchange-asset.component';
import { AssetPipe } from './asset.pipe';
import { AssetifyDirective } from './assetify.directive';



@NgModule({
  declarations: [ExchangeAssetComponent, AssetPipe, AssetifyDirective],
  imports: [
    CommonModule
  ]
})
export class ExchangeModule { }
