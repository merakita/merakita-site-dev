import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBuXYfJDGQYc-UZ65r0Vs85C5lUYkYp994",
  authDomain: "merakita-1d90c.firebaseapp.com",
  projectId: "merakita-1d90c",
  storageBucket: "merakita-1d90c.appspot.com",
  messagingSenderId: "860626181929",
  appId: "1:860626181929:web:e606ae20a66fc90c082138"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db