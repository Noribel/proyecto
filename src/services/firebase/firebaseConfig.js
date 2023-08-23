import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyChFXmKZK7soM9KZT4XK4blzloud2y5_mU",
  authDomain: "noribelshop.firebaseapp.com",
  projectId: "noribelshop",
  storageBucket: "noribelshop.appspot.com",
  messagingSenderId: "297945965153",
  appId: "1:297945965153:web:26a6423e7b064de8efc020"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app) 