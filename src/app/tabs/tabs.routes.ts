import { Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

export const routes: Routes = [
   { 
    path: '',
    component: TabsPage,
    children: [
        {
            path: 'artist',
            loadComponent: () => import('../artist/artist.page').then((m) => m.ArtistPage)
        },
        {
            path: 'photo',
            loadComponent: () => import('../photo/photo.page').then((m) => m.PhotoPage)
        },
        {
            path: '',
            redirectTo: 'artist',
            pathMatch: 'full'
        }
        ]
    },
];