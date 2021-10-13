import firebase from 'firebase'

const firebaseConfig = {
	apiKey: 'AIzaSyBKFHvbiVdftmAy-1yLTLT9qQhfT0lItfo',
	authDomain: 'portfolio-website-4a289.firebaseapp.com',
	projectId: 'portfolio-website-4a289',
	storageBucket: 'portfolio-website-4a289.appspot.com',
	messagingSenderId: '674456502834',
	appId: '1:674456502834:web:339ba1e3ba6b63b806b22b',
	measurementId: 'G-0N7S01TZK7'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db
