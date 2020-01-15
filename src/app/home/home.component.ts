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
        "external_urls" : {
          "spotify" : ""
        },
        "followers" : {
          "href" : null,
          "total" : 0
        },
        "href" : "",
        "id" : "",
        "images" : [ {
          "height" : null,
          "url" : "",
          "width" : null
        } ],
        "product" : "",
        "type" : "",
        "uri" : ""
      };

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {

      this.spotifyService.getUserInfo()
        .subscribe((res: any) => {

            this.userInfo = res;

           /*  {
              "country" : "CO",
              "display_name" : "Yeison Osorio",
              "email" : "yei_osorio@hotmail.com",
              "explicit_content" : {
                "filter_enabled" : false,
                "filter_locked" : false
              },
              "external_urls" : {
                "spotify" : "https://open.spotify.com/user/yeiosorio"
              },
              "followers" : {
                "href" : null,
                "total" : 5
              },
              "href" : "https://api.spotify.com/v1/users/yeiosorio",
              "id" : "yeiosorio",
              "images" : [ {
                "height" : null,
                "url" : "https://scontent.xx.fbcdn.net/v/t1.0-1/p320x320/37156183_1865641693456282_1599670074157826048_n.jpg?_nc_cat=110&_nc_ohc=3oCN5FTljswAX-7kZ_T&_nc_ht=scontent.xx&_nc_tp=1002&oh=6606097b9b500650204641cab7557004&oe=5E95932C",
                "width" : null
              } ],
              "product" : "open",
              "type" : "user",
              "uri" : "spotify:user:yeiosorio"
            } */
          
        }, err => {
          console.log(err);
        });
  }

}
