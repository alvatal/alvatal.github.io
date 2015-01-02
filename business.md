---
layout: page
title: Meie võrgustiku ettevõtted
---

<p>
Altavatali asutajateks on mitmed tuntud Eesti ettevõtted, kelle eesmärgiks
oli pakkuda vabal tarkvaral põhinevaid lahendusi vähendades seeläbi
litsentsikulusid ning austades tarkvara kasutaja privaatsust.
Käesoleval lehel võite tutvuda meie liikmeks olevate äriühingutega
kes on valmis teid aitama sülarvuti valikust kuni IKT-taristu 
arhitektuuri projekteerimiseni.
</p>

<p>
Otsi ettevõtet märksõnade järgi: <input id="search" type="search" onSearch="filter();" placeholder="koolitus, serverid, Linux"/>
</p>

<p>
<a class="btn btn-default" onClick="$('#search').val('kooli').trigger('search');" role="button">Koolitus</a>
<a class="btn btn-default" onClick="$('#search').val('riist').trigger('search');" role="button">Riistvara</a>
<a class="btn btn-default" onClick="$('#search').val('arendus').trigger('search');" role="button">Arendus</a>
<a class="btn btn-default" onClick="$('#search').val('ubuntu').trigger('search');" role="button">Ubuntu</a>
<a class="btn btn-default" onClick="$('#search').val('debian').trigger('search');" role="button">Debian</a>
<a class="btn btn-default" onClick="$('#search').val('red hat').trigger('search');" role="button">Red Hat</a>
<a class="btn btn-default" onClick="$('#search').val('centos').trigger('search');" role="button">CentOS</a>
</p>

<script type="text/javascript">
function filter() {
    var query = $("#search").val().toLowerCase();
    $(".col-md-6").each(function(i,e) {
        var fragment = $(e).html().replace("&shy;", "").toLowerCase();

        if (fragment.indexOf(query) >= 0) {
            $(e).css("opacity", "");
        } else {
            $(e).css("opacity", "0.1");
        }
    });
}
</script>


<div class="row" lang="et">
    <div class="col-md-6" id="atrauma">
        <h2>Arvuti Traumapunkt OÜ</h2>
        <p>Meie motoks on: "Legaalne tark&shy;vara ja kompetentne personal on
        stabiilse ning jätku&shy;suutliku äri alus&shy;taladeks!" Meie kliendid on valinud
        oma IT partneriks Arvuti Traumapunkti, sest ettevõte suudab pakkuda hooldus&shy;teenust
        läbi mitme&shy;külgse ja kompetentse personali. Arvuti Traumapunk on üks väheseid
        Eesti kapitalil põhinevaid IT ette&shy;võtteid, kes on keskendunud toetama
        lisaks äri&shy;tark&shy;varale ka vaba tark&shy;vara.
        Pakume IT alast arvutihooldusteenust <b>Põhja-Eestis, Tartus, Pärnus ja
        Raplas 24h</b> ööpäevas.
        </p>
        <a class="btn btn-default" href="http://www.atrauma.ee/" role="button">Loe lähemalt &raquo;</a>
    </div>
    <div class="col-md-6" id="active">
        <h2>Active Systems OÜ</h2>
        <p data-keywords="red hat|opennode">Active Systems OÜ on asutatud 2003. aastal Pärnus ja põhineb Eesti
        kapitalil. Active Systems OÜ eesmärgiks on pakkuda erinevaid IT alaseid
        teenuseid ette&shy;võtetele ja teistele orga&shy;nisa&shy;tsiooni&shy;dele.
        Meie peamisteks tegevus&shy;vald&shy;kondadeks on info&shy;süsteemide loomine ja
        haldamine ning veebi&shy;lahenduste projek&shy;teerimine, juurutamine ning majutus.
        OÜ Active Systems klientide hulka kuuluvad Eesti Energia AS, Pärnu Linnavalitsus, Tallinna Ülikool, Tartu Ülikooli Pärnu Kolledž, AS Port Artur Grupp, Pärnu Konverentsibüroo, AS Eesti Krediidipank, jpt.
        </p>
        <a class="btn btn-default" href="http://www.active.ee/" role="button">Loe lähemalt &raquo;</a>
    </div>
