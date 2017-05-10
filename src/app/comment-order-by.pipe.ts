import { Pipe, PipeTransform } from '@angular/core';
import { Idea } from './idea.model';

@Pipe({
  name: 'commentOrderBy',
  pure: false
})
export class CommentOrderByPipe implements PipeTransform {

  transform(ideas: Idea[], desired) {
    var output: Idea[] = [];
    var array = [];
    if (desired === 'time') {
      for(var i = 0; i < ideas.length; i++) {
        array.push(ideas[i].time);
      }
      array.reverse();
      for (var j = 0; j < array.length; j++) {
        for (var z = 0; z < ideas.length; z++) {
          if (ideas[z].time === array[j]) {
            output.push(ideas[z]);
          }
        }
      }
      return output;
    } else {
      return ideas;
    }
  }
}
