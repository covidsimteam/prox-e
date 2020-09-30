import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'medData'
})
export class MedDataPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
