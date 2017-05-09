import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.model';
import { Idea } from './idea.model';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(input: Post[], search) {

  }

}
