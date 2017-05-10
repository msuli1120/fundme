import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.model';

@Pipe({
  name: 'orderby',
  pure: false
})
export class OrderbyPipe implements PipeTransform {

  transform(input: Post[], desiredTime) {
    var output: Post[]=[];
    var timeArray = [];
    if(desiredTime === 'time') {
      for(var i = 0; i < input.length; i++) {
        timeArray.push(input[i].time);
      }
      timeArray.reverse();
      for(var j = 0; j < timeArray.length; j++) {
        for(var z = 0; z < input.length; z++) {
          if(input[z].time === timeArray[j]) {
            output.push(input[z]);
          }
        }
      }
      return output
    } else {
      return input;
    }
  }
}
