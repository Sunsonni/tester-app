import { Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';


export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
       {
      path: 'home',
      loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'photo',
        loadComponent: () => import('./photo/photo.page').then((m) => m.PhotoPage),
      },
      // {
      //   path: '',
      //   redirectTo: '/tabs/home',
      //   pathMatch: 'full',
      // },
    ], 
  },
    {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
