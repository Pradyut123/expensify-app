import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC0Kf_7rBdfPmVpK9H5hSwKwN74VXJk2LU",
    authDomain: "expensify-853f9.firebaseapp.com",
    databaseURL: "https://expensify-853f9.firebaseio.com",
    projectId: "expensify-853f9",
    storageBucket: "expensify-853f9.appspot.com",
    messagingSenderId: "804085567447",
    appId: "1:804085567447:web:a0ead5939553906a924592"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

export { firebase, database as default };