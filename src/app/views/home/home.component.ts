import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import {  PostItem } from '../../models/post';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private postService: PostService) { }

  posts: PostItem[];
  mainPost : PostItem;
  
  ngOnInit(): void {
    this.posts = this.postService.getPostList();
    this.mainPost = this.posts[0];
  }

}
