import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = { apiKey: "AIzaSyAPryOo5xd4iiCiiMnhYdHEfBgdjhjJPCE",
authDomain: "crown-clothing-64fd8.firebaseapp.com", databaseURL:
"https://crown-clothing-64fd8.firebaseio.com", projectId:
"crown-clothing-64fd8", storageBucket: "crown-clothing-64fd8.appspot.com",
messagingSenderId: "1051567579158", appId:
"1:1051567579158:web:b24616ce1266a5cd265537", measurementId: "G-5KGWXLJLE3" };

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) {
		return;
	}

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	const emailname = await additionalData;

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;

		const createdAt = new Date();

		try {
			await userRef.set({
				email,
				createdAt,
				displayName: `${additionalData ? emailname.displayName : displayName}`
		})
		} catch (error) {
			console.log("Error creating user.", error.message)
		}
	}

	return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' }); // Google pop-up for sign-in

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;