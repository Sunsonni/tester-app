import { Component, inject } from '@angular/core';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonText, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Artist, Image } from '../interfaces/interface';
import { SpotifyApiService } from '../services/spotify-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCardSubtitle, IonCardContent, IonLabel, IonItem, IonIcon, IonText, IonCardHeader, IonCardTitle, IonCard, IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  public artist?: Artist;
  private spotifyService = inject(SpotifyApiService);
  public showPunchline = false;
  public images: Image[] = [];
  public token = '';
  constructor() {
    // this.getAuthToken();
    this.loadArtistById('6v6qfXRvTRGGsmGfDvtMIK');
  }


  handleClick(){
    this.showPunchline = !this.showPunchline;
  }

  getAuthToken(){
    this.spotifyService.AuthRequest().subscribe((res) => {
      console.log(res);
    });
  }

  loadArtistById(id: string){
    this.spotifyService.GetArtist(id).subscribe((res) => {
      console.log(res);
      this.artist = res;
      this.images = res.images;
    }
    );
  }



}
