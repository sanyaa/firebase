// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


//Social Authentication
//===================================================
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD94TSCfC8B3GZ4rqNRNB1Xnea-Ag_sPPU",
    authDomain: "solentstudentdeals.firebaseapp.com",
    projectId: "solentstudentdeals",
    storageBucket: "solentstudentdeals.appspot.com",
    messagingSenderId: "733234712001",
    appId: "1:733234712001:web:77098aeb5aaaf75f78f340",
    measurementId: "G-7F5V6VVD2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);



//Auth related
//===============================================
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

//database
//===============================================
//export const db = getFirestore(app)
const db = getFirestore(app)


//export modules
//===============================================
export {auth,provider, db}


