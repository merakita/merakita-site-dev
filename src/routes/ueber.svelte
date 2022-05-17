<svelte:head>
    <title>Über</title>
</svelte:head>

<script>
    import { onMount } from 'svelte';

    import dozenten from './_dozenten.js';

    onMount(() => {
       document.documentElement.setAttribute('data-theme', 'white-grayfoot');
    });
</script>


<div id='headline'>
    <div class='wrapper-inner'>
        <!-- <h1>über</h1> -->
        <h2>merakita</h2>
    </div>
</div>




<div class='content-about' id='intro'>

    <div class='wrapper-inner'>

        <p><span class='emph'>meraki</span> ist ein griechischer Begriff, für den es keine direkte Übersetzung ins Deutsche gibt. Er bedeutet: Etwas mit Liebe, Engagement und Kreativität machen. Etwas von sich selber, sein sprichwörtliches Herzblut in seine Arbeit geben. <span class='emph'>merakita</span> ist der indonesische Begriff für „montieren“.</p> 

        <p>Und beides zusammen? Beides zusammen ist der Name eines lange gehegten Traumes, der nun Wirklichkeit wird: <span class="emph">merakita</span> <span class="emph-red">Werkstatt für kindorientierte Pädagogik</span> öffnet ihre Tür für all jene, die mit Engagement und Leidenschaft Kinder betreuen und Lust haben, an ihrem eigenen Wissen, ihrer Haltung, ihrem Arbeitsalltag, den strukturellen Gegebenheiten und anderen Baustellen im Bereich der Kindertagesbetreuung herum zu <span class="emph">montieren</span>.</p>

<!--         <p>Im dritten Jahr der Corona-Pandemie, in der die Kolleg*innen in den Kindertageseinrichtungen und der Kindertagespflege so ausdauernd und „tapfer“ die Stellung gehalten haben, möchte <span class="emph">merakita</span> <span class="emph-red">Werkstatt für kindorientierte Pädagogik</span> ein Treffpunkt für all diejenigen sein, die ihren Beruf immer noch und trotz allem als ihre „Berufung“ sehen und auch in diesen anfordernden Zeiten jeden Tag aufs Neue ihr Herzblut in die Arbeit mit Kindern stecken.</p>

        <p>Im zweiten Halbjahr 2022 richtet sich der Fokus unserer Fortbildungsangebote auf Themen, die gerade in dieser Zeit als bedeutsam erscheinen:</p>

        <ul>
            <li><i>Die Kindertageseinrichtung als Raum für Gefühle, Bedürfnisse und positive Beziehungen:</i> Eigene und kindliche Gefühle und Bedürfnisse erkennen und Wege finden, diesen auch unter schwierigen Rahmenbedingungen möglichst gerecht zu werden.</li>
            <li><i>Die Kindertageseinrichtung als Schutz- und Kompetenzraum:</i> Jede Form der Gewalt im Kita-Alltag vermeiden, alle Maßnahmen hierfür in einem institutionellen Schutzkonzept verankern und wissen, was bei Verdacht auf Kindeswohlgefährdung außerhalb der Einrichtung zu tun ist.</li>
            <li><i>Im Kita-Alltag gut für sich selber sorgen:</i> Auch und gerade in Zeiten in herausfordern Situationen eigene Kraftquellen finden, gut für sich selber sorgen und auftanken, denn auch für Erzieher*innen gilt:</li>
        </ul>

        <p>Neben eigenen Fortbildungen freue ich mich, für diese Themen auch geschätzte Referent*innen bei <span class="emph">merakita</span> begrüßen zu dürfen und hoffe, dass so auch genau das Thema dabei ist, das Ihnen derzeit auf der Seele brennt.</p> -->

    </div>
</div>




