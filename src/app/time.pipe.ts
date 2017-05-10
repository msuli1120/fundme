import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.model';

@Pipe({
  name: 'time',
  pure: false
})
export class TimePipe implements PipeTransform {

  transform(input: Post[], desiredTime) {
    var output: Post[] = [];
    var d = new Date();
    if(desiredTime === 'thisMonth') {
      var time = d.getMonth() + 1;
      for(var i = 0; i < input.length; i++) {
        if(input[i].time.charAt(0) === time.toString()) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredTime === 'lastMonth') {
      var lastMonth = d.getMonth();
      if(lastMonth === 0) {
        for(var i = 0; i < input.length; i++) {
          if(input[i].time.charAt(0) === '1') {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        for(var i = 0; i < input.length; i++) {
          if(input[i].time.charAt(0) === lastMonth.toString()) {
            output.push(input[i]);
          }
        }
        return output;
      }
    } else if (desiredTime === 'thisYear') {
      var year = d.getFullYear();
      var newYear = year.toString();
      for(var i = 0; i < input.length; i++) {
        var postTime = input[i].time.split(',');
        var compareTime = postTime[0];
        if((compareTime.charAt(compareTime.length - 1) === newYear.charAt(newYear.length - 1)) && (compareTime.charAt(compareTime.length - 2) === newYear.charAt(newYear.length - 2))) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
