// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs, doc, getDoc, getFirestore, orderBy } from 'firebase/firestore'
import { getDefaultNormalizer } from "@testing-library/react";

const firebaseConfig = {
    apiKey: "AIzaSyBV7smNYlC6CNqcm7q5xByzBXrcCdmFpKQ",
    authDomain: "chanchitofeliz-a8a25.firebaseapp.com",
    projectId: "chanchitofeliz-a8a25",
    storageBucket: "chanchitofeliz-a8a25.appspot.com",
    messagingSenderId: "710624754056",
    appId: "1:710624754056:web:f8eb53fb5e55c76604223d",
    measurementId: "G-P26WQT147E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
/* const docRef = doc(db, "item", "test")
getDoc(docRef).then((snapshot) => {
    console.log(snapshot)
}) */

const colRef = collection(db, 'items')

const q = query(colRef,
    where("done", "==", true),
    limit(1),
    orderBy('date', 'asc'))

getDocs(q).then((snap) => {
    console.log(
        snap.docs.map((document) => ({
            id: document.id,
            ...document.data(),
        })))
})