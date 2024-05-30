// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWoQzMcAg0_BPMPD5rSLnx6tN451fImZ0",
  authDomain: "tutorme2-831ad.firebaseapp.com",
  projectId: "tutorme2-831ad",
  storageBucket: "tutorme2-831ad.appspot.com",
  messagingSenderId: "1034594087038",
  appId: "1:1034594087038:web:debcbda4f1390eacdae82f",
  measurementId: "G-C7TZ8B44K4"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}
const auth = firebase.auth()

export {auth};

// const analytics = getAnalytics(app);