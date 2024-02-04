const firebase = require('firebase/app');

const firebaseConfig = {
  apiKey: 'AIzaSyBp3vo0fT6pwZppnEOTMO2_dUW2W9hexFs',
  authDomain: 'loc-project-55aa3.firebaseapp.com',
  databaseURL:
    'https://loc-project-55aa3-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'loc-project-55aa3',
  storageBucket: 'loc-project-55aa3.appspot.com',
  messagingSenderId: '353285370731',
  appId: '1:353285370731:web:553d891e607ddec601d22e',
  measurementId: 'G-2QE425M573',
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const User = db.collection('users');
module.exports = User;
