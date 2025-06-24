import { Component } from '@angular/core';
import {
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { playCircle, radio } from 'ionicons/icons';

@Component({
  standalone: true,
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonRouterOutlet, IonIcon, IonTabBar, IonTabButton, IonTabs],
})
export class TabsPage {
  constructor() {
    addIcons({ playCircle, radio });
  }

}