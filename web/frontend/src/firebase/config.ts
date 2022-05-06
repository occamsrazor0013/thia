import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDJOaqbWCPHazZsu4uyXCcYl69bSzr-hdc',
	authDomain: 'thia-1458b.firebaseapp.com',
	projectId: 'thia-1458b',
	storageBucket: 'thia-1458b.appspot.com',
	messagingSenderId: '564483189530',
	appId: '1:564483189530:web:69f5a52e91138c68fd1aa3',
	measurementId: 'G-6412TVW5DY',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth, firebase };
