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

		// Se captura token que fue obtenido de la autorización del usuario desde el endpoint [https://accounts.spotify.com/es/authorize] 
		const urlTree = this.router.parseUrl(this.router.url);

    // Si existe el callback en la url de la autorizacion del usuario lo obtenemos y redireccionamos al componente Home
		if (urlTree.fragment !== null) {
      localStorage.setItem('token', urlTree.fragment.split('&')[0].split('=')[1]);
      
      this.router.navigate(['home']);
		}

	}

	ngOnInit() {
	}

	/**
	 * @author Yeison osorio
	 * @desc Call the spotify service
	 **/
	public authorizeAccount() {

		this.spotifyService.authorizeAccount();
		
	}

}
