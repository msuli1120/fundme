import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [PostService]
})
export class EditComponent implements OnInit {
  @Input() selectPost;
  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  updateNewPost(post) {
    this.postService.updatePost(post);
  }

}
