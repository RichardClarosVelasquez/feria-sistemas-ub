import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GroupPageComponent } from './components/group-page/group-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: '',
    component: GroupPageComponent,
    children: [
      { path: 'grupo-1', loadComponent: () => import('./components/grupo-1/grupo-1.component').then(m => m.Grupo1Component) },
      { path: 'grupo-2', loadComponent: () => import('./components/grupo-2/grupo-2.component').then(m => m.Grupo2Component) },
      { path: 'grupo-3', loadComponent: () => import('./components/grupo-3/grupo-3.component').then(m => m.Grupo3Component) },
      { path: 'grupo-4', loadComponent: () => import('./components/grupo-4/grupo-4.component').then(m => m.Grupo4Component) },
      { path: 'grupo-5', loadComponent: () => import('./components/grupo-5/grupo-5.component').then(m => m.Grupo5Component) },
      { path: 'grupo-6', loadComponent: () => import('./components/grupo-6/grupo-6.component').then(m => m.Grupo6Component) },
      { path: 'grupo-7', loadComponent: () => import('./components/grupo-7/grupo-7.component').then(m => m.Grupo7Component) },
      { path: 'grupo-8', loadComponent: () => import('./components/grupo-8/grupo-8.component').then(m => m.Grupo8Component) },
    ],
  },
  { path: '**', redirectTo: '' },
];
