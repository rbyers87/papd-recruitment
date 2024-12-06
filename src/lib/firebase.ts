import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDE34odDPJcbgY985S6QpA5v4OmPRknXPY",
  authDomain: "papd-recruiting.firebaseapp.com",
  projectId: "papd-recruiting",
  storageBucket: "papd-recruiting.firebasestorage.app",
  messagingSenderId: "725579971680",
  appId: "1:725579971680:web:b3c2dfb137911530ced705"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);