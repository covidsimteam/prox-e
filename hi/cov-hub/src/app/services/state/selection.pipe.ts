import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selection'
})
export class SelectionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
