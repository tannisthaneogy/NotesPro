import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBlFvnlsgmnV-x9FcwoJL2MWbbcqWIvV1Y",
  authDomain: "notespro-44439.firebaseapp.com",
  projectId: "notespro-44439",
  storageBucket: "notespro-44439.appspot.com",
  messagingSenderId: "110259456355",
  appId: "1:110259456355:web:2b31c1233174e4cb6f2b56",
  measurementId: "G-8K34JMW2VR"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider(auth);

export {auth,provider};