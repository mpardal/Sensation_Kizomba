// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Configuration de l'app web avec Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyA5vg6I5Vofxei2fV4Qq5JX1d5MF2T7yO4',
  authDomain: 'sensation-kizomba.firebaseapp.com',
  projectId: 'sensation-kizomba',
  storageBucket: 'sensation-kizomba.appspot.com',
  messagingSenderId: '548463677417',
  appId: '1:548463677417:web:3b44c75cf40b5529488578',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);
