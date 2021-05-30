import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "pharmacy-d6cfd.firebaseapp.com",
    projectId: "pharmacy-d6cfd",
    storageBucket: "pharmacy-d6cfd.appspot.com",
    messagingSenderId: "96037787499",
    appId: "1:96037787499:web:f34b347e8eb368bb2b5e2e"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export const handleUserProfile = async (userAuth , additionalData) => {
    const { uid } = userAuth
    const userRef = firestore.doc(`users/${uid}`)
    const snapshot = await userRef.get()
    if(!snapshot.exists){
        const { displayName, email} = userAuth
        const date = new Date()
        const userRoles = (email === (process.env.REACT_APP_ADMIN_ONE || process.env.REACT_APP_ADMIN_TWO))? ['user', 'admin'] : ['user']
        userRef.set({
            displayName,
            email,
            createdDate: date,
            userRoles,
            ...additionalData
        })
    }
    return userRef
}



