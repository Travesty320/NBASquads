import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "
    authDoma
    projectId:
    storageBucket: 
    messagingSenderId:
    appId: 
    measurementId:
    // databaseURL:
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const database = getDatabase(app);
export default app;
