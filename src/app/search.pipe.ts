import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.model';
import { Idea } from './idea.model';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(input: Post[], desiredRemain) {
    var output: Post[] = [];
    if (desiredRemain === 'lt1') {
      for(var i = 0; i < input.length; i++) {
        if((parseInt(input[i].fund) - input[i].current) < 1000) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredRemain === 'lt2') {
      for(var i = 0; i < input.length; i++) {
        if((parseInt(input[i].fund) - input[i].current) < 10000) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredRemain === 'lt3') {
      for(var i = 0; i < input.length; i++) {
        if((parseInt(input[i].fund) - input[i].current) < 100000) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
