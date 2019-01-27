import firebase from 'firebase'
import Vue from 'vue'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

var VueCookie = require('vue-cookie');
Vue.use(VueCookie);

let app = '';

firebase.initializeApp({
  apiKey: "AIzaSyBiN9vig79n6yoRkE9tco6p-ftgZUtYzJA",
  authDomain: "test-simplify.firebaseapp.com",
  databaseURL: "https://test-simplify.firebaseio.com",
  projectId: "test-simplify",
  storageBucket: "test-simplify.appspot.com",
  messagingSenderId: "121096393913"
});

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
})
