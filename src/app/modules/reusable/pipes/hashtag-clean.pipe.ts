import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hashtagClean'
})
/**
 * pipe that takes alpha #2#3$ beta --> alpha #2 #3 beta
 */
export class HashtagCleanPipe implements PipeTransform {

  transform(inputString: any, args?: any): any {



      const hashPattern = new RegExp('((\\S)(#)(\\S))', 'g');
      inputString = inputString.replace(hashPattern, '$2 $3$4');




    return inputString;
  }

}
