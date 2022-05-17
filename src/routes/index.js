export async function get() {

    const response = await fetch("https://merakita.seminardesk.de/api/eventDates");
    const data = await response.json();
    const dates = data.dates.slice(0,3)

    let events = {
        dates: dates,
        totalCount: data.meta.totalCount
    }
    
    return {
        body: { events: events }
    }
}

