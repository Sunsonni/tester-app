import { DecimalPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';
import { Component, inject } from '@angular/core';
import {
  IonAccordion,
  IonAccordionGroup,
  IonCard,
  IonCardTitle,
  IonChip,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonSkeletonText,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { catchError, throwError } from 'rxjs';
import { Artist, Image, Item } from '../interfaces/interface';
import { SpotifyApiService } from '../services/spotify-api.service';

@Component({
  selector: 'artist',
  templateUrl: 'artist.page.html',
  styleUrls: ['artist.page.scss'],
  imports: [
    IonAccordionGroup,
    IonAccordion,
    IonSkeletonText,
    IonLabel,
    IonItem,
    IonText,
    IonCardTitle,
    IonCard,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonChip,
    DecimalPipe
  ],
})
export class ArtistPage {
  public artist?: Artist;
  private spotifyService = inject(SpotifyApiService);
  public showPunchline = false;
  public images: Image[] = [];
  public token = 'null';
  public Items?: Item[];

  constructor() {
    this.getAuthToken();
    this.loadArtistById('6v6qfXRvTRGGsmGfDvtMIK');
    this.getArtistAlbums('6v6qfXRvTRGGsmGfDvtMIK');
    this.getRelatedArtists('6v6qfXRvTRGGsmGfDvtMIK');
  }


  handleClick(){
    this.showPunchline = !this.showPunchline;
  }

  getAuthToken(){
      this.spotifyService.AuthRequest().subscribe((res: any) => {
        this.token = res.access_token;
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

  getArtistAlbums(id: string) {
    this.spotifyService.GetAlbumsByArtistId(id, this.token)
      .pipe(
         catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
        })
      )
      .subscribe((res) => {
        this.Items = res.items;
      }
      )
    }

    getRelatedArtists(id: string) {
      this.spotifyService.GetRelatedArtists(id, this.token)
      .pipe(
         catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
        })
      )
      .subscribe((res) => {
        console.log(res, 'related artists');
      }
      )
    }







}
