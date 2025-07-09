import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonContent, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { search } from 'ionicons/icons';
import { PhotoService } from '../services/photo.service';

@Component({
  standalone: true,
  selector: 'app-photo',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  imports: [
    CommonModule,
    IonContent,  
    IonFab, 
    IonFabButton, 
    IonIcon,
  ]
})
export class SearchPage {

  constructor(public photoService: PhotoService) {
    addIcons({search});
   }


  addPhotoToGallery() {
    console.log("add to gallery beign hit");
    this.photoService.addNewToGallery();
  }
}
