import {GithubFollowersService} from './../services/github-followers.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {combineLatest} from 'rxjs/observable/combineLatest';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];
  paramMap: any;
  queryParamMap: any;

  constructor(private route: ActivatedRoute, private service: GithubFollowersService, private http: HttpClient) {
  }

  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap,
      this.http.get('https://api.github.com/users/mosh-hamedani/followers')
    ])
      .switchMap(combined => {
        console.log('hey.....', combined);
        let username = combined[0].get('username');
        let page = combined[1].get('page');
        this.paramMap = combined[0];
        this.queryParamMap = combined[1];
        console.log(combined[2]);
        return this.service.getAll();
      })
      .subscribe(followers => this.followers = followers
      );


    /**
     * Natural but ugly way by using nested subscribe callback
     * We can use switchMap to avoid this.
     .subscribe(combined => {
      console.log('hey.....', combined);
      let username = combined[0].get('username');
      let page = combined[1].get('page');
      this.paramMap = combined[0];
      this.queryParamMap = combined[1];
      console.log(combined[2]);
      this.service.getAll().subscribe(followers => this.followers = followers
      )
    });
     */

  }
}
