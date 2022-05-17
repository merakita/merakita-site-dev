<svelte:head>
    <title>Anmelden</title>
</svelte:head>


<script>

    export let bookingURL;

    import { onMount } from 'svelte';

    onMount(() => {
       document.documentElement.setAttribute('data-theme', 'white-booking');
    });


</script>


<div id="headline">

</div>


<div id='iframe-wrapper'>
<iframe src={bookingURL} frameborder="0" marginwidth="0" marginheight="0"></iframe>
</div>

<style>
    body {
        overflow:  hidden;
    }


    #headline {
        padding-top: 60px;
        padding-bottom: 0px;
    }

    #iframe-wrapper {
        padding: 0; 
        margin: 0; 
        width: 100%;
        height: 100%;
        overflow: scroll;
    }


    iframe {
        /*border:none;*/
        border-bottom: solid #DDDDDD 1px;  /* durchgezogene Linie, blaue Farbe, 10px Breite */
        border-top: solid #DDDDDD 1px;  /* durchgezogene Linie, blaue Farbe, 10px Breite */
        /*padding-top: 50px;*/
        width:100%;
        height: calc( 100% - 177px ); 
        position: absolute;
        /*height: 70%;*/
    }

</style>