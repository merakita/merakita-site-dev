<script context="module">
    export const prerender = true;
</script>


<svelte:head>
    <title>Veranstaltungen</title>
</svelte:head>

<script>
    import { onMount } from 'svelte';
    import OnlineOderPraesenz from '../../lib/OnlineOderPraesenz.svelte'

    export let events

    const teile = ['A','B','C','D','E']

    const filterEvents = (events) => {
        // initialize the object by empty arrays
        let filtered = {}
        let existingNumbers = []
        for (const teil of teile) {
            filtered[teil] = []
        }
        // append to the corresponding arrays
        for (const event of events) {
            if (!existingNumbers.includes(event.number)) {
                filtered[event.teil].push(event)
                existingNumbers.push(event.number)
            }
        }
        return filtered
    }

    const sortEvents = (eventsList) => {
        return eventsList.sort((x,y) => {
            const xNum = x.number.match(/\-\d+/g)[0].slice(1)
            const yNum = y.number.match(/\-\d+/g)[0].slice(1)
            return xNum - yNum
            })
    }


    // async function getData() {
    //     const urlEvents = 'https://merakita.seminardesk.de/api/eventDates';
    //     const urlSpecialEvent = 'https://merakita.seminardesk.de/api/events/60b05547ec5f4530995bab91383cbe7f';
    //     const response = await fetch(urlEvents);
    //     const data = await response.json();
    //     console.log(data)
    // }

    onMount(() => {
        document.documentElement.setAttribute('data-theme', 'white');
    });


    $: filteredEvents = filterEvents(events)


    // $: console.log(filteredEvents['A'].sort((x,y) => {
    //     const xNum = x.number.match(/\-\d+/g)[0].slice(1)
    //     const yNum = y.number.match(/\-\d+/g)[0].slice(1)
    //     return xNum - yNum
    //     }))
</script>


<div id='headline'>
    <div class='wrapper-inner'>
        <h1>Veranstaltungen</h1>
        <h2>Nur wer Sonne hat, kann Sonne geben.</h2>

        <!-- <h2>Alle vergangenen und zukünftigen Veranstaltungen</h2> -->
    </div>
</div>


<div id="content">
    <div class="wrapper-inner">
        <p>Im dritten Jahr der Corona-Pandemie, in der die Kolleg*innen in den Kindertageseinrichtungen und der Kindertagespflege so ausdauernd und „tapfer“ die Stellung gehalten haben, möchte <span class="emph">merakita</span> <span class="emph-red">Werkstatt für kindorientierte Pädagogik</span> ein Treffpunkt für all diejenigen sein, die ihren Beruf immer noch und trotz allem als ihre „Berufung“ sehen und auch in diesen anfordernden Zeiten jeden Tag aufs Neue ihr Herzblut in die Arbeit mit Kindern stecken.</p>

        <p>Im zweiten Halbjahr 2022 richtet sich der Fokus unserer Fortbildungsangebote auf Themen, die gerade in dieser Zeit als bedeutsam erscheinen:</p>

        <ul class="heartbullet">
            <li><i>Die Kindertageseinrichtung als Raum für Gefühle, Bedürfnisse und positive Beziehungen:</i> Eigene und kindliche Gefühle und Bedürfnisse erkennen und Wege finden, diesen auch unter schwierigen Rahmenbedingungen möglichst gerecht zu werden.</li>
            <li><i>Die Kindertageseinrichtung als Schutz- und Kompetenzraum:</i> Jede Form der Gewalt im Kita-Alltag vermeiden, alle Maßnahmen hierfür in einem institutionellen Schutzkonzept verankern und wissen, was bei Verdacht auf Kindeswohlgefährdung außerhalb der Einrichtung zu tun ist.</li>
            <li><i>Im Kita-Alltag gut für sich selber sorgen:</i> Auch und gerade in Zeiten in herausfordern Situationen eigene Kraftquellen finden, gut für sich selber sorgen und auftanken, denn auch für Erzieher*innen gilt:</li>
        </ul>

        <p>Neben eigenen Fortbildungen freue ich mich, für diese Themen auch geschätzte Referent*innen bei <span class="emph">merakita</span> begrüßen zu dürfen und hoffe, dass so auch genau das Thema dabei ist, das Ihnen derzeit auf der Seele brennt.</p>

        <!-- <p>Ich würde mich sehr freuen, Sie bald bei <span class="emph">merakita</span> <span class="emph-red">Werkstatt für kindorientierte Pädagogik</span> begrüßen und kennenlernen zu dürfen und mich gemeinsam mit Ihnen auf den Weg zu machen, Kindertagesbetreuung in den Fokus zu rücken und an manchen Stellen vielleicht sogar neu zu denken.</p> -->
    </div>
</div>

