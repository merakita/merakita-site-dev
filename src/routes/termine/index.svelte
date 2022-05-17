<script context="module">
    export const prerender = true;
</script>


<svelte:head>
    <title>Termine</title>
</svelte:head>

<script>
    import { onMount } from 'svelte';
    import OnlineOderPraesenz from '../../lib/OnlineOderPraesenz.svelte'
    import TeilSymbol from '../../lib/TeilSymbol.svelte'

    export let events

    onMount(() => {
        document.documentElement.setAttribute('data-theme', 'red');
    });

    const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']

    const currentYear = '2022'

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const opt_month = { month: 'long'}
    const opt_day = {day: 'numeric'}
    const opt_hour = {hour: '2-digit'}

    const filterDates = (events) => {        
        let filtered = {}
        for (const month of months) {
            filtered[month] = []
        }
        // append to the corresponding arrays
        for (const event of events) {
            const month = (new Date(event.beginDate).toLocaleDateString('de-DE', opt_month)).toString()
            const day = (new Date(event.beginDate).toLocaleDateString('de-DE', opt_day)).toString()
            event.day = day
            const startHour = (new Date(event.beginDate).toLocaleTimeString('de-DE', opt_hour)).toString().slice(0,2)
            const endHour = (new Date(event.endDate).toLocaleTimeString('de-DE', opt_hour)).toString().slice(0,2)
            event.timeRange = startHour + " - " + endHour
            filtered[month].push(event)
        }
        return filtered
    }


    const sortEvents = (datesList) => {
        return datesList.sort((x,y) => {
            return x.day - y.day
            })
    }


    $: filteredDates = filterDates(events)

</script>


<div id='headline'>
    <div class='wrapper-inner'>
        <h1>Termine</h1>
        <h2>Unser Programm für {currentYear}</h2>
    </div>
</div>



<div class="wrapper-inner">
    
    <div id='table-descr'>
        <div id='title-descr'>Titel der Veranstaltung</div>
        <div class='one-row'>
            <div id='type-descr'>Art</div>
            <div id='number-descr'>Nummer</div>
        </div>
    </div>
    
    {#each months as month}

        {#if filteredDates[month].length > 0}
            <div class="month">{month} {currentYear}</div>

            <ul>
            {#each sortEvents(filteredDates[month]) as event}

                <li><a href='/veranstaltungen/{event.eventId}'>
                    <div class="flush-left">
                        <div class='event-day'>{event.day}.</div>
                    
                        <div class='event-time'>{event.timeRange}</div>
                    
                        <div class='attendance'><OnlineOderPraesenz select={event.attendanceType} /></div>
                    
                        <div class='event-title'>{event.title}</div>
                    </div>
                    <div class='one-row'>
                        <TeilSymbol teil={event.teil}/>
                    </div>
                </a></li>
            {/each}
            </ul>
        {/if}

    {/each}

</div>


<style>

    #headline {
        padding-top:  150px;
    }

    #headline h1 {
        color: #fff;
        font-weight: 500;
    }

    #headline h2 {
        font-family: var(--sans-serif);
        font-weight: 700;
        color: var(--yellow-text);
        /*color: #CDB28D;*/
        font-size: 30px;
        font-style: italic;
    }

    #table-descr {
        display: none;
        flex-direction:  row;
        align-items: center;
        justify-content:  space-between;
        gap: 20px;
        padding:  15px;
        margin-top: 75px;
        font-size: 15px;
        font-weight:  500;
        color: var(--red-text);
    }

    .month {
        padding-top: 80px;
        padding-bottom: 10px;
        color: var(--red-text);
        font-size: 26px;
        font-weight: 600;
        text-transform: uppercase;
    }

    .event-day {
        flex:  0 0 1.5em;
        color: var(--red-list);
        font-weight: 600;
        font-size: 18px;
    }

    .event-time {
        flex: 0 0 3.5em;
        font-size: 18px;
        font-weight:  300;
    }

    .attendance {
        display: none;
        flex:  0 0 2em;
    }


    .one-row {
        display: none;
        flex-direction:  row;
        align-items: center;
        flex: 0 0 4em;
        justify-content:  space-between;
    }


    @media (min-width: 500px) {
        .event-day, .attendance {
            flex:  0 0 3em;
        }
        .event-time {
            flex:  0 0 5em;
        }
        .one-row, .attendance {
            display: flex;
        }
    }

    ul {
        margin-top: 15px;
        margin-bottom: 20px;
        line-height: 1.5;
        list-style: none; 
        padding-left: 0px;
        height: auto;
        border-top: 1px solid #D3BB93;

    }

    li a {
        text-decoration: none;
        color: var(--dark-blue);
        /*border-radius: 5px;*/
        padding: 15px;
        /*margin-top: 15px;*/
        background-color: var(--background-color);
        border-bottom: 1px solid #D3BB93;
        display: flex;
        flex-direction:  row;
        align-items: center;
        justify-content:  space-between;
        gap: 20px;
    }

    .flush-left {
        display: flex;
        flex-direction:  row;
        align-items: center;
        gap: 20px;
    }

    li a:hover {
        /*border: 1px solid var(--hover-border);*/
        background-color: #FBF7EF;
    }

    .event-number, #number-descr {
        min-width: 60px;
    }



    .event-title {
        font-weight: 300;
        font-size: 18px;
    }

    .event-number {
        font-weight: 300;
    }



</style>







