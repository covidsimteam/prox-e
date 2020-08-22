import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comp'
})
export class CompPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
