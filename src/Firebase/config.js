import firebase from 'firebase/compat/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC0OvhzEf3_xv4VWLmdHu9XpWYm3N1EKhs",
  authDomain: "olx-clone-111ec.firebaseapp.com",
  projectId: "olx-clone-111ec",
  storageBucket: "olx-clone-111ec.appspot.com",
  messagingSenderId: "956169139732",
  appId: "1:956169139732:web:2a5af08c320bd078651901",
  measurementId: "G-04FHLMNQ53"
};
const firebaseApp =firebase.initializeApp(firebaseConfig);

// export const storage = getStorage(firebaseApp)
export const firebaseAuth=getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);