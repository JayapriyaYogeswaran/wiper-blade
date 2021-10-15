import Home from './components/Home.vue'
import Summary from "./components/summary.vue";
export default [
    {
        path : '',
        component : Home,
        name : 'home'
    },

    {
        path : '/summary',
        component : Summary,
        name : 'summary',
    }
]
