<svelte:head>
    <title>Copyright</title>
</svelte:head>

<script>
    import { onMount } from 'svelte';

    onMount(() => {
       document.documentElement.setAttribute('data-theme', 'white-gray');
    });
</script>


<div id='headline'>
    <div class='wrapper-inner'>
        <h1>Copyright</h1>
    </div>
</div>

<div id='content'>

    <div class='wrapper-inner'>

        <p>
        Die durch Simone Gottwald-Blaser erstellten Inhalte auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede weitere Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der Seitenbetreiberin.
        </p>

    </div>

</div>


<style>
    #content {
        padding-top: 10px;
    }


    #headline {
        padding-bottom: 0px;
    }


</style>