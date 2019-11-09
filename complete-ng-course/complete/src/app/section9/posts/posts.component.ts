import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post';

@Component({
  selector: 'app-s9-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  postUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<Post[]>(this.postUrl).subscribe(res => {
      this.posts = [];
      for (let i = 0; i < res.length; i++) {
        let post = new Post();
        Object.assign(post, res[i]);
        // let post = res[i] as Post;
        this.posts.push(post);
      }
    });
  }

  updatePost(title: HTMLInputElement, post: Post) {
    this.http.put<Post>(this.postUrl + '/' + post.id, JSON.stringify(post)).subscribe(res => {
      console.log(post);
      post.title = title.value;
    });
  }

  deletePostWithError(post: Post) {
    this.http.delete<Post>((post.id % 2 === 0) ? (this.postUrl + '/' + post.id ) : '345').subscribe(res => {
        console.log(post);
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }
    );
  }

  deletePost(post: Post) {
    this.http.delete<Post>((post.id % 2 === 0) ? (this.postUrl + '/' + post.id ) : '345').subscribe(res => {
        console.log(post);
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: Response) => {
        if (error.status === 404) {
          alert('this post has already been deleted');
        } else {
          alert('Unexpected Error');
          console.log(error);
        }
      }
    );
  }

  createPost(title: HTMLInputElement) {
    const post = new Post();
    post.title = title.value;
    this.http.post<Post>(this.postUrl, JSON.stringify(post)).subscribe(
      res => {
        post.id = res.id;
        this.posts.splice(0, 0, post);
      }
    );
  }
}
