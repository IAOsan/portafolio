import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase
const app = initializeApp({
	apiKey: 'AIzaSyBAiNp52CXMmUbML-RP5P-1tHI_yb14kJk',
	authDomain: 'portfolio-ca022.firebaseapp.com',
	projectId: 'portfolio-ca022',
	storageBucket: 'portfolio-ca022.appspot.com',
	messagingSenderId: '68100171968',
	appId: '1:68100171968:web:212b8c2892247d378ee525',
	measurementId: 'G-TBZGMGRTLG',
});
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
