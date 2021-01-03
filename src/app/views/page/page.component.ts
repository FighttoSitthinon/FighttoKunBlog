import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';

import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
  ) { }

  id: string;
  data: Post;
  loading = true;

  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  ngOnInit(): void {
    this.getPost()
  }
  getPost() {
    // get post in from url
    this.route.params.subscribe(value => {
      this.id = value.id;
      // get post from post id
      this.data = this.postService.getPost(this.id);
      if(!this.data) this.router.navigate(['/error']);
      console.log(this.data);
      this.loading = false;
    });
  }

}
