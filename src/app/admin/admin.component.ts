import { Component, OnInit } from '@angular/core';
import { Idea } from 'app/idea.model';
import { Post } from 'app/post.model';
import { Router } from '@angular/router';
import { PostService } from 'app/post.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PostService, AngularFireDatabase]
})
export class AdminComponent implements OnInit {
  posts: FirebaseListObservable<any[]>;
  ideas: FirebaseListObservable<any[]>;
  editTitle = false;
  postInfo = false;
  commentField = false;
  filterByTime: string = 'all';
  desiredTime: string = 'all';
  userFilter: any = { title: '', manager: '' };
  constructor(private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.ideas = this.postService.getIdeas();
  }

  hideChange(option) {
    this.desiredTime = option;
  }

  onTime(option) {
    this.filterByTime = option;
  }

  deleteComment(comment) {
    if(confirm("Are you sure you want to delete this comment?")){
      this.postService.deleteComm(comment);
    }
  }
}
