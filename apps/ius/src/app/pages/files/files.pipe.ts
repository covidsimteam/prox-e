import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'files'
})
export class FilesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
