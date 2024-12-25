const db = firebase.firestore();
const batch = db.batch();

const ASCENDING = "asc";
const DESCENDING = "desc";


/**
 * 
 * A chainable emitter that asynchronously updates and adds data, built on top of Firestore API.
 */

class CachedEmitter {
    constructor() {
        this.collection = null;
        this.updateData = null;
        this.addData = null;
        this.referencedDocs = [];
        this.queryFilters = [];
        this.fieldsToDelete = [];
        this.deleteData = false;
    }

    open(collectionName) {
        this.collection = collectionName;
        return this;
    }

    applyTo(...docsList) {
        this.referencedDocs = this.referencedDocs.concat(docsList);
        return this;
    }

    add(dataObject) {
        this.addData = dataObject;
        return this;
    }

    update(dataObject) {
        this.updateData = dataObject;
        return this;
    }

    delete() {
        this.deleteData = true;
        return this;
    }

    deleteField(field) {
        this.fieldsToDelete.push(field);
        return this;
    }

    find(attribute, condition, value) {
        this.queryFilters.push({attribute, condition, value, m_returnAll: false});
        return this;
    }

    async commit() {
        // There are three scenarios, adding, deleting, updating

        if (this.queryFilters.length > 0) {
            let object = db.collection(this.collection);

            this.queryFilters.forEach(filter => {
                object = object.where(filter.attribute, filter.condition, filter.value);
            });

            let querySnapshot = await object.get();

            querySnapshot.forEach(doc => {
                this.referencedDocs.push(doc.id);
            });
        }

        if (this.fieldsToDelete.length > 0) {
            let deletingObject = {}
            for (let field of this.fieldsToDelete) {
                deletingObject[field] = firebase.firestore.FieldValue.delete();
            }
            for (let doc of this.referencedDocs) {
                batch.update(db.collection(this.collection).doc(doc), deletingObject);
            }
        }
        if (!this.deleteData) {

            //If both are false or both are true, won't work
            if ((this.addData !== null) != (this.updateData !== null)) {
                if (this.addData !== null) {
                    for (let doc of this.referencedDocs) {
                        batch.set(db.collection(this.collection).doc(doc), this.addData);
                    }
                } else {
                    for (let doc of this.referencedDocs) {
                        batch.update(db.collection(this.collection).doc(doc), this.updateData);
                    }
                }
            } else {
                console.log('Have both add or update method or have no add or update method.')
            }
        } else {
            // Delete Data
            batch.delete(db.collection(this.collection).doc(doc));
        }
        

        await batch.commit();
    }
}


/**
 * 
 * An chainable listener that asynchronously reads and queries data, built on top of Firestore API.
 */

class CachedListener {
    constructor() {
        this.collection = null;
        this.referencedDocs = [];
        this.queryFilters = [];
        this.limits = null;
        this.orders = [];
        this.givenID = [];
    }

    open(collectionName) {
        this.collection = collectionName;
        return this;
    }

    addDoc(...docList) {
        this.givenID = this.givenID.concat(docList);
        return this;
    }

    addReference(...docList) {
        this.referencedDocs = this.referencedDocs.concat(docList);
        return this;
    }

    order(attribute, orderDir) {
        this.orders.push({attribute, orderDir});
        return this;
    }

    find(attribute, condition, value) {
        this.queryFilters.push({attribute, condition, value});
    }

    limit(number) {
        this.limit = number;
    }

    async getAllReferences() {
        let object = db.collection(this.collection);

        this.queryFilters.forEach(filter => {
            object = object.where(filter.attribute, filter.condition, filter.value);
        });

        this.orders.forEach(order => {
            object = object.orderBy(order.attribute, order.orderDir);
        });

        if (this.limit !== null) object = object.limit(this.limit);

        let querySnapshot = await object.get();

        querySnapshot.forEach(doc => {
            this.referencedDocs.push(doc);
        });

        this.givenID.forEach(doc => {
            this.referencedDocs.push(db.collection(this.collection).doc(doc));
        });

        return this.referencedDocs;
    }

    async getAllIDs() {
        let object = db.collection(this.collection);

        this.queryFilters.forEach(filter => {
            object = object.where(filter.attribute, filter.condition, filter.value);
        });

        this.orders.forEach(order => {
            object = object.orderBy(order.attribute, order.orderDir);
        });

        if (this.limit !== null) object = object.limit(this.limit);

        let querySnapshot = await object.get();

        querySnapshot.forEach(doc => {
            this.givenID.push(doc.id);
        });

        this.referencedDocs.forEach(doc => {
            this.givenID.push(doc.id);
        });

        return this.givenID;
    }

    async return(...attributesList) {
        let array = [];
        let object = db.collection(this.collection);

        this.queryFilters.forEach(filter => {
            object = object.where(filter.attribute, filter.condition, filter.value);
        });

        this.orders.forEach(order => {
            object = object.orderBy(order.attribute, order.orderDir);
        });

        if (this.limit !== null) object = object.limit(this.limit);

        let querySnapshot = await object.get();

        querySnapshot.forEach(doc => {
            array.push(doc.data());
        });

        this.referencedDocs.forEach(doc => {
            array.push(doc.data());
        });

        this.givenID.forEach(async doc => {
            let docRef = await db.collection(this.collection).doc(doc).get();
            array.push(docRef.data());
        });

        if (attributesList.length == 0) {
            return array;
        } else {
            let revisedArray = [];
            array.forEach(doc => {
                let revisedDoc = {};
                attributesList.forEach(attr => {
                    revisedDoc[attr] = doc[attr];
                });
                revisedArray.push(revisedDoc);
            });
            return revisedArray;
        }
    }
}