</div>


<div class="row" lang="et">
    <div class="col-md-6" id="povi">
        <h2>Povi Software OÜ</h2>
        <p>Povi pakub Odoo baasil ettevõtte ressursiplaneerimistarkvara.</p>
        <a class="btn btn-default" href="http://www.povi.ee/" role="button">Loe lähemalt &raquo;</a>
    </div>
    <div class="col-md-6">
        <h2 style="color:red;">Sinu ettevõte</h2>
        <p>
        Avatud lähtekoodiga sina peal oleva ettevõttena eeldame, et oled
        kursis Git versioonihalduse ning GitHub keskkonnaga.
        Enne formaalselt liikmeks astumist oled teretulnud lisama oma ettevõtte
        kirjelduse käesolevasse nimistusse.
        </p>
        <a class="btn btn-default" href="https://github.com/alvatal/alvatal.github.io/blob/master/business.md" role="button">GitHub varamusse &raquo;</a>
    </div>
    

</div>


<div class="row" lang="et">
    <div class="col-md-6" id="pingviinitiivul">
        <h2>Pingviinitiivul OÜ</h2>
        <p>Pingviinitiivul vabavaraliste kliendihaldusprogrammide
        paigaldust ja kohaldamist, tarkvara arendust, väikefirma võrkude
        planeerimist ning Linux serverite haldust.
        Arvutiteenuseid pakume fookusega <b>Lääne-Tallinnas</b>.
        </p>
        <a class="btn btn-default" href="http://www.pingviinitiivul.ee/" role="button">Loe lähemalt &raquo;</a>
    </div>
    <div class="col-md-6" id="intraflex">
        <h2>Intraflex OÜ</h2>
        <p>
        Intraflex OÜ on 2007 aastast Eesti IT-turul tegutsev oma ala ekspertide
        poolt loodud ettevõte, kelle eesmärgiks on pakkuda kiiret ja head
        infotehnoloogiliste lahenduste hooldust. Intraflex on spetsialiseerunud
        vaid IT-alaste teadmiste ja oskuste pakkumisele ning on seetõttu sama
        usaldusväärne ja erapooletu partner kui ärikliendi oma töötaja.
        Oleme oma professionaalse teenindusega tuntust kogunud nii
        rahvusvaheliste kui kohalike ettevõtete hulgas.
        </p>
        <a class="btn btn-default" href="http://www.intraflex.eu/" role="button">Loe lähemalt &raquo;</a>
    </div>
</div>

<div class="row" lang="et">
    <div class="col-md-6" id="nordtech">
        <h2>Nordtech OÜ</h2>
        <p>
        Arvutiseerunud maailmas on vabavara ettevõtlikkuse parim abiline,
        võimaldades lihtsalt ja odavalt omi realiseerida ideid tarkvaras. 
        Meie tunneme vabavara, teame parimaid projekte ja leiame vaba tarkvara
        laiast maailmast just teile sobivad lahendused
        </p>
        <a class="btn btn-default" href="http://www.nordtech.ee/" role="button">Loe lähemalt &raquo;</a>
    </div>
    <div class="col-md-6" id="nex">
        <h2>Nex Data Systems</h2>
        <p>
        Nex Data Systems on Pärnus arvutihooldust pakkunud oma klientidele juba
        üle 15 aasta. Aitame Teie servereid ja arvuteid töökorras hoida ka
        firmasse IT-spetsialisti palkamata. Teie arvutisüsteemide tõrgeteta
        töö garanteerivad meie spetsialistid. 
        Meilt saate abi ka kõigis kodulehekülgi puudutavates muredes.
        Aitame luua nii uusi  lihtsalt hallatavaid kodulehekülgi kui ka
        keerukamaid veebilahendusi. Samuti abistame juba olemasolevate
        kodulehekülgede uuendamisel ja täiendamisel.
        Pakume oma klientidele ka virtuaalserveri teenust veebilahenduste
        majutamiseks meie oma hostinguserveris.
        Veebilahenduste loomisel kasutame peamiselt Typo3 platvormi.
        </p>
        <a class="btn btn-default" href="http://www.nex.ee/" role="button">Loe lähemalt &raquo;</a>
    </div>  
