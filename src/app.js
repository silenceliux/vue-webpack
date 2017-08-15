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
const router = new VueRouter({
    routes: [
        { path: '/', component: router1 },
        { path: '/bar', component:  router2 }
    ]
});
 new Vue({
    router
}).$mount('#routerDiv');

var msg = "hello 1";
var apps = new Vue({
    el: '#apps',
    data: {
        message: msg
    }
});
setTimeout(function(){
    apps.message = "hello 2";
},1000)
