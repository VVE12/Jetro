import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AboutUs from '@/components/AboutUs'
import Blog from '@/components/Blog'
import Portfolio from '@/components/Portfolio'
import ContactUs from '@/components/ContactUs'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/aboutus',
            name: 'AboutUs',
            component: AboutUs
        },
        {
            path: '/blog',
            name: 'Blog',
            component: Blog
        },
        {
            path: '/portfolio',
            name: 'Portfolio',
            component: Portfolio
        },
        {
            path: '/contactus',
            name: 'ContactUs',
            component: ContactUs
        }
    ]
})