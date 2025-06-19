import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Artist } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService {
  private http = inject(HttpClient);
  constructor() { }

  AuthRequest() {
    const client_id = environment.clientId;
    const client_secret = environment.clientSecret;

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
    };

    const body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');

    return this.http.post('https://accounts.spotify.com/api/token', body.toString(), { headers });
  }

  GetArtist(id: string){
    const token = environment.authToken;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`,
    });

    return this.http.get<Artist>(`https://api.spotify.com/v1/artists/${id}`, { headers });
  }

}
