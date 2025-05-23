import { Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },

    // Ejemplo de como usar Lazy Loading 
    {
        path: 'Raye',
        loadComponent:() => import('./shared/components/raye/raye.component').then(c => c.RayeComponent)
    }
];
 