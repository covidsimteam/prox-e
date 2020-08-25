import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'networkViz'
})
export class NetworkVizPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
