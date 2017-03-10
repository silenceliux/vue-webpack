/**
 * Created by admin on 17-2-22.
 */
var Vue = require("vue");
var Game = require("/src/app.vue");
//import Vue from 'vue';
//import Game from './app.vue';
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello world!'
    }
});
new Vue({el: '#application', components: {Game}});