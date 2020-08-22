import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sched'
})
export class SchedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
