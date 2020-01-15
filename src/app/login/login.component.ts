import { Component, OnInit } from '@angular/core';
// Servicio rest para interaccion general con api de spotify
import { SpotifyService } from 'src/app/service/spotify.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  URL_API: string;
  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute, private router : Router) {
    // const token = this.route.snapshot.paramMap.get('token');

    // Se captura token que fue obtenido de la autorización del usuario desde el endpoint [https://accounts.spotify.com/es/authorize] 
    console.log(this.router.url);
  }

  ngOnInit() {

    

    this.URL_API = 'https://accounts.spotify.com/es/authorize';
  }

  /**
   * @author Yeison osorio
   * @desc Call the spotify service
   **/
  public authorizeAccount() {

    this.spotifyService.authorizeAccount();
    
  }

}
