import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAwvgOKHe2laRZF2ZmcyxYlkBvIgSYYthY",
    authDomain: "wheres-bender.firebaseapp.com",
    projectId: "wheres-bender",
    storageBucket: "wheres-bender.appspot.com",
    messagingSenderId: "13481502084",
    appId: "1:13481502084:web:f1292ad8e1cb2acbec29d1",
    measurementId: "G-08E6LPL64J"
  };

const app = initializeApp(firebaseConfig)
const db = getFirestore();


export {app, db }