import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post.model';
import { Idea } from '../idea.model';
import { PostService } from '../post.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [PostService]
})
export class DetailComponent implements OnInit {
  postId: string;
  postToDisplay;
  donateForm = false;
  warningShow = false;
  successShow = false;
  ideas: FirebaseListObservable<any[]>;
  constructor(private route: ActivatedRoute, private location: Location, private postService: PostService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = urlParameters['id'];
    });
    this.postToDisplay = this.postService.getPostById(this.postId);
    this.ideas = this.postService.getIdeas();
  }

  leaveAComment(id: string, name: string, comment: string) {
    var d = new Date();
    var time = d.toLocaleString();
    var newIdea: Idea = new Idea(name, comment, time, id);
    this.postService.addIdea(newIdea);
  }

  showForm() {
    this.donateForm = true;
  }

  donate(id: string, amount: string, current: string, left: string) {
    if(parseInt(left) > parseInt(amount)) {
      this.donateForm = false;
      this.warningShow = false;
      this.postService.donate(id, amount, current);
      this.successShow = true;
    } else if(parseInt(left) < parseInt(amount)) {
      this.warningShow = true;
    }
  }
}
