import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore/lite";
import db from '$lib/database';


const opt_date = { year: 'numeric', month: 'long', day: 'numeric'};
const opt_hour = {hour: '2-digit'}


const mergeDatum = (d0,d1) => {
  // go through from behind, first year then month to check if they are the same
  const year0 = d0.slice(-4)
  const month0 = d0.match(/[A-Z]\w+/g)[0]
  const year1 = d1.slice(-4)
  const month1 = d1.match(/[A-Z]\w+/g)[0]
  const day0 = d0.match(/\d+\./g)[0]
  const day1 = d1.match(/\d+\./g)[0]
  if (year0 != year1) {
    return d0 + ' + ' + d1
  } else {
    if (month0 != month1) {
      return day0 + ' ' + month0 + ' + ' + day1 + ' ' + month1 + ' ' + year0
    } else {
      return day0 + ' + ' + day1 + ' ' + month0 + ' ' + year0
    }
  }
}



export async function get({ params }) {
  // `params.id` comes from [id].js
  
  // this event
  const docRef = doc(db, 'veranstaltungen', params.id);
  const docSnap = await getDoc(docRef);


  if (docSnap.exists()) {
    
    let data = docSnap.data();

    // get facilitator
    const facilitator_id = data.facilitator
    const facilRef = doc(db, 'referenten', `referent-${facilitator_id}`);
    const facilSnap = await getDoc(facilRef);
    const facilitator = facilSnap.data();
    data.facilitator_name = facilitator.title.concat(facilitator.title.length > 0 ? ' ' : '', facilitator.name);
    

    // get eventDates
    let dates = []

    //// get other events with same number (in case there are multiple ones)
    const eventsRef = collection(db, 'veranstaltungen')
    const queryEvents = query(eventsRef, where("number", "==", data.number))
    const queryEventsSnapshot = await getDocs(queryEvents)
    let queryEventsResults = []
    queryEventsSnapshot.forEach((event) => {
      queryEventsResults.push(event.data())
    })

    //// get event dates for all event ids by querying event dates with eventId
    const datesRef = collection(db, 'termine')
    for (const event of queryEventsResults) {
      const eventId = event.eventId
      const bookingPageUrl = event.bookingPageUrl
      const queryDates = query(datesRef, where("eventId", "==", eventId))
      const queryDatesSnapshot = await getDocs(queryDates)
      let queryDatesResults = []
      queryDatesSnapshot.forEach((date) => {
        let datedata = date.data()
        datedata.bookingPageUrl = bookingPageUrl
        const datum = (new Date(datedata.beginDate).toLocaleDateString('de-DE', opt_date)).toString()
        datedata.datum = datum
        const startHour = (new Date(datedata.beginDate).toLocaleTimeString('de-DE', opt_hour)).toString().slice(0,2)
        const endHour = (new Date(datedata.endDate).toLocaleTimeString('de-DE', opt_hour)).toString().slice(0,2)
        datedata.timeRange = startHour + " - " + endHour
        queryDatesResults.push(datedata)
      })
      for (const datesList of queryDatesResults) {
        dates = dates.concat(datesList)
      }
    }


    /// group events with same number

    dates = dates.sort((x,y) => {
        return x.beginDate - y.beginDate
    })
    
    const groupedDates = {}

    for (const date of dates) {
      if (Object.keys(groupedDates).includes(date.terminnr)) {
        groupedDates[date.terminnr].push(date)
      } else {
        groupedDates[date.terminnr] = [date]
      }
    }

    data.dates = dates


    // data.groupedDates = groupedDates
    // // sort event numbers to display them in the right order 
    
    const numbers = Object.keys(groupedDates)
    numbers.sort((x,y) => {
      const xNum = x.match(/\.\d+/g)
      const yNum = y.match(/\.\d+/g)
      return xNum - yNum
    })

    // data.sortedNumbers = numbers

    /// make dates a sorted array with merged dates for the grouped ones
    let merged = []
    for (const number of numbers) {
      const thisDateBlock = groupedDates[number]
      if (thisDateBlock.length == 2) {
        let date0 = thisDateBlock[0]
        let date1 = thisDateBlock[1]
        const mergedDatum = mergeDatum(date0.datum,date1.datum)
        date0.datum = mergedDatum
        merged.push(date0)
      } else {
        merged.push(thisDateBlock[0])
      }
    }

    console.log(merged)

    data.dates = merged

    //// get price
    if (dates.length > 0) {
      const date = dates[0]
      data.price = date.priceInfo[0].value
    }
    
    return {
      body: { event: data }
    };

  } else {
    return {
        status: 404
    };
  }  


}
