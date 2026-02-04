
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBPh1UjX3fEvEhxhfq9mU-uH4vigWnCx8U",
  authDomain: "justlawproject.firebaseapp.com",
  projectId: "justlawproject",
  storageBucket: "justlawproject.firebasestorage.app",
  messagingSenderId: "1026473001933",
  appId: "1:1026473001933:web:c2c23435562edda75f7a84",
  measurementId: "G-RETQ2XMKX3"
};

export const environment = {
  firebase: {
    apiKey: "AIzaSyBPh1UjX3fEvEhxhfq9mU-uH4vigWnCx8U",
  authDomain: "justlawproject.firebaseapp.com",
  projectId: "justlawproject",
  storageBucket: "justlawproject.firebasestorage.app",
  messagingSenderId: "1026473001933",
  appId: "1:1026473001933:web:c2c23435562edda75f7a84",
  },
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
