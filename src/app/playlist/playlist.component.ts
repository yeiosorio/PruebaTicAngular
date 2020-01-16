import { Component, OnInit } from '@angular/core';

import { SpotifyService } from 'src/app/service/spotify.service';
import { ActivatedRoute, Router  } from '@angular/router';
import {MatTableDataSource} from '@angular/material';

export interface tracks {
  track: {
    name: "",
    duration_ms: 0,
    album: {
      name: ""
    },
    artists: [{
        name: "",
      }
    ],
  },
}

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})

export class PlaylistComponent implements OnInit {
  tracks: any;

  displayedColumns: string[] = ['Track', 'Album', 'Artist', 'Duration', 'Play'];
  
  dataSource: MatTableDataSource<tracks>;
  
  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    const playListId = this.route.snapshot.paramMap.get('playlistId');
    
    this.getPlayListTracks(playListId);
  }


  /**
   * @author Yeison osorio
   * @desc Se obtienen lista de canciones
   * @param [playListId]
   *  */
  getPlayListTracks(playListId){
    this.spotifyService.getTracks(playListId)
    .subscribe((res: any) => {

        if (res) {
          this.dataSource = new MatTableDataSource(res.items);
          this.tracks = res;
        }
      
    }, err => {
      console.log(err);
    });

  }

  addZ(n) {
    return (n<10? '0':'') + n;
  }

  // Convert ms to minutes
  convertToMinutes(s){

    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    return this.addZ(hrs) + ':' + this.addZ(mins) + ':' + this.addZ(secs)+ '.' + this.addZ(ms);

  }

}
