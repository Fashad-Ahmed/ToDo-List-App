import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyB7sPrNJjMJerah6T-ovwB59ijTzxrKMEU",
    authDomain: "todo-list-app-js.firebaseapp.com",
    databaseURL: "https://todo-list-app-js.firebaseio.com",
    projectId: "todo-list-app-js",
    storageBucket: "todo-list-app-js.appspot.com",
    messagingSenderId: "424549695147",
    appId: "1:424549695147:web:424f36a7c7e2e19b9581ee",
    measurementId: "G-5PPEJ7CK36"
};

export default firebase.initializeApp(firebaseConfig);