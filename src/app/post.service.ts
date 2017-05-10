import { Injectable } from '@angular/core';
import { Idea } from './idea.model';
import { Post } from './post.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>;
  ideas: FirebaseListObservable<any[]>;
  filterBySearch: string;
  constructor(private database: AngularFireDatabase) {
    this.posts = database.list('posts');
    this.ideas = database.list('ideas');
  }

  getPosts() {
    return this.posts;
  }

  getIdeas() {
    return this.ideas;
  }

  getPostById(id: string) {
    return this.database.object('posts/' + id);
  }

  getIdeaById(id: string) {
    return this.database.object('ideas/' + id);
  }

  addIdea(idea: Idea) {
    this.ideas.push(idea);
  }

  donate(id: string, amount: string, current: string) {
    var post = this.getPostById(id);
    post.update({
      current: parseInt(amount) + parseInt(current)
    });
  }

  newPost(post: Post) {
    this.posts.push(post);
  }

  updatePost(post) {
    var postEntryInFirebase = this.getPostById(post.$key);
    postEntryInFirebase.update({
      title: post.title,
      description: post.description,
      fund: post.fund
    });
  }

  deleteComm(comment) {
    var ideaEntryFirebase = this.getIdeaById(comment.$key);
    ideaEntryFirebase.remove();
  }

}
