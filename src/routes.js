import Home from './components/Home.vue';
import About from './components/About.vue';
import Info from './components/Info.vue';

export const routes = [
    {path: '', component: Home},
    {path: '/about-url', component: About},
    {path: '/info-url', component: Info},
]