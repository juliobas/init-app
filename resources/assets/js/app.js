import './bootstrap'

import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './components/App.vue';
import Dashboard from './pages/app/Dashboard.vue';
import Home from './pages/app/Home.vue';
import Register from './pages/auth/Register.vue';
import Login from './pages/auth/Login.vue';
import NotFound from './pages/app/NotFound.vue';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
axios.defaults.baseURL = 'http://localhost/api';

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    },{
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            auth: false
        }
    },{
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            auth: false
        }
    },{
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            auth: true
        }
    },{ 
        path: '*', 
        name: 'not-found', 
        component: NotFound 
    }]
});
Vue.router = router
Vue.use(require('@websanova/vue-auth'), {
   auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
   http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
   router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
});
App.router = Vue.router
new Vue(App).$mount('#app');