<div class="content-about"  id='referentinnen'>
    <div class='wrapper-inner'>
    <h3>Die Referent*innen bei <em>merakita</em></h3>
    <ul>
        {#each dozenten as dozent}
            <li>
                <div class='ref-name'>{dozent.name}</div>
                <div class='ref-beruf'>{dozent.berufsbez}, {dozent.berufUndOrt}</div>
                <!-- <div class='ref-ort'>{}</div> -->
            </li>
        {/each}
    </ul>
    </div>
</div>



<div class="content" id="wichtig">
    <div class='wrapper-inner'>


    <h3>WAS SIE BEI <span class='bold-italic'>MERAKITA WERKSTATT FÜR KINDORIENTIERTE PÄDAGOGIK</span> ERWARTET</h3>

    <h4>WAS IST UNS FACHLICH UND METHODISCH WICHTIG?</h4>

    <ul class='heartbullet'>
        <li>Unsere Referent*innen sind <em>qualifiziert und erfahren</em>. Sie haben einen guten Einblick in die „Kita-Praxis“ und stehen mit Herzblut und Leidenschaft für ihre Themen.</li>

        <li>Unsere Seminare vermitteln aktuelles, fachlich fundiertes und praxisrelevantes <em>Fachwissen</em>, lassen aber immer <em>Raum für Übung</em>, <em>Austausch und (Selbst-) Reflexion</em>, so dass sich Ihre Handlungs- kompetenzen weiterentwickeln dürfen und Sie gestärkt aus der Veranstaltung gehen.</li>

        <li>Wir geben Ihnen keine „Lösungen“ vor, denn Sie sind die Expert*innen für sich, Ihre Kinder, Ihre Kita und Ihren Kita-Alltag. Wir machen uns <em>gemeinsam auf den Weg</em>, tragen unser Wissen zusammen, montieren an dem herum, wo wir Verbesserungs-Potenzial sehen.</li>

    </ul>



    <h4>WAS IST UNS MENSCHLICH WICHTIG?</h4>

    <ul class="nobullet"> 
        <li><em>Freiwilligkeit:</em> Jede*r kann, niemand muss. Bei allen Angeboten zum Austausch und zur Reflexion entscheiden Sie selber, wie weit Sie mitgehen oder sich öffnen möchten. Die Teilnahme an Kleingruppen oder anderen Methoden ist immer freiwillig.</li>

        <li><em>Ein wertschätzendes Miteinander:</em> Unterschiedliche Meinungen sind Willkommen und werden als Ressource gesehen, die uns
in unserem Denken weiterbringen kann, aber nicht muss. Ausnahme: Bei merakita gibt es keinen Raum für Diskriminierung von Menschen und für Haltungen, die der Würde des Menschen und unserer demokratischen Grundordnung entgegenstehen. Dies gilt vor allem für rechtsextreme, sexistische, homophobe oder rassistische Positionen.</li>

        <li><em>Parteilichkeit für Betroffene:</em> Bei Fortbildungen, die (sexualisierte) Gewalt thematisieren, stehen wir parteilich auf der Seite der Betroffenen. Die Verantwortung für den Schutz von Kindern
und das Handeln bei Verdacht sehen wir bei den erwachsenen Bezugspersonen von Kindern, denn: Kein Kind kann sich
alleine schützen!</li>

        <li><em>Spaß und Wohlbefinden:</em> <span class='emph-white'>merakita Werkstatt für kindorientierte Pädagogik</span> möchte ein Ort sein, an dem Sie sich wohlfühlen und den Sie gerne besuchen! Unsere Seminare sollen so kurzweilig und praxisnah gestaltet sein, dass Sie am Abend zufrieden in den Feierabend gehen können. Sollte dies einmal nicht der Fall sein und Sie möchten sich nicht direkt
am Seminartag dazu äußern: Bitte melden Sie sich gerne telefonisch oder per Mail an <a href="mailto:kontakt@merakita.de">kontakt@merakita.de</a>. Konstruktive Beschwerden sind ausdrücklich und jederzeit erlaubt
und erwünscht.</li>

        <li><em>Geschützter Raum:</em> Bei <span class='emph-white'>merakita Werkstatt für
kindorientierte Pädagogik</span> sollen sie immer die Möglichkeit haben, in einem geschützten Rahmen ins Gespräch zu kommen. Die Teilnehmer*innen verpflichten sich, die im Rahmen von Seminaren besprochenen Themen vertraulich zu behandeln.</li>

    </ul>

    <h4>WAS DÜRFEN SIE ORGANISATORISCH ERWARTEN?</h4>

    <ul class='nobullet'>

        <li><b>Präsenzveranstaltungen</b>
            <ul class='heartbullet'>
                <li>Der Raum ist ca. 20 Minuten vor Veranstaltungsbeginn geöffnet damit Sie <em>in Ruhe</em> ankommen können.</li>
                <li>Es stehen Ihnen Wasser, Tee und Kaffee sowie (bei über 3-stündigen Seminaren) kleine <em>Snacks</em> zur Verfügung.</li> 
                <li>Sie erhalten ein <em>Handout</em> mit den wichtigsten Erkenntnissen sowie eine Teilnahmebestätigung.</li>
            </ul>

        <li><b>Online-Veranstaltungen</b>
            <ul class='heartbullet'>
                <li>Wir senden den <em>Link</em> zur Online-Plattform etwa eine Woche vor der Veranstaltung an die angegebene E-Mail-Adresse.</li>
                <li>Sie erhalten ein <em>gedrucktes Handout</em> sowie eine Teilnahmebestätigung per Post an die angegebene Adresse.</li>
                <li>Sie können vorab einen <em>Technik-Check</em> vereinbaren, wenn Sie unsicher sind, ob alles funktioniert.</li>
                <li>Wenn nötig, können Sie gerne eine <em>Webcam</em> bei uns ausleihen.</li>
            </ul>
        </li>
    </ul>

    </div>

</div>




<div class="content-about" id="outro">

    <div class='wrapper-inner'>

        <p>Ich würde mich sehr freuen, Sie bald bei <span class="emph">merakita</span> <span class="emph-red">Werkstatt für kindorientierte Pädagogik</span> begrüßen und kennenlernen zu dürfen und mich gemeinsam mit Ihnen auf den Weg zu machen, Kindertagesbetreuung in den Fokus zu rücken und an manchen Stellen vielleicht sogar neu zu denken.</p>


        <p>Herzliche Grüße, <br>Simone Gottwald-Blaser</p> 
        

        <div id='me'>
            <h3>Zu mir</h3>
            <img alt='portrait' src='sim.png'>
            <h5>Simone Gottwald-Blaser</h5>  
            <p>Seit Abschluss meines Magister-Studiums an der Ludwig-Maximilians-Universität München in Pädagogik mit Nebenfach Psychologie und Europäische Ethnologie im September 2011 arbeite ich als Dozentin in der Aus- und Fortbildung von Kinderpfleger&#42;innen, Erzieher&#42;innen und Tagespflegepersonen. Unter anderem war ich von 2014 bis 2020 pädagogische Mitarbeiterin bei AMYNA, Institut zur Prävention von sexuellem Missbrauch in München, sowie von 2017 bis 2019 als Fachdienst Kindertagespflege beim Landratsamt Neu-Ulm tätig. Seit September 2019 arbeite ich als Fachberaterin bei der Abteilung KITA der Stadt Ulm.</p>   
        </div>


    </div>

</div>



<style>


    .emph-white {
        font-weight: 500;
        font-style: italic;
    }

    #headline {
        padding-bottom: 20px;
    }

    #headline h2 {
        font-family: var(--sans-serif);
        font-weight: 700;
        color: #D4BA92;
        font-size: 32px;
        font-style: italic;
    }
    .content-about p, .content-about ul {
        font-size: 20px;
        font-weight: 300;
    }

    .content-about p {
        color: var(--dark-blue);
    }

    .content-about { 
        padding-bottom: 0px;
        margin: 0;
    }




    li {
        padding-top: 20px;
    }


    h4 {
        text-transform: uppercase;
        font-size: 23px;
        font-family: var(--sans-serif);
        color: var(--dark-blue);
    }

    #intro {
        padding-bottom: 80px;
    }


    #referentinnen {
        background-color:  #E4CCAA;
        color: var(--dark-blue);
        padding-top: 90px;
        padding-bottom: 80px;
    }

    #referentinnen ul {
        list-style: none; 
        padding-left: 0;
    }

    .ref-name {
        color: var(--red-list);
        font-weight: 500;
        font-style: italic;
    }


    #referentinnen em {
        font-weight: 700;
    }

    #referentinnen h3 {
        color:  var(--dark-blue);
        font-weight: 500;
        text-transform: uppercase;
        font-size: 35px;
        letter-spacing: .04em;
        padding-bottom: 20px;
    }




    #wichtig {
        background-color:  #5A616F;
        color: #fff;
        padding-top: 90px;
        padding-bottom: 10px;
        margin: 0;
    }

    #wichtig h4 {
        color:  #fff;
        font-weight: 600;
        font-size: 25px;
        letter-spacing: .04em;
        padding-bottom: 0px;
        padding-top: 30px;
        margin-bottom: 0px;
    }

    #wichtig h3 {
        color:  var(--yellow-text-on-blue);
        font-weight: 500;
        font-size: 35px;
        letter-spacing: .04em;
        padding-bottom: 40px;
    }

    #wichtig ul {
        padding-bottom: 40px;
        font-weight: 200;
        font-size: 20px;
    }

    #wichtig em {
        font-weight: 500;
        color: var(--yellow-text-on-blue);
    }



    #outro {
        margin-top: 0px;
        margin-bottom: 0px;
        padding-top: 70px;
        padding-bottom: 40px;
        background-color: var(--light-gray);
    }



    #me {
        /*width: 100%;*/
        text-align: center;
        /*height: 400px;*/
        margin-top: 80px;
        margin-bottom: 60px;
        padding: 20px;
        background-color: #fff;
        color: var(--dark-blue);
        /*background-color: var(--var-background);*/
        border-radius: 10px;
    }

    #me p {
        font-size: 15px;
        font-weight: 300;
        color:  var(--dark-blue);
    }

    @media (min-width: 500px) {
        #me p {
            font-size: 17px;
        }
        #me {
            margin-bottom: 100px;        
            padding: 50px;
        }
    } 


    @media (min-width: 770px) {
        #me p {
            font-size: 19px;
        }
    } 

    #me h3 {
        margin-top: 10px;
        margin-bottom: 30px;
        font-size: 20px;
        color: var(--dark-blue);
    }

    #me h5 {
        margin-top: 30px;

        font-family:  var(--sans-serif);
        font-size: 20px;
        color: var(--red-list);
    }

    img {
        width: 100px;
        border-radius: 50%;
    }


    .bold-italic {
        font-style: italic;
        font-weight: 700;
    }

</style>