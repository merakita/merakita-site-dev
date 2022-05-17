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

import { collection, getDocs } from 'firebase/firestore/lite';
import db from '$lib/database';

export async function get() {
    const termine = collection(db, 'termine');
    const snapshot = await getDocs(termine);
    const list = snapshot.docs.map(doc => doc.data());
    

    return {
        body: { events: list }
    }
}


// export async function get() {

//     const response = await fetch("https://merakita.seminardesk.de/api/eventDates");
//     const data = await response.json();
    
//     return {
//         body: { events: data.dates }
//     }
// }


