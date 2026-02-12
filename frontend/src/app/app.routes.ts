import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Legals } from './pages/legals/legals';
import { Privacy } from './pages/privacy/privacy';
import { Develop } from './pages/develop/develop';
import { Liffre } from './pages/liffre/liffre'

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
    },

    {
        path: 'privacy',
        component: Privacy
    },

    {
        path: 'develop',
        component: Develop
    },

    {
        path: 'liffre',
        component: Liffre
    }
];
