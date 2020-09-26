// polyfill
//import 'babel-polyfill';

import Vue from 'vue/dist/vue.js';
import App from './App';
//import ea from 'easyannotation/dist/easyannotation.js'
//var easyannotation = require('easyannotation/dist/easyannotation.es.js');
//import ea from 'easyannotation/dist/easyannotation.es.js'
//import easyannotation from 'easyannotation'
import EasyAnnotation from 'vue-easy-annotation'

Vue.use(EasyAnnotation);

Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    components: { App }
});