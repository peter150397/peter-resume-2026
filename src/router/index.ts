import { nextTick } from 'vue'
import HomePage from '@/pages/HomePage.vue'
import PortfolioPage from '@/pages/portfolioPage.vue'
import PortfolioSinglePage from '@/pages/portfolioSinglePage.vue'
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: 'home',
            path: '',
            component: HomePage,
        },
        {
            name: 'portfolio',
            path: '/portfolio',
            component: PortfolioPage,
        },
        {
            name: 'portfolio-single',
            path: '/portfolio/:id',
            component: PortfolioSinglePage,
        },
    ],
});

router.afterEach((to) => {
    nextTick(() => {
        const smoother = ScrollSmoother.get();

        if(to.hash){
            setTimeout(() => {
                smoother?.scrollTo(to.hash, true, "top top");
            }, 100);
        } else {
            setTimeout(() => {
                smoother?.scrollTop(0);
            }, 100);
        }
    });
});

export default router
