import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from "./config";

const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);

export const store = getFirestore(firebase);

export const handleCurrentUser = () => {
    return new Promise ((resolve, reject) => {
        onAuthStateChanged(auth, (fbUser) => {
            resolve(fbUser);
        })
        reject('No User!')
    })
}

export default firebase;
