import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3d5QD1NHquSgvhsNOSwWCoxdtLUNXGAE",
    authDomain: "dating-chat-c7177.firebaseapp.com",
    databaseURL: "https://dating-chat-c7177-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "dating-chat-c7177",
    storageBucket: "dating-chat-c7177.appspot.com",
    messagingSenderId: "20191086407",
    appId: "1:20191086407:web:167de0588f912afa6dee62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

