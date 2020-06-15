import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login";
import Main from "../components/Main";


Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:"/",
            name:"login",
            component:Login
        }, {
            path:"/Main",
            name: 'main',
            component:Main,
            // meta: {
            //     requireAuth: true,
            //     keepAlive: true
            // }
        }
    ]

})
export default router;


