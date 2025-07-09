import { Routes } from "@angular/router";

export const routes: Routes = [
  // {
  //   path: 'detail/:vendorId/:ticketNumber',
  //   loadComponent: () =>
  //     // import('../inbound/detail/detail.page').then((m) => m.DetailPage),
  // },
  {
    path: '',
    loadComponent: () =>
      import('./artist.page').then((m) => m.ArtistPage),
  },
];

