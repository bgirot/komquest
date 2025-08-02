import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Legals } from './pages/legals/legals';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },

    {
        path: 'about',
        component: About
    },

    {
        path: 'legals',
        component: Legals
    }
];
