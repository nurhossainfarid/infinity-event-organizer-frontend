// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbKrIfzBXIrSil0_CgjLb2aFe6kbHJ8_s",
  authDomain: "infinity-event-organizer-4747.firebaseapp.com",
  projectId: "infinity-event-organizer-4747",
  storageBucket: "infinity-event-organizer-4747.appspot.com",
  messagingSenderId: "695981506601",
  appId: "1:695981506601:web:3b1487422381dab0b31c38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
const auth = getAuth(app);

export default auth;