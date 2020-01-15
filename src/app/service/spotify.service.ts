import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  URL_API: string;
  URL_PROFILE: string;
  token: string;

  constructor(public http: HttpClient) {
    this.token = localStorage.getItem('token')
    this.URL_API = 'https://accounts.spotify.com/es/authorize';
    this.URL_PROFILE = 'https://api.spotify.com/v1/me';
  }

  /**
   * @author Yeison osorio
   * @desc Call the spotify authorize service
   **/
  authorizeAccount() {
    const scope = 'streaming playlist-read-private user-read-email user-read-private';
    const pathUrl = `?response_type=token&client_id=a079c3fd3aa6471db5813440511a67b7&scope=${scope}`;
    const path = `${pathUrl}&redirect_uri=http://localhost:4200/login/callback&show_dialog=true`;

    window.location.href = this.URL_API + path

  }

  getPlayList() {

    let headers = new HttpHeaders({
        'Authorization': 'Bearer' + this.token,
        'Content-Type': 'application/json'
    });


  }

  getUserInfo(): Observable<any[]> {

      let headers = new HttpHeaders({
          'Authorization': 'Bearer' + this.token,
          'Content-Type': 'application/json'
      });

      return Observable.create((observer) => {
        this.http.get<any[]>(this.URL_PROFILE, {headers: headers} ).subscribe(
          (data) => {
            observer.next(data);
            observer.complete();
          },
          (error) => {
            observer.next(error);
            observer.complete();
          }
        );
      });

    
  }
}
   
