/**
 * Created by admin on 17-2-22.
 */
import Vue from 'vue'
import Game from '../components/a.vue'
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello world!'
    }
});
new Vue({el: '#game', components: {Game}});