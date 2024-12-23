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

function addRequest() {
    return new CachedRequest()
}

function addResponse() {
    return new CachedRequest()
}

class CachedRequest {
    constructor() {
        this.collection = null;
        this.data = null;
    }

    submit() {
        if (this.collection !== null && this.data !== null) {
            return db.collection(this.collection).add(this.data);
        } else {
            console.log("Unable to request to push data into database: Missing either collection or data");
        }
    }

    open(collectionName) {
        let newRequest = new CachedRequest();
        newRequest.collection = collectionName;
        newRequest.data = this.data;
        return newRequest;
    }

    add(dataObject) {
        let newRequest = new CachedRequest();
        newRequest.collection = this.collection;
        newRequest.data = dataObject;
        return newRequest;
    }
}

class CachedResponse {
    constructor() {
        this.collection = null;
        this.data = null;
        this.attributes = [];
        this.filters = [];
    }

    open(collectionName) {
        let newResponse = new CachedResponse();
        newResponse.collection = collectionName;
        newResponse.data = this.data;
        newResponse.attributes = this.attributes;
        newResponse.filters = this.filters;
    }

    withdraw() {
        if (this.collection !== null) {
            db.collection(this.collection).get().then((querySnapshot) => {
                let newResponse = new CachedResponse();
                newResponse.data = querySnapshot;
                newResponse.collection = this.collection;
                newResponse.attributes = this.attributes;
                newResponse.filters = this.filters;
                return newResponse;
            });
        } else {
            console.log('Unable to send a response from the database: Missing collection');
        }
    }

    return() {
        let array = [];

        if (this.collection !== null && this.data !== null) {
            for (let filter of this.filters) {
                let filteredData = [];
                this.data.forEach(doc => {
                    if (filter.condition(doc.data()[filter.attribute])) {
                        filterData.push(doc);
                    }
                });

                this.data = filteredData;
            }

            this.data.forEach(doc => {
                let dataForDoc = {};
                if (this.attributes.length > 0) {
                    for (let attribute of this.attributes) {
                        dataForDoc[attribute] = doc.data()[attribute];
                    }
                } else {
                    dataForDoc = doc.data();
                }   

                array.push(dataForDoc);
            });
        }

        

        return array;
    }

    addFilters([...filterList]) {
        let newResponse = new CachedResponse();
        newResponse.attributes = this.attributes;
        newResponse.collection = this.collection;
        newResponse.data = this.data;
        newResponse.filters = this.filters.concat(filterList);
    }

    addReturnableAttributes([...attributeList]) {
        let newResponse = new CachedResponse();
        newResponse.attributes = this.attributes.concat(attributeList);
        newResponse.collection = this.collection;
        newResponse.data = this.data;
        newResponse.filters = this.filters;
    }
}

/*

Architecture of CachedRequest

addRequest().open(collection).add(data).submit().then(callback).catch(callback);

Architecture of CachedResponse

addResponse().open(collection).withdraw().return(attributes);

OR

addResponse().open(collection).withdraw().config(attributes).config(attributes).return();


OR

addResponse().open("scouters").withdraw().addReturnableAttributes("name", "permission").addFilters({attribute: "name", condition: attr => return (attr == "Priyanshu Biswal")}).return();

*/




let accountDetails = addResponse()
                        .open("scouters")
                        .withdraw()
                        .addReturnableAttributes("name", "permission")
                        .addFilters({
                            attribute: "name",
                            condition: attr => attr == "Priyanshu Biswal"
                        })
                        .return();