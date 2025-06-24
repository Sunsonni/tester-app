import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';
import { Component, inject } from '@angular/core';
import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonSkeletonText, IonText, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { catchError, throwError } from 'rxjs';
import { Artist, Image } from '../interfaces/interface';
import { SpotifyApiService } from '../services/spotify-api.service';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton, IonSkeletonText, IonCardSubtitle, IonText, IonCardHeader, IonCardTitle, IonCard, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  public artist?: Artist;
  private spotifyService = inject(SpotifyApiService);
  public showPunchline = false;
  public images: Image[] = [];
  public token = 'null';
  constructor() {
    this.getAuthToken();
    if(this.token !== '') {
      this.loadArtistById('6v6qfXRvTRGGsmGfDvtMIK');
    }
  }

  handleClick(){
    console.log("testing buttons");
  }

  getAuthToken(){
      this.spotifyService.AuthRequest().subscribe((res: any) => {
        this.token = res.access_token;
        console.log(res);
        console.log(this.token);
      });
    }

  loadArtistById(id: string){
    this.spotifyService.GetArtist(id, this.token)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
        })
      )
      .subscribe((res) => {
          this.artist = res;
          this.images = res.images;
      }
      );

  }





}
