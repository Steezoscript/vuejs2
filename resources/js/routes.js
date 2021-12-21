import App from './components/AppComponent.vue'
import Login from './components/LoginComponent.vue'
import Register from './components/RegisterComponent.vue'
import BlogPage from './components/BlogPageComponent.vue'

export const routes = [
    {
		path: '/',
        component: App
    },
	{
		path: '/home',
        component: App
    },
    {
		path:'/login',
        component: Login
    },
	{
		path:'/register',
        component: Register
    },
    {
        path:'/blogpost/',
        component: BlogPage
    }
];