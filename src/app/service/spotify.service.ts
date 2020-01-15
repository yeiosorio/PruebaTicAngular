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
  headers: any;
  
  constructor(public http: HttpClient) {
    this.token = localStorage.getItem('token')

    this.headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token,
      'Content-Type': 'application/json'
   });
  
    this.URL_API = 'https://accounts.spotify.com/es/authorize';
    
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

  /**
   * @author Yeison osorio
   * @desc Call the spotify authorize service
   **/
  getUserInfo(): Observable<any[]> {

    return Observable.create((observer) => {
      this.http.get<any[]>('https://api.spotify.com/v1/me', {headers: this.headers} ).subscribe(
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

  /**
   * @author Yeison osorio
   * @desc Call the spotify authorize service
   **/
  getPlayList(user_id: string) {

    return Observable.create((observer) => {
      this.http.get<any[]>(`https://api.spotify.com/v1/${user_id}`, {headers: this.headers} ).subscribe(
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

    
  /**
   * @author Yeison osorio
   * @desc Call the spotify authorize service
   **/
    getTracks(user_id: string): Observable<any[]> {

      return Observable.create((observer) => {
        this.http.get<any[]>(`https://api.spotify.com/v1/${user_id}`, {headers: this.headers} ).subscribe(
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

  /**
   * @author Yeison osorio
   * @desc Call the spotify authorize service
   **/
    playTrack(user_id: string): Observable<any[]> {

      return Observable.create((observer) => {
        this.http.get<any[]>('`https://api.spotify.com/v1/${user_id}`', {headers: this.headers} ).subscribe(
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
   
