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


// db.collection("scouters").add({
//     name: "Priyanshu Biswal",
//     permission: "admin"
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });


db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});

// class CachedResponse {
//     constructor() {
//         this.collection = null;
//         this.data = null;
//     }

//     open(collectionName) {
//         this.collection = collectionName;
//         return this;
//     }

//     add(dataObject) {
//         this.data = dataObject;
//         return this;
//     }

//     async submit() {
//         if (this.collection !== null && this.data !== null) {
//             return await db.collection(this.collection).add(this.data);
//         } else {
//             console.log("Unable to send a response to database: Missing either collection or data");
//         }
//     }

//     addFilters(...filterList) { // Little bit different addFilters({attribute: "", condition})

//     }
// }

// class CachedRequest {
//     constructor() {
//         this.collection = null;
//         this.filters = [];
//         this.attributes = []; 
//     }

//     open(collectionName) {
//         this.collection = collectionName;
//         return this;
//     }

//     returnAttributes(...attributeList) {
//         this.attributes = this.attributes.concat(attributeList);
//         return this;
//     }

//     addFilters(...filterList) {
//         this.filters = this.filters.concat(filterList);
//         return this;
//     }

//     async withdraw() {
//         let data;
//         if (this.collection !== null) {
//             data = await new Promise((resolve, reject) => {
//                 db.collection(this.collection).get().then(querySnapshot => {
//                     let currentData = [];
//                     querySnapshot.forEach(doc => currentData.push(doc.data()));

//                     if (this.filters.length > 0) {
//                         this.filters.forEach(filter => {
//                             let filteredData = [];
//                             currentData.forEach(doc => {
//                                 if (filter.condition(doc[filter.attribute])) filteredData.push(doc);
//                             });
//                             currentData = filteredData;
//                         });
//                     }

//                     if (this.attributes.length > 0) {
//                         let returnableData = [];
//                         currentData.forEach(doc => {
//                             let revisedDoc = {};
//                             this.attributes.forEach(attr => {
//                                 revisedDoc[attr] = doc[attr];
//                             });
//                             returnableData.push(revisedDoc);
//                         });
//                         currentData = returnableData;
//                     }

//                     resolve(currentData);
//                 });
//             });

//             return data;
//         } else {
//             console.log("Unable to request data from the database: Missing collection");
//         }
//     }
// }

/*

Architecture of CachedRequest

addRequest().open(collection).add(data).submit().then(callback).catch(callback);

Architecture of CachedResponse

addResponse().open(collection).returnAttributes("name").addFilters({attribute: attr, condition: conditional}).withdraw().then();

*/
