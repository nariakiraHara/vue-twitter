import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase'
require("firebase/firestore")

Vue.use(VueFire)

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBO--5PVeh24KaosKxB9Y0CnqhoQb-Edig",
  authDomain: "vue-twitter-97c8f.firebaseapp.com",
  databaseURL: "https://vue-twitter-97c8f.firebaseio.com",
  projectId: "vue-twitter-97c8f",
  storageBucket: "",
  messagingSenderId: "946721960914"
}
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp