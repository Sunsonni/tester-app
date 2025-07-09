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
            path: 'search',
            loadComponent: () => import('../search/search.page').then((m) => m.SearchPage)
        },
        {
            path: '',
            redirectTo: 'artist',
            pathMatch: 'full'
        }
        ]
    },
];