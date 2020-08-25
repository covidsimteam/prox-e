import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diabetesInput'
})
export class DiabetesInputPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
