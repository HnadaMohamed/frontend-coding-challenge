import { Pipe, PipeTransform } from '@angular/core';

/**
 *  Transform Numbers from  10 000 000 ... format to  10 K,M,G,T,P,E
 */

@Pipe({
  name: 'kformater'
})
export class KformaterPipe implements PipeTransform {

  symbols = ['', 'k', 'M', 'G', 'T', 'P', 'E'];

  transform( value: number): any {

    // determines symbol
    // tslint:disable-next-line: no-bitwise
    const symbol = Math.log10(value) / 3 | 0;

    // if zero, we don't need a suffix
    if (symbol === 0) { return value; }

    // get suffix and determine scale
    const suffix = this.symbols[symbol];
    const scale = Math.pow(10, symbol * 3);

    // scale the number
    const scaled = value / scale;

    // format number and add suffix
    return scaled.toFixed(1) + suffix;

  }

}
