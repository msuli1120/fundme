import { Component, OnInit } from '@angular/core';
import { Idea } from 'app/idea.model';
import { Post } from 'app/post.model';
import { Router } from '@angular/router';
import { PostService } from 'app/post.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostService, AngularFireDatabase]
})
export class PostsComponent implements OnInit {
  posts: FirebaseListObservable<any[]>;

  constructor(private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

  goToDetail(post) {
    this.router.navigate(['posts', post.$key]);
  }

}