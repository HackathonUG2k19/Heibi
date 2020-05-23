import Firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCvpq_wq4iGz5FWOlzwf-J5F0tZGah2-vU",
  authDomain: "hackathon-2019-b411f.firebaseapp.com",
  databaseURL: "https://hackathon-2019-b411f.firebaseio.com",
  projectId: "hackathon-2019-b411f",
  storageBucket: "hackathon-2019-b411f.appspot.com",
  messagingSenderId: "731057357862",
  appId: "1:731057357862:web:f352fa6c68b8d1842e92e7",
  measurementId: "G-1ETKVQTRPB"
};

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
