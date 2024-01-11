import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string | undefined, wordsNumber: number): string {
    if (!value) return '';

    const wordsArray = value.split(' ');
    const truncatedArray = wordsArray.slice(0, wordsNumber);
    const truncatedString = truncatedArray.join(' ');

    return truncatedString + (wordsArray.length > wordsNumber ? '...' : '');
  }

}
