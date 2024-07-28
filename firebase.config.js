import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCXlVurFe3np6_Up1lYUyqcMjcN3FHaQG4",
  authDomain: "epicurean-realm.firebaseapp.com",
  projectId: "epicurean-realm",
  storageBucket: "epicurean-realm.appspot.com",
  messagingSenderId: "748165587973",
  appId: "1:748165587973:web:825af3404f8743eb12a86c"
};
const app = initializeApp(firebaseConfig);
export default app;