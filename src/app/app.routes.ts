import { Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { RayeComponent } from './shared/components/raye/raye.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'Raye',
        loadComponent:() => import('./shared/components/raye/raye.component').then(c => c.RayeComponent)
    }
];
