import { Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

export const routes: Routes = [
   { 
    path: '',
    component: TabsPage,
    children: [
        {
            path: 'home',
            loadComponent: () => import('../home/home.page').then((m) => m.HomePage)
        },
        {
            path: 'photo',
            loadComponent: () => import('../photo/photo.page').then((m) => m.PhotoPage)
        },
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
        }
        ]
    },
];