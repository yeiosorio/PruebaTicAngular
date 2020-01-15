import { Component, OnInit } from '@angular/core';

import { SpotifyService } from 'src/app/service/spotify.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userInfo: any[] = [];

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {

      this.spotifyService.getUserInfo().subscribe((res: any) => {

        this.userInfo = res;
          console.log(res);
          
      }, err => {
        console.log(err);
      });
  }

}
