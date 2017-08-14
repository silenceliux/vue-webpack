/**
 * Created by admin on 17-2-22.
 */
import Vue from 'vue'
import temp from '../components/a.vue'
import VueRouter from 'vue-router'
import router1 from '../components/router1.vue'
import router2 from '../components/router2.vue'
Vue.use(VueRouter)
new Vue({
    el: '#app',
    data: {
        message: 'Hello world!'
    },
    components: {temp}
});
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
];
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
    router
}).$mount('#routerDiv')
//new Vue({el: '#vue', components: {avue}});