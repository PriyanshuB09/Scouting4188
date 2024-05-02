// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// import firebase from "../node_modules/firebase/app";
// import "../node_modules/firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyDlHbuvs7sPs3Ipaq79bt6VxEswrZ5_FHU",
    authDomain: "scouting-d7fed.firebaseapp.com",
    databaseURL: "https://scouting-d7fed-default-rtdb.firebaseio.com",
    projectId: "scouting-d7fed",
    storageBucket: "scouting-d7fed.appspot.com",
    messagingSenderId: "1067372801750",
    appId: "1:1067372801750:web:0e6b938d4188cba804a377",
    measurementId: "G-6XTHW03S8D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

db.collection("users").add({
    first: "Priyanshu",
    last: "Biswal",
    born: 2009,
    id: 'priyanshubiswal-0r42'
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});


db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});

