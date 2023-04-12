import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyB7U9EuxcXWwvj-P_MdPhirNl1GQujcu0o",
  authDomain: "souvientstudio.firebaseapp.com",
  projectId: "souvientstudio",
  storageBucket: "souvientstudio.appspot.com",
  messagingSenderId: "96864652870",
  appId: "1:96864652870:web:160a914ca8cde8001a4447"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }