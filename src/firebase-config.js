import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyAXXa_7cVHBSRTaakCACIm94JC9pjIMGwI",
    authDomain: "nba-squads.firebaseapp.com",
    projectId: "nba-squads",
    storageBucket: "nba-squads.appspot.com",
    messagingSenderId: "722270971393",
    appId: "1:722270971393:web:553a3bfd65e15e6d10c200",
    measurementId: "G-QJ37318CSQ"
    // databaseURL:
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const database = getDatabase(app);
export default app;