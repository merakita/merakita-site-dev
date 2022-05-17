<script context="module">
    export const prerender = true;
</script>


<svelte:head>
    <title>Home</title>
</svelte:head>

<script>
    import { onMount } from 'svelte';
    onMount(() => {
       document.documentElement.setAttribute('data-theme', 'blue')

    });

    export let events;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };



</script>


<div id='headline'>
    <div class='wrapper-inner'>
        <div id='title-container'>
            <img id='logo' alt='merakita' src='logo_wwhite.svg'>
            <!-- <img id='logo' alt='merakita' src='logo_white_thinfont.svg'> -->
            <!-- <h1 id='title'>merakita</h1>  -->
            <!-- <span id='subtitle'><br>Werkstatt für kindorientierte Pädagogik</span> -->
        </div>
    </div>
</div>


<div id='content'>
    <section id='recent'>
        <div class='wrapper-inner'>
            <h3>Anstehende Veranstaltungen</h3>
            <ul>
            {#each events.dates as event}
                <li><a rel='prefetch' href='/veranstaltungen/{event.eventId}'>
                        <div class='align-at-borders'>
                            <div class='entry-date'>{new Date(event.beginDate).toLocaleDateString('de-DE', options)}<br></div>
                            <div class='entry-title'>{event.title[0].value}</div>
                            <div class='entry-facil'>{event.facilitators[0].title.length > 0 ? event.facilitators[0].title + " " + event.facilitators[0].name : event.facilitators[0].name}</div>
                            <!-- <div class='entry-descr'>{event.attendanceType}</div> -->
                        </div>
                </a></li>
            {/each}    
            </ul>
            <div id="showall">
                <a href="/termine">
                    <div>Zeige alle</div>
                    <svg class='arrow' width="16" height="16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M9.11458 11.5121L11.6146 8.51215L12.0414 8L11.6146 7.48785L9.11458 4.48785L7.88542 5.51215L9.29197 7.2L4 7.2V8.8L9.29197 8.8L7.88542 10.4879L9.11458 11.5121Z"></path>
                    </svg>
            </a></div>
        </div>
    </section>


    <!-- <section class='part'> -->
        <!-- <div class='wrapper-inner'> -->
            <!-- <h3>Ganz- und mehrtägige Fortbildungen</h3> -->
            <!-- <ul> -->
            <!-- {#each events as event}
                <li><a rel='prefetch' href='/veranstaltungen/{event.eventId}'>
                        <div class='align-at-borders'>
                            <div class='entry-title'>{event.title}</div>
                            <div class='entry-descr'>some description</div>
                        </div>
                        <svg class='arrow' width="16" height="16" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M9.11458 11.5121L11.6146 8.51215L12.0414 8L11.6146 7.48785L9.11458 4.48785L7.88542 5.51215L9.29197 7.2L4 7.2V8.8L9.29197 8.8L7.88542 10.4879L9.11458 11.5121Z"></path>
                        </svg>
                </a></li>
            

            {/each}
 -->                
      <!--       </ul>
        </div>
    </section>

 -->

</div>


<style>


    #title-container {
        margin-top:  50px;
        margin-bottom:  70px;
        display: flex;
        align-items: center;
        /*flex-wrap: wrap;*/
        /*flex-direction: column;*/
    }

    #logo {
        width: 100%;
        padding-left: 10px;
        padding-right:  10px;
    }

    #title {
        color: var(--light-gray);
        /*margin-top: 35px;*/
        font-size:  6em;
    }

    #subtitle {
        display: block;
        color: var(--light-gray);
        font-size: 1.2em;
        font-family: var(--sans-serif);
        text-transform: uppercase;
        font-weight: 300;
        line-height: 1.5em;
        letter-spacing: .15em;
        max-width:  200px;
        margin-bottom:  0px;
        margin-left: 5em;
        margin-bottom:  1.6em;

    }
    

    @media (min-width: 700px) { 

        #logo {
            width: 100%;
            padding-left: 130px;
            padding-right:  130px;
        }

        #title {
            /*max-width: 70%;*/
            font-size: 7em;
        }

    }





    /* ======================
    bevorstehende veranstaltungen
    ======================== */

    #recent {
        padding-top:  50px;
        padding-bottom:  50px;
        background-color: var(--dark-blue);
    }

    #recent h3{
        margin-top: 10px;
        margin-bottom: 0px;
        font-size: 14px;
        font-weight: 400;
        color: var(--yellow-text);
        font-family: var(--sans-serif);
    }

    #showall {
        margin-bottom: 0px;
        font-size: 14px;
        font-weight: 400;
        color: var(--light-gray);
        font-family: var(--sans-serif);
    }

    #showall a {
        text-decoration:  none;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    #showall a:hover {
        color:  var(--yellow-text);
    }

    #recent ul {
        margin-top: 5px;
        line-height: 1.5;
        list-style: none; 
        padding-left: 0px;
        /*width:  100%;*/
        /*height: auto;*/
        display:  flex;
        flex-wrap: wrap;
        gap: 10px 20px;

    }

    #recent li {
        flex: 1 0 calc(33% - 40px);
        margin-top: 15px;
    }
    #recent li a {
        text-decoration: none;
        font-weight: 600;
        display: flex;
        /*align-items: center;*/
        border-radius: 5px;
        margin: 0;
        padding: 0px;
        padding-bottom: 20px;
        background-color: #F6F1E8;
        /*border: 1px solid var(--medium-gray);*/
        min-height: 200px;
        /*box-shadow: 3px 2px 10px #333;*/
    }

    .entry-title{
        padding-left: 15px;
        padding-right:  15px;
        padding-top:  15px;
        color: var(--dark-blue);
        font-size: 15px;
        font-weight: 500;
        line-height: 19px;
        font-family: var(--sans-serif);
        background-color: #F6F1E8;
        /*font-weight:  500;*/

    }

    .entry-descr{
        background-color: #fff;
        color: var(--dark-blue);
        font-weight: 300;
        font-size: 11px;
        letter-spacing: .02em;
        padding-left: 15px;
        padding-right: 15px;
    }

    .entry-date {
        padding:  15px;
        color: var(--dark-blue);
        background-color: #FEFFFF;
        font-weight: 400;
        font-size: 16px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        /*letter-spacing: .01em;*/
        /*border-bottom: 1px solid #E8E8E8;*/
    }

    .entry-facil {
        font-weight: 400;
        font-size: 16px;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 10px;
        color:  var(--dark-blue);
        background-color: #F6F1E8;
    }

    @media (min-width: 380px) {
        #recent h3 {
            margin-top: 10px;
            margin-bottom: 10px;
            font-size: 16px;
            /*font-size: 32px;*/
        }
        #recent ul {
            margin-top: 10px;
            margin-bottom: 20px;
        }
        .entry-title {
            font-size: 19px;
            line-height: 24px;
        }
        .entry-descr {
            font-size: 12px;
        }
    }

    
    #recent li a:hover .entry-title {
        /*border: 1px solid var(--hover-border);*/
        background-color: var(--yellow);
        /*background-color: var(--var-background);*/
    }

    #recent li a:hover .entry-facil {
        /*border: 1px solid var(--hover-border);*/
        background-color: var(--yellow);
        /*background-color: var(--var-background);*/
    }

    #recent li a:hover {
        background-color: var(--yellow);
    }

    #recent li a:hover .entry-date {
        /*border: 1px solid var(--hover-border);*/
        background-color: #FFFAF3;
        /*background-color: var(--var-background);*/
    }


    .arrow {
        min-width: 10px;
        padding-left: 5px;
        padding-top: 2px;
    }

   /* .align-at-borders{
        flex-grow: 4;
    }*/


    /* ======================
    Parts
    ======================== */

    .part {
        background-color: #fff;
    }

    .part h3 {
        padding-top: 50px;
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: 600;
        color: var(--var-red);
        font-family: var(--sans-serif);
    }
    .part ul {
        margin-top: 5px;
        margin-bottom: 40px;
        line-height: 1.5;
        list-style: none; 
        padding-left: 0px;
        /*width:  100%;*/
        /*height: auto;*/

    }



</style>