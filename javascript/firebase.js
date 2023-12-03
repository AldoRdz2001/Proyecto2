// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwm48DNHfNoPBvA_fDj1Qi_qtgBYRz4zc",
    authDomain: "stickersfeos-e3e44.firebaseapp.com",
    projectId: "stickersfeos-e3e44",
    storageBucket: "stickersfeos-e3e44.appspot.com",
    messagingSenderId: "701419238193",
    appId: "1:701419238193:web:0654fd3df574b146f1b610"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const Coleccion = collection(db, 'users');

export const saveClient = (name, email, password) => {
    addDoc(Coleccion, { name, email, password });
};

export const login = async (email, password) => {
    const user = query(Coleccion, where('email', '==', email), where('password', '==', password));
    return ObtenerDatosList(user);
}

export const ValidarEmail = (email) => {
    const user = query(Coleccion, where('email', '==', email));
    return ObtenerDatosList(user);
}

async function ObtenerDatosList(consulta) {
    const querySnapshot = await getDocs(consulta);
    var List = [];
    querySnapshot.forEach((doc) => {
        List.push(doc.data());
    });
    return List;
}