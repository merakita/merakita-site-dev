<script context="module">
    export const prerender = true;
</script>

<script>
    export let event;

    import { onMount } from 'svelte';
    import OnlineOderPraesenz from '../../lib/OnlineOderPraesenz.svelte'
    import TeilSymbol from '../../lib/TeilSymbol.svelte'

    onMount(() => {
       document.documentElement.setAttribute('data-theme', 'white-gray');
    });


    const opt_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const opt_hour = {hour: '2-digit'}



</script>


<div id='headline'>
    <div class='wrapper-inner'>
        <div class="title-and-letter">
            <h1 class='event-title'>{@html event.title}</h1>
            <div class="event-letter">
                <TeilSymbol teil={event.teil}/>
            </div>
        </div>
    </div>
</div>

<div id='content' class='description'>
    <div class='wrapper-inner'>

        <div class="ausschreibung">
        {@html event.description}
        </div>

        <div class='referent'><span class='referent-label'>Referent*in:</span> <span class='referent-name'>{event.facilitator_name}</span></div>

        {#if event.price == "0 Euro"}
            <div class='price'><span class='price-label'>Seminargebühr:</span> <span class='price-value'>kostenlos, die Gebühren übernimmt <span class="emph">merakita</span> für sie</span></div>
        {:else}
            <div class='price'><span class='price-label'>Seminargebühr:</span> <span class='price-value'>{event.price.match(/\s\d+\sEuro/g)} je Teilnehmer*in</span></div>
        {/if}
        
        <ul>
        {#each event.dates as date}

            <li><a href="/anmelden/{date.bookingPageUrl.match(/\/merakita\/.+/g)[0].slice(10)}">
                <div class="flush-left">
                    <div class='event-number'>{date.terminnr}</div>

                    <div class='event-day'>{date.datum}</div>
                
                </div>
                <div class='flush-right'>
                    <div class='event-time'>{date.timeRange}</div>

                    <div class='attendance'><OnlineOderPraesenz select={date.attendanceType} /></div>
                
                    <div class='anmelden-und-arrow'>
                        <div class='anmelden'>Anmelden</div> 
                        <svg class='arrow' width="16" height="16">
                        <path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M9.11458 11.5121L11.6146 8.51215L12.0414 8L11.6146 7.48785L9.11458 4.48785L7.88542 5.51215L9.29197 7.2L4 7.2V8.8L9.29197 8.8L7.88542 10.4879L9.11458 11.5121Z"></path>
                    </svg>

                    </div>

                </div>
            </a></li>
        {/each}
        </ul>

    </div>
</div>




<style>

    .title-and-letter {
        display: flex;
        gap: 50px;
        align-items: center;
        justify-content: space-between;
    }


    #headline {
        padding-bottom: 15px;
    }

    #content {
        padding-top: 0px;
    }

    .event-title {
        font-size: 17px;
        margin-top: 0px;
        font-weight: 500;
        letter-spacing: .03em;
    }

    .description, .description p {
        font-weight: 300;
        font-size:  16px;
    }

    .ausschreibung {
        padding-bottom: 35px;
        color: var(--dark-blue);
    }

    .referent, .price {
        font-size:  19px;
        padding-bottom: 5px;
    }

    .referent-label, .price-label {
        font-weight: 600;
        color: var(--red-list);
    }

    
    @media (min-width: 345px) {
        .event-title {
            font-size: 25px;
        }

        .description, .description p {
            font-size: 17px;
        }
    }

    @media (min-width: 500px) {
        .event-title {
            font-size: 35px;
        }
        .description, .description p {
            font-size: 20px;
        }

    }


    /* LIST OF DATES  */

    ul {
        margin-top: 50px;
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
    }

    li a:hover {
        /*border: 1px solid var(--hover-border);*/
        background-color: #FBF7EF;
    }


    .flush-right {
        flex:  0 0 50%;
        display: flex;
        flex-direction:  row;
        align-items: center;
        justify-content:  space-between;
    }

    .flush-left {
        flex: 0 0 50%;
        display: flex;
        flex-direction:  row;
        align-items: center;
        /*justify-content: space-between;*/
    }



    .event-number {
        flex: 0 0 30%;
        font-size: 18px;
        letter-spacing: .04em;
        font-weight: 300;
    }


    .event-day {
        flex:  0 0 100%;
        color: var(--dark-blue);
        font-weight: 400;
        font-size: 18px;
    }


    .event-time {
        /*flex: 0 0 5em;*/
        font-weight:  300;
        font-size: 18px;    
    }

    .attendance {
        padding-top: 5px;

    }


    .anmelden-und-arrow {
        display: flex;
        align-items: center;
        gap: 5px;
        margin-right: 15px;
    }

    .arrow {
        /*display: none;*/
    }

    .anmelden {
        /*color: var(--red-text);*/
        font-size: 18px ;
        font-weight: 400;
    }


/*
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
*/


</style>