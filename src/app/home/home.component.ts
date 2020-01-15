import { Component, OnInit } from '@angular/core';

import { SpotifyService } from 'src/app/service/spotify.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userInfo: any =  {
        "country" : "",
        "display_name" : "",
        "email" : "",
        "followers" : {
          "href" : null,
          "total" : 0
        },
        "id" : "",
        "images" : [ {
          "url" : "",
        } ],
      };

      playList: any = {

      }

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
      this.getUserInfo()
      this.getPlayList()

  }

  getUserInfo(){
    this.spotifyService.getUserInfo()
        .subscribe((res: any) => {

            this.userInfo = res;

          
        }, err => {
          console.log(err);
        });
  }

  getPlayList(){
    this.spotifyService.getPlayList()
    .subscribe((res: any) => {

        this.playList = res;

      
    }, err => {
      console.log(err);
    });

  }

}
