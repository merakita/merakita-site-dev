// ------ mongodb stuff:------
// ---------------------------
// import clientPromise from '$lib/mongodb-client'
// export async function get() {
//     console.log('connecting to database...')
//     const client = await clientPromise;
//     const item = await client.db().databaseName;
//     console.log('connected to database, result:', item)
//     return {
//         body: { item : item }
//     };
// }


// ------ firebase stuff:------
// ---------------------------

// import { initializeApp } from "firebase/app";
import { collection, getDocs } from 'firebase/firestore/lite';
import db from '$lib/database';

export async function get() {
    const veranstaltungen = collection(db, 'veranstaltungen_list');
    const snapshot = await getDocs(veranstaltungen);
    const list = snapshot.docs.map(doc => doc.data());
    
    

    return {
        body: { events: list }
    }
}



