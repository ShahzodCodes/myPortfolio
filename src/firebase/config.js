import firebase from 'firebase'
// firebase
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

// import { firebase } from 'firebase'
// import '@firebase/firestore'

// // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
// 	apiKey: 'AIzaSyBKFHvbiVdftmAy-1yLTLT9qQhfT0lItfo',
// 	authDomain: 'portfolio-website-4a289.firebaseapp.com',
// 	projectId: 'portfolio-website-4a289',
// 	storageBucket: 'portfolio-website-4a289.appspot.com',
// 	messagingSenderId: '674456502834',
// 	appId: '1:674456502834:web:339ba1e3ba6b63b806b22b',
// 	measurementId: 'G-0N7S01TZK7'
// }

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig)
// // const analytics = getAnalytics(app);

// const db = app.firestore()

// export default db
