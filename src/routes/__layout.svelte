<script>
    import '../app.css';
    import Header from '../lib/Header.svelte';
    import Footer from '../lib/Footer.svelte';
</script>


<div class='Site'>

    <Header />

    <main>
        <slot />
    </main>

    <Footer />

</div>

<style>

    .Site {
        display: flex;
        justify-content: flex-start;
        min-height: 100vh;
        flex-direction: column;
    }

    main {
        flex: 1;
        width: 100%;
        padding: 0;
    }

    :global(.wrapper-inner) {
        /*max-width: 840px; */
        max-width: 940px; 
        margin-left: auto;
        margin-right:auto;
        padding-left: 15px;
        padding-right: 15px;
    }
    
    @media (min-width: 380px) {
        :global(.wrapper-inner) {
            padding-left: 20px;
            padding-right: 20px;
        }
    }

    @media (min-width: 500px) {
        :global(.wrapper-inner) {
            padding-left: 30px;
            padding-right: 30px;
        }
    }

    /****** HEADLINE AND CONTENT SPACING *******/

    :global(#headline) {
        padding-top: 50px;
        padding-bottom: 30px;
        background-color: var(--nav-background);
    }

    :global(#content) {
        padding-top: 0px;
    }


    :global(h1) {
        font-size: 30px;
        font-family: var(--sans-serif);
        font-weight: 600;
        color: var(--dark-blue);
        margin-bottom: 20px;
        text-transform: uppercase;
    }   
    
    :global(h2) {
        font-size: 18px;
        font-family: var(--serif);
        font-weight: 400;
        color: var(--dark-blue);
        line-height: 28px;
    }

    @media (min-width: 350px) {
        :global(h2) {
            font-size: 20px;
            line-height: 33px;
        }
    }   

    @media (min-width: 500px) {
        :global(#headline) {
            padding-top: 150px;
            padding-bottom: 50px;
            background-color: var(--nav-background);
        }
        :global(#content) {
            padding-top: 0px;
        }
        :global(h1) {
            font-size: 30px;
            font-weight: 700;
            margin-bottom: 20px;
        }   
        :global(h2) {
            font-size: 22px;
            line-height: 35px;
        }   
    }   


    /****** CONTENT FORMATTING *******/

    :global(#content p){
        /*color: var(--dark-blue);*/
        font-family: var(--paragraph-font-family);
        /*font-size: 15px;*/
        /*line-height: 1.7em;*/
    }

    @media (min-width: 350px) {
        :global(#content p){
            /*font-size: var(--paragraph-font-size);*/
            /*line-height: 1.8em;*/
        }
        :global(h3) {
            font-size: 30px;
        }
    }

    :global(h3) {
        font-size: 25px;
        font-family: var(--sans-serif);
        font-weight: 700;
        color: var(--dark-blue);
        /*text-transform: uppercase;*/
        /*font-size: 23px;*/
    }



    :global(.emph), :global(.emph-red) {
        font-weight: 600;
        font-style: italic;
        color: var(--dark-blue);
    }

    :global(.emph-red) {
        color: var(--red-list);
    }


    :global(.heartbullet) {
        list-style-image:  url("/herz.svg");
        padding-left: 28px;
    }

    :global(.heartbullet li) {
        padding-left: 10px;
    }


    :global(.nobullet) {
        list-style-type: none;
        padding-left:  0;
    }

    
</style>
