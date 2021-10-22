import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_MO_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_MO_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_MO_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_MO_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_MO_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_MO_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_MO_APP_FIREBASE_APPID,
};

firebase.initializeApp(config);
firebase.auth().languageCode = "pt-BR";

export default firebase;
