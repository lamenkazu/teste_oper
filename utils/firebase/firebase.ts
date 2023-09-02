import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBsLQtfAyHq1eLnB9sKINX9l3mCaIoToMc",
  authDomain: "fake-news-bb175.firebaseapp.com",
  projectId: "fake-news-bb175",
  storageBucket: "fake-news-bb175.appspot.com",
  messagingSenderId: "968050012377",
  appId: "1:968050012377:web:de2f0ed1f36dffd1384ec8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}