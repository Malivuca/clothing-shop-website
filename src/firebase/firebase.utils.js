import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAPryOo5xd4iiCiiMnhYdHEfBgdjhjJPCE",
    authDomain: "crown-clothing-64fd8.firebaseapp.com",
    databaseURL: "https://crown-clothing-64fd8.firebaseio.com",
    projectId: "crown-clothing-64fd8",
    storageBucket: "crown-clothing-64fd8.appspot.com",
    messagingSenderId: "1051567579158",
    appId: "1:1051567579158:web:b24616ce1266a5cd265537",
    measurementId: "G-5KGWXLJLE3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' }); // Google pop-up for sign-in

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;