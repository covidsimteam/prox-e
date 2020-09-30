import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asset'
})
export class AssetPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
