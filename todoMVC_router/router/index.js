import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home.vue'

Vue.use(VueRouter)

/**解决点击同一个地址出现错误的情况 */
let originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location) {
    originPush.call(this, location).catch(() => {});
}
const routes = [{
        path: '/',
        name: 'all',
        component: () =>
            import ('../components/TodoMain')
    },
    {
        path: '/active',
        name: 'active',
        component: () =>
            import ('../components/TodoMain')
    },
    {
        path: '/completed',
        name: 'completed',
        component: () =>
            import ('../components/TodoMain')
    }
]

const router = new VueRouter({
    routes
})

export default router