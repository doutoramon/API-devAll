import { Component, OnInit } from '@angular/core';
import { DevallService } from '../services/devall.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  posts = [];
  offset = 0;

  constructor(private devAllService: DevallService) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.devAllService.getPost().subscribe(res => {
      this.posts = Object.values(res)
      console.log(this.posts[0].id)
      console.log('resultado: ', this.posts);
    })
  }

  buscaPost(e) {
    let value = e.detail.value;

    if (value == '') {
      this.offset = 0;
      this.loadPosts();
      return
    }
    this.devAllService.pegarPost(value).subscribe(res => {
    this.posts = Object.values(res)
    })
  }

  postCliqueId(id) {
    console.log(id)
    this.devAllService.postClique(id);
  }
}


