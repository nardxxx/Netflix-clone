import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAfpyXiI8VFMyTNY9eh6tRVTebilSOXQIY",
    authDomain: "netflix-clone-9408c.firebaseapp.com",
    projectId: "netflix-clone-9408c",
    storageBucket: "netflix-clone-9408c.appspot.com",
    messagingSenderId: "531381790686",
    appId: "1:531381790686:web:4944fd00edd07c9ca4df4f"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;