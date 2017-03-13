/**
 * Created by admin on 17-2-22.
 */
import Vue from 'vue'
import avue from '../components/a.vue'
new Vue({
    el: '#app',
    data: {
        message: 'Hello world!'
    },
    components: {avue}
});
//new Vue({el: '#vue', components: {avue}});