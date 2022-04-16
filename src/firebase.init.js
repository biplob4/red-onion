// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlNbmjVN-XVAxxqYqkMA-zH9SVULOjX9M",
  authDomain: "red-onion-bd4d4.firebaseapp.com",
  projectId: "red-onion-bd4d4",
  storageBucket: "red-onion-bd4d4.appspot.com",
  messagingSenderId: "1082170409598",
  appId: "1:1082170409598:web:c54efa3df1360324e1ce2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;