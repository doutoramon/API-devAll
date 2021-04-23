import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DevallService {
  baseUrl = 'https://api.devall.com.br/api/v1';

  constructor(private http: HttpClient) {

  }

  getPost() {
    return this.http.get(`${this.baseUrl}/post`)
  }

  pegarPost(value) {
    return this.http.get(`${this.baseUrl}/post?search=${value}`)
  }

  postClique(id) {
    console.log(id)
    this.http.get(`${this.baseUrl}/post/clique/${id}`).subscribe(res => {
      var clickedPost = Object.values(res)
      window.open(clickedPost[11]);
    })




  }
}
