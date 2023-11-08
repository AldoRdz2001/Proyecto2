// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByYaO_tDaBjnzdMri3fTr29c6pq_7F4Ug",
    authDomain: "stickersfeos-5f325.firebaseapp.com",
    projectId: "stickersfeos-5f325",
    storageBucket: "stickersfeos-5f325.appspot.com",
    messagingSenderId: "662004359951",
    appId: "1:662004359951:web:5fbb6934a2ffb89916147a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const saveTask = (name, email, password) => {
    
    addDoc(collection(db, 'users'), {name, email, password});
};