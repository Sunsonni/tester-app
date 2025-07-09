import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Artist, RootObject } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService {
  private http = inject(HttpClient);
  public token = '';
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

    return this.http.post<{ access_token: string }>('https://accounts.spotify.com/api/token', body.toString(), { headers });
  }

  GetArtist(id: string, token: string){
    const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
    });

  return this.http.get<Artist>(`https://api.spotify.com/v1/artists/${id}`, { headers }).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        return this.AuthRequest().pipe(
          switchMap((newToken) => {
            this.token = newToken.access_token; 
            const newHeaders = new HttpHeaders({
              'Authorization': `Bearer ${this.token}`
            });
            return this.http.get<Artist>(`https://api.spotify.com/v1/artists/${id}`, { headers: newHeaders });
          })
        );
      }
      return throwError(() => error);
    })
  );
  }


  GetAlbumsByArtistId (id: string, token: string) {
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

    return this.http.get<RootObject>(`https://api.spotify.com/v1/artists/${id}/albums`, { headers }).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        return this.AuthRequest().pipe(
          switchMap((newToken) => {
            this.token = newToken.access_token; 
            const newHeaders = new HttpHeaders({
              'Authorization': `Bearer ${this.token}`
            });
            return this.http.get<RootObject>(`https://api.spotify.com/v1/artists/${id}/albums`, { headers: newHeaders });
          })
        );
      }
      return throwError(() => error);
    })
  );
  }

  GetRelatedArtists(id: string, token: string) {
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

    return this.http.get(`https://api.spotify.com/v1/artists/${id}/related-artists`, { headers }).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        return this.AuthRequest().pipe(
          switchMap((newToken) => {
            this.token = newToken.access_token; 
            const newHeaders = new HttpHeaders({
              'Authorization': `Bearer ${this.token}`
            });
            return this.http.get<RootObject>(`https://api.spotify.com/v1/artists/${id}/related-artists`, { headers: newHeaders });
          })
        );
      }
      return throwError(() => error);
    })
  );
  }

  Search(searchTerm: string, token: string) {
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

    return this.http.get(`https://api.spotify.com/v1/search`, { headers }).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        return this.AuthRequest().pipe(
          switchMap((newToken) => {
            this.token = newToken.access_token; 
            const newHeaders = new HttpHeaders({
              'Authorization': `Bearer ${this.token}`
            });
            return this.http.get<RootObject>(`https://api.spotify.com/v1/search`, { headers: newHeaders });
          })
        );
      }
      return throwError(() => error);
    })
  );
  }
}
