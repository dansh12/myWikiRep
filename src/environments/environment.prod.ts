import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: "AIzaSyCN2LL0_B6a4Zsqht-vr_eejuQIx1fVUNg",
    authDomain: "mywiki-d4f45.firebaseapp.com",
    projectId: "mywiki-d4f45",
    storageBucket: "mywiki-d4f45.appspot.com",
    messagingSenderId: "1066598086721",
    appId: "1:1066598086721:web:5bbc2610989cd78b18aec0",
    measurementId: "G-YZ0BGS0P6E"
  }
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);