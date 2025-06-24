import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonContent, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { camera } from 'ionicons/icons';
import { PhotoService } from '../services/photo.service';

@Component({
  standalone: true,
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
  imports: [
    CommonModule,
    IonContent,  
    IonFab, 
    IonFabButton, 
    IonIcon,
    IonicModule
  ]
})
export class PhotoPage {

  constructor(public photoService: PhotoService) {
    addIcons({camera});
   }


  addPhotoToGallery() {
    console.log("add to gallery beign hit");
    this.photoService.addNewToGallery();
  }
}
