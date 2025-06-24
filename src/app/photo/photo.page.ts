import { Component } from '@angular/core';
import { IonContent, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
  imports: [
    IonContent,  
    IonFab, 
    IonFabButton, 
    IonIcon 
  ]
})
export class PhotoPage {

  constructor(public photoService: PhotoService) { }


  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