<div id="format-A" class='format'>
    <div class="wrapper-inner">
        <div class='format-label'>
            <span class='format-letter'>A</span>
            <span class='format-title'>Ganz- und mehrtägige Fortbildungen</span>
        </div>
        <div class='table-descr'>
            <div class='title-descr'>Titel der Veranstaltung</div>
            <div class='number-descr'>Nummer</div>
        </div>
        <ul>
        {#each sortEvents(filteredEvents['A']) as event}
            <li><a href='/veranstaltungen/{event.eventId}'>
                <div class='event-title'>{event.title}</div>                
                <div class='one-row'>
                    <div class='event-number'>{event.number}</div>
                </div>
            </a></li>
        {/each}
        </ul>
    </div>
</div>


<div id='format-B' class='format'>
    <div class="wrapper-inner">
        <div class='format-label'>
            <span class='format-letter'>B</span>
            <span class='format-title'>Kita-Impulse</span>
        </div>
        <div class='table-descr'>
            <div class='title-descr'>Titel der Veranstaltung</div>
            <div class='number-descr'>Nummer</div>
        </div>
        <ul>
        {#each sortEvents(filteredEvents['B']) as event}
            <li><a href='/veranstaltungen/{event.eventId}'>
                <div class='event-title'>{event.title}</div>                
                <div class='one-row'>
                    <div class='event-number'>{event.number}</div>
                </div>
            </a></li>
        {/each}
        </ul>
    </div>
</div>



<div id='format-C' class='format'>
    <div class="wrapper-inner">
        <div class='format-label'>
            <span class='format-letter'>C</span>
            <span class='format-title'>Veranstaltungen für Leitungskräfte</span>
        </div>
        <div class='table-descr'>
            <div class='title-descr'>Titel der Veranstaltung</div>
            <div class='number-descr'>Nummer</div>
        </div>
        <ul>
        {#each sortEvents(filteredEvents['C']) as event}
            <li><a href='/veranstaltungen/{event.eventId}'>
                <div class='event-title'>{event.title}</div>
                <div class='one-row'>
                    <div class='event-number'>{event.number}</div>
                </div>
            </a></li>
        {/each}
        </ul>
    </div>
</div>



<div id='format-D' class='format'>
    <div class="wrapper-inner">
        <div class='format-label'>
            <span class='format-letter'>D</span>
            <span class='format-title'>Treffpunkt Kindertagespflege</span>
        </div>
        <div class='table-descr'>
            <div class='title-descr'>Titel der Veranstaltung</div>
            <div class='number-descr'>Nummer</div>
        </div>
        <ul>
        {#each sortEvents(filteredEvents['D']) as event}
            <li><a href='/veranstaltungen/{event.eventId}'>
                <div class='event-title'>{event.title}</div>
                <div class='one-row'>
                    <div class='event-number'>{event.number}</div>
                </div>           
            </a></li>
        {/each}
        </ul>
    </div>
</div>



<div id='format-E' class='format'>
    <div class="wrapper-inner">
        <div class='format-label'>
            <span class='format-letter'>E</span>
            <span class='format-title'>Dankeschön</span>
        </div>
        <div class='table-descr'>
            <div class='title-descr'>Titel der Veranstaltung</div>
            <div class='number-descr'>Nummer</div>
        </div>
        <ul>
        {#each sortEvents(filteredEvents['E']) as event}
            <li><a href='/veranstaltungen/{event.eventId}'>
                <div class='event-title'>{event.title}</div>
                <div class='one-row'>
                    <div class='event-number'>{event.number}</div>
                </div>            
            </a></li>
        {/each}
        </ul>
    </div>
</div>



<style>

    #headline {
        padding-bottom: 30px;
    }

    #headline h2 {
        font-family: var(--sans-serif);
        font-weight: 700;
        color: var(--yellow-headline);
        font-size: 30px;
        font-style: italic;
    }

    #content p, #content ul {
        font-size: 20px;
        font-weight: 300;
    }

    #content li {
        padding-bottom: 20px;
    }

    #content {
        padding-bottom: 50px;
    }

    #format-A {
        background-color: #616A71;
    }

    #format-B {
        background-color: #808C83;
    }

    #format-C {
        background-color: #BAA678;
    }

    #format-D {
        background-color: #9A8B81;
    }

    #format-E {
        background-color: #A9555B;
    }


    .format {
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .format-label {
        padding-bottom: 20px;
    }

    .format-letter {
        font-size: 40px;
        font-weight: 600;
        color: #fff;
    }

    .format-title {
        padding-left: 20px;
        font-size: 22px;
        font-weight: 500;
        color: #fff;
    }


    .table-descr {
        display: none;
        /*display: flex;*/
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


    .format ul {
        margin-top: 0px;
        margin-bottom: 0px;
        line-height: 1.5;
        list-style: none; 
        padding-left: 0px;
        height: auto;
        /*border-top: 1px solid #D3BB93;*/
    }

    .format li a {
        text-decoration: none;
        color: #fff;
        /*border-radius: 5px;*/
        /*padding: 15px;*/
        padding-top: 18px;
        padding-bottom: 18px;
        /*margin-top: 15px;*/
        background-color: var(--background-color);
        /*border-bottom: 1px solid var(--light-gray);*/
        display: flex;
        flex-direction:  row;
        align-items: center;
        justify-content:  space-between;
        gap: 2em;
    }

    .format li a:hover .event-title, li a:hover .event-number {
        /*font-weight: 400;*/
        color: var(--yellow);
        /*text-decoration: underline;*/
    }


    .one-row {
        display: flex;
        flex-direction:  row;
        align-items: center;
        flex: 0 0 8em;
        justify-content:  space-evenly;
    }


    /*.event-number, .number-descr {
        min-width: 60px;
    }*/

    .event-title {
        font-weight: 300;
        font-size: 20px;
    }

    .event-number {
        font-weight: 300;
        font-size:  18px;
    }


    
    /*.svg-wrapper {
        width:  4em;
    }*/

</style>







