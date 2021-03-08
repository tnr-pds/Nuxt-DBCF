import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyCVZVa76lYHxZfPL2U5qJx8HWXIOFRZ6LQ",
        authDomain: "pd-s-db.firebaseapp.com",
        projectId: "pd-s-db",
        storageBucket: "pd-s-db.appspot.com",
        messagingSenderId: "860865617225",
        appId: "1:860865617225:web:1538ebfb6d7d0995a34e98",
        measurementId: "G-7BRWW2VEVV"
        }
    firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
export const auth = firebase.auth()