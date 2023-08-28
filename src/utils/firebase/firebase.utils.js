import { initializeApp } from 'firebase/app';
import { getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider, } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBohuFsHYYfSBsLOe79GmAutpNKfyEWuZs",
  authDomain: "clothe-store-project.firebaseapp.com",
  projectId: "clothe-store-project",
  storageBucket: "clothe-store-project.appspot.com",
  messagingSenderId: "896291902292",
  appId: "1:896291902292:web:16c3e054f1c4a043c42ec1"
};



// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt:'select_account' // to show google account chooser dialog box
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