</div>

<div class="row" lang="et">
    <div class="col-md-6" id="zeroconf">
        <h2>Zeroconf OÜ</h2>
        <p>
        Zeroconf OÜ peamine suund on vabatarkvaraliste lahenduste ja
        koolituste pakkumine. Sageli inimesed ei tea, mis on vabavara ja
        vaba tarkvara ning mis on nende vahe - seetõttu on vajalik siin
        selgitustöö ja koolitus, et säästa tarkvaralitsentside pealt ja
        efektiivselt rakendada vabatarkvaralisi lahendusi nii ärilistel
        eesmärkidel kui ka erakasutuses.
        </p>
        <a class="btn btn-default" href="http://www.zeroconf.ee/" role="button">Loe lähemalt &raquo;</a>
    </div>
    <div class="col-md-6" id="koodur">
        <h2>Koodur OÜ</h2>
        <p>
        Koodur OÜ on 2013 aastal asutatud Eesti kapitalil põhinev firma, mis 
        pakub keerukatele taristu probleemidele lihtsaid lahendusi.
        Meie kompetentsi kuuluvad:  tule&shy;müürid, virtuaal&shy;privaat&shy;võrgud,
        autenti&shy;mine, autori&shy;seerimine, kesk&shy;haldus,
        Python tarkvaraarendus, PostgreSQL andmebaasid, Debian/Ubuntu jaoks
        tarkvara pakendus ning levitamine.
        Pakume nimetatud teemades ka koolitusi algajatele.
        Koodur OÜ tegutseb peamiselt <b>Tallinnas</b>.
        Meie klientide hulka kuuluvad
        Eesti Info&shy;tehno&shy;loogia Kolledž,
        Eesti Rahvus&shy;raamatu&shy;kogu,
        Välis&shy;ministeerium,
        Tallinna Haridus&shy;amet,
        Elering AS, Helmes AS jpt.
        </p>
        <a class="btn btn-default" href="http://www.koodur.com/" role="button">Loe lähemalt &raquo;</a>
    </div>
</div>


<div class="row" lang="et">
    <div class="col-md-6" id="teknet">
        <h2>Elfluido OÜ</h2>
        <p>
        Elfluido IT Teenused on Elfluido OÜ alla kuuluv ettevõte, mille
        peamine ülesanne on pakkuda erinevaid arvutialaseid teenuseid nii
        ettevõtetele kui ka eraisikutele erinevate arvutialaste probleemide
        lahendamisel ning uute lahenduste juurutamisel.
        Aastast 2007 oleme olnud abiks paljudele ettevõtetele ja eraisikutele
        pakkudes tugiteenuseid lepingute või väljakutsete alusel ning aidanud 
        kaasa mitmete võrkude ja arvutiparkide loomisel, haldamisel ning arendamisel.
        Soovime olla abiks
        tühimiku täitmisel, mis tekib siis, kui pole võimalik hoida põhikohaga
        tööl oma spetsialisti, kes igapäevaselt aitab murede ja probleemide
        lahendamisel või puudub isik, kelle poole pöörduda töövälisel ajal
        koduse arvuti parandamisel.
        </p>
        <a class="btn btn-default" href="http://it.elfluido.ee/" role="button">Loe lähemalt &raquo;</a>
    </div>
    <div class="col-md-6" id="ppnet">
        <h2>PP Electronics OÜ</h2>
        <p>
        PP Electronics OÜ on Pärnus registreeritud ettevõtte.
        </p>
        <a class="btn btn-default" href="http://www.ppnet.ee/" role="button">Loe lähemalt &raquo;</a>
    </div>

</div>

<div class="row" lang="et">
    <div class="col-md-6" id="teknet">
        <h2>Teknet Arvutid OÜ</h2>
        <p>
        Teknet on Viljandis registreeritud ettevõte, mis keskendub
        SQL-Ledger baasil raamatupidamislahenduste pakkumisele.
        </p>
        <a class="btn btn-default" href="http://www.teknet.ee/" role="button">Loe lähemalt &raquo;</a>
    </div>


</div>







