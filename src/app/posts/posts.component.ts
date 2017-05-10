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
  showForm = false;
  results = true;
  userFilter: any = { title: '', manager: '' };
  filterByRemain = 'all';
  filterByTime = 'all';
  orderByTime = 'all';
  constructor(private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

  goToDetail(post) {
    this.router.navigate(['posts', post.$key]);
  }

  showCreateForm() {
    this.showForm = true;
    this.results = false;
  }

  createFund(name: string, title: string, description: string, amount: string) {
      if((name !== '') && (title !== '') && (description !== '') && (amount !== '')) {
        var d = new Date();
        var time = d.toLocaleString();
        var newPost: Post = new Post(title, description, name, amount, 0, time);
        this.postService.newPost(newPost);
        this.showForm = false;
        this.results = true;
      } else {
        confirm('Please fill out the blanks!');
      }
  }

  onRemain(option) {
    this.filterByRemain = option;
  }

  onTime(option) {
    this.filterByTime = option;
  }

  orderBy(option) {
    this.orderByTime = option;
  }

  width(post: Post) {
    var per = post.current / parseInt(post.fund) * 100;
    return per + '%';
  }

}
