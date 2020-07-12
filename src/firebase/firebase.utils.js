import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyD_1nQ0qReSpK1z3OPsmVR191D-Ve7SIvU",
    authDomain: "crown-db-73c09.firebaseapp.com",
    databaseURL: "https://crown-db-73c09.firebaseio.com",
    projectId: "crown-db-73c09",
    storageBucket: "crown-db-73c09.appspot.com",
    messagingSenderId: "637569283506",
    appId: "1:637569283506:web:7f191d0e34392aee1520ab",
    measurementId: "G-STY0TSJ33Q"
}



firebase.initializeApp(config)


export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase


