---
title: ENAK
outline: deep
---

<style>
.status-led-table {
  width: 100%;
}

.status-led-table th:first-child,
.status-led-table td:first-child {
  width: 4.5rem;
  text-align: center;
  vertical-align: middle;
}

.status-led-table td {
  vertical-align: top;
}

.inventory-tables {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  align-items: start;
  margin: 1rem 0 1.5rem;
}

.inventory-table-card {
  min-width: 0;
}

.inventory-table-card h3 {
  margin-top: 0;
}

.inventory-table-card table {
  width: 100%;
  font-size: 0.9rem;
}

.inventory-table-card th,
.inventory-table-card td {
  padding: 0.45rem 0.55rem;
}

@media (max-width: 900px) {
  .inventory-tables {
    grid-template-columns: 1fr;
  }
}

.status-led-sample {
  display: inline-block;
  width: 1.45rem;
  height: 1.45rem;
  border-radius: 50%;
  vertical-align: middle;
  background: var(--led-a);
  box-shadow: 0 0 0.85rem var(--led-a);
}

.led-solid {
  animation: none;
}

.led-off {
  background: #000;
  border: 1px solid #64748b;
  box-shadow: none;
}

.led-breathe-05 { animation: led-breathe 0.5s ease-in-out infinite; }
.led-breathe-09 { animation: led-breathe 0.9s ease-in-out infinite; }
.led-breathe-12 { animation: led-breathe 1.2s ease-in-out infinite; }
.led-breathe-18 { animation: led-breathe 1.8s ease-in-out infinite; }
.led-double { animation: led-double 2s steps(1, end) infinite; }
.led-triple { animation: led-triple 2s steps(1, end) infinite; }
.led-pink-triple { animation: led-pink-triple 10s steps(1, end) infinite; }
.led-alternate-150 { animation: led-alternate 0.3s steps(1, end) infinite; }
.led-alternate-250 { animation: led-alternate 0.5s steps(1, end) infinite; }

@keyframes led-breathe {
  0%, 100% {
    opacity: 0.18;
    transform: scale(0.78);
    box-shadow: 0 0 0.25rem var(--led-a);
  }
  50% {
    opacity: 1;
    transform: scale(1);
    box-shadow: 0 0 1rem var(--led-a);
  }
}

@keyframes led-double {
  0%, 7.5%, 15.1%, 22.5% { opacity: 1; transform: scale(1); }
  7.6%, 15%, 22.6%, 100% { opacity: 0.08; transform: scale(0.78); }
}

@keyframes led-triple {
  0%, 6%, 12.1%, 18%, 24.1%, 30% { opacity: 1; transform: scale(1); }
  6.1%, 12%, 18.1%, 24%, 30.1%, 100% { opacity: 0.08; transform: scale(0.78); }
}

@keyframes led-pink-triple {
  0%, 1.2%, 2.41%, 3.6%, 4.81%, 6% { opacity: 1; transform: scale(1); }
  1.21%, 2.4%, 3.61%, 4.8%, 6.1%, 100% { opacity: 0.08; transform: scale(0.78); }
}

@keyframes led-alternate {
  0%, 49.9% {
    opacity: 1;
    background: var(--led-a);
    box-shadow: 0 0 0.85rem var(--led-a);
  }
  50%, 100% {
    opacity: 1;
    background: var(--led-b);
    box-shadow: 0 0 0.85rem var(--led-b);
  }
}

@media (prefers-reduced-motion: reduce) {
  .status-led-sample {
    animation-duration: 0.001ms;
    animation-iteration-count: 1;
  }
}
</style>

# Workshop ENAK pro 6. a 7. třídu

## Seznam součástí workshopu

Workhop je složen z 5 týmů, kdy každý z týmů dostane jeden kontrolní panel označený číslem týmu (se síťovým zdrojem a baterií) + svorku k uchycení panelu k lavici (černo růžová). Kromě toho také každý tým dostane sadu 3D vytištěných budov, elektráren a krajin.

<div class="inventory-tables">
  <section class="inventory-table-card">
    <h3>Budovy</h3>
    <table>
      <thead><tr><th>Budova</th><th>Na tým</th></tr></thead>
      <tbody>
        <tr><td>Bytové domy</td><td>3x</td></tr>
        <tr><td>Domečky</td><td>6x</td></tr>
        <tr><td>Farma</td><td>3x</td></tr>
        <tr><td>Letiště</td><td>1x</td></tr>
        <tr><td>Náměstí</td><td>1x</td></tr>
        <tr><td>Nemocnice</td><td>1x</td></tr>
        <tr><td>Obchodní centrum</td><td>2x</td></tr>
        <tr><td>Škola</td><td>1x</td></tr>
        <tr><td>Stadion</td><td>2x</td></tr>
        <tr><td>Technologické centrum</td><td>1x</td></tr>
        <tr><td>Továrna</td><td>2x</td></tr>
        <tr><td>Univerzita</td><td>1x</td></tr>
        <tr><td>Celkem</td><td>24</td></tr>
      </tbody>
    </table>
  </section>

  <section class="inventory-table-card">
    <h3>Elektrárny</h3>
    <table>
      <thead><tr><th>Elektrárna</th><th>Na tým</th></tr></thead>
      <tbody>
        <tr><td>Bateriové úložiště</td><td>1x</td></tr>
        <tr><td>Jaderná elektrárna</td><td>1x</td></tr>
        <tr><td>Plynová elektrárna</td><td>1x</td></tr>
        <tr><td>Přečerpávací elektrárna</td><td>1x</td></tr>
        <tr><td>Rozvodna</td><td>1x</td></tr>
        <tr><td>Solární elektrárna</td><td>1x</td></tr>
        <tr><td>Uhelná elektrárna</td><td>1x</td></tr>
        <tr><td>Větrná elektrárna</td><td>1x</td></tr>
        <tr><td>Vodní průtoční elektrárna</td><td>1x</td></tr>
        <tr><td>Celkem</td><td>9x</td></tr>
      </tbody>
    </table>
  </section>

  <section class="inventory-table-card">
    <h3>Krajina</h3>
    <table>
      <thead><tr><th>Krajina</th><th>Na tým</th></tr></thead>
      <tbody>
        <tr><td>Hřeben</td><td>1x</td></tr>
        <tr><td>Kopec</td><td>1x</td></tr>
        <tr><td>Jezírko</td><td>2x</td></tr>
        <tr><td>Moře</td><td>2x</td></tr>
        <tr><td>Moře roh</td><td>2x</td></tr>
        <tr><td>Louka</td><td>4x</td></tr>
        <tr><td>Řeka</td><td>2x</td></tr>
        <tr><td>Rohová řeka</td><td>2x</td></tr>
        <tr><td>Celkem</td><td>16</td></tr>
      </tbody>
    </table>
  </section>
</div>

:::danger Zabalení elektráren
type: info

TODO

TODO

TODO

<!--<Inline style="width:49%;">/img/enak/package.webp</Inline> <Inline style="width:49%;">/img/enak/package1.webp</Inline>-->
:::

### Access Point / Router

Součástí workshopu je také WiFi access point, který je potřeba zapojit do zásuvky. Přes něj se napojují veškeré kontrolní panely do internetu, je přes něj také možné připojit se do samotné webové aplikace, pokud by na škole nefungoval internet.

## Příprava a zprovoznění workshopu

:::info Webová aplikace
Webová aplikace je dostupná na serveru [v2.enak.cz](https://v2.enak.cz), přihlaste se do ní s přidělenými přihlašovacími údaji.
:::

![enak main](/img/enak/v2/overview.avif)

herní rozhraní vypadá následovně:
![tymy](/img/enak/v2/game.avif)
Kde šedivá pole znázorňuje odpojený tým, zelená perfektně vyvážený (spotřeba rovná se výroba), oranžová lehce nevyvážený (odchylka do 1%), červená blackout.

## Ovládání webové aplikace
Webová aplikace se defaultně zobrazí ve fullscreenu, pro ukončení stačí dvakrát zmáčknout `ESC`, zapnout/vypnout ho také můžete pomocí klávesy `F`. Po spuštění herní simulace, se dále přesouváte stiskem šipky vpravo, nebo `PgDn` (klik prezentéru). Daný scénář můžete ukončit stisknutím klávesy `Q`.

### Úprava výrobních / spotřebních parametrů
Pokud chcete upravit výrobu daných elektráren nebo spotřebu daných budov můžete stisknout klávesu `P`, která otevře následující menu:

<Inline style="width:49%;">/img/enak/v2/prod1.avif</Inline> <Inline style="width:49%;">/img/enak/v2/prod2.avif</Inline>

### Úprava počtu budov
Pokud byste chtěli upravit počet budov který dené týmy mají, můžete to udělat přes menu pod klávesou `M`:
<center><Inline style="width:49%;">/img/enak/v2/buildings.avif</Inline></center>

:::warning Reset kartička
Pro vyresetování počtu budov také můžete použít reset kartičku, která vynuluje počet načtených budov. Stačí ji přiložit a podržet pár sekund. Po zaznění melodie ji můžete odebrat.
:::

:::danger Další krok v prezentaci
Pro další krok na prezentačních slidech stačí stisknout slačítko dále pouze jednou. Pro přechod do dalšího herního kola (den/noc) je vždy potřeba stisknout tlačítko dvakrát (do jedné sekundy). Toto je implementováno z důvodů archiutektury simulace, ve které se bohužel není možné vracet zpět.
:::

Všechny desky krajiny rozdělíme mezi žáky a necháme je poskládat si na lavicích vlastní krajinu. Rozdělíme mezi ně také budovy a elektrárny, z předem připravených setů. Každý z týmů složí kontrolní panel skládající se z šesti částí:

- baterie (nasouvá se shora na hlavní desku po zapojení usb kabelu, ukazuje % nabití)
- hlavní deska
- díl výroby uhelka + vodní
- díl výroby přečerpávačka/baterie + jaderka
- díl vároby plynovka + OZE
- díl ukazující výroba = spotřeba

Rozvodnu lze zapojit do jakéhokoliv ze tří konektorů ve vykouslé části hlavní desky. Stejně tak lze elektrárny zapojit do jakéhokoliv ze 12 portu v rozvodně (krom vstupního).

TODO: VYMENIT OBRAZEK
![enak rozvodna](/img/enak/rozvodna.jpg)

kterou lektor připojí do ovládacího panelu (označeno modrou šipkou), druhá strana kabelu je v rozvodné stanici na straně kde je pouze jeden kabel (označeno červenou šipkou). Samotné elektrárny se připojují do zbylých deseti portů (označeno fialově).

:::info Indikace elekrárnen
každá z elektráren má svou indikační diodu, která je vedle vstupního USB-C portu do elektrárny a zobrazuje její stav. Pokud je fialová, elektárně se nepodařila komunikace s rozvodnou. Pokud je na škále zelená-žlutá-červená, zobrazuje její stav a procento výroby, tedy s rozvodnou správně komunikuje.
:::

:::warning Uhelné a jaderné elektrárny
Uhelné a jaderné elektrárny je potřeba naplnit vodou, pro funkčnost nebulizérů.

- Vezměte chladící věže (celkem 10), pokud jsou bílým USB micro kabelem zapojeny do budovy tak ho odpojte.
- Použijte nástroj na vyndavání nebulizérů a po zasunití nejdřív jedné a pak druhé strany nebuulizéry vyndejte (měl by vylézt bílý hříbek s nožičkou, tu neodpojujte).
- Chladící věž napusťte plnou vody.
- nebulizér vraťte zpět a zatlačte ho dokud silikonová část nedolehne (aby byl plně uvnitř, poznáte to podle správné výšky USB portu ze strany, pozor na správnou orientaci).
- Doporučuji potom po zasunutí otočit věž a vylít přebytečnou vodu která se zasekla ve svrchní části elektrárny, také tím otestujete, že nebulizér správně sedí.

Pokud by při workshopu nebulizér přestal fungovat - zhaslo modrá LEDka která na něm normálně svítí - stiskněte malé tlačítko které se nachází vedle horního USB portu.
:::

Po zapojení všech týmů by se měly na webu objevit všechny se statusem Připojeno. V ten moment stačí vybrat scénář a spustit ho.
![scenare](/img/enak/scenare.webp)

### Barevné kódy RGB diody hlavního panelu

Pro případ zjisťování co s workshopem je špatně přikládám celkový list barevných kódů LED diody na hlavním panelu. Při spuštění typicky uvidíte (chcete vidět) sérii:

1. Bílá
2. Modrá - připojování k wifi
3. Fialová - registrace v CoreAPI
4. Žlutá - žádná rozvodna
5. Zelená - 1 a více rozvoden připojeno

Všechny kódy:

| LED | Vzor | Význam |
| --- | --- | --- |
| <span class="status-led-sample led-solid" style="--led-a:#FFFFFF" aria-label="bílá svítí"></span> | Svítí | Okamžitá výchozí indikace. |
| <span class="status-led-sample led-breathe-12" style="--led-a:#FFFFFF" aria-label="bílá dýchá"></span> | Dýchání, perioda 1,2 s | Inicializace desky. |
| <span class="status-led-sample led-breathe-18" style="--led-a:#0046FF" aria-label="modrá dýchá"></span> | Dýchání, perioda 1,8 s | Deska se připojuje k Wi‑Fi a ještě nikdy nebyla připojená. |
| <span class="status-led-sample led-double" style="--led-a:#0046FF" aria-label="dvojitý modrý záblesk"></span> | Dvojitý záblesk každé 2 s | Wi‑Fi připojení bylo ztraceno. |
| <span class="status-led-sample led-double" style="--led-a:#A000FF" aria-label="dvojitý fialový záblesk"></span> | Dvojitý záblesk každé 2 s | CoreAPI je nedostupné nebo je spojení déle než 5 s neaktivní. |
| <span class="status-led-sample led-breathe-18" style="--led-a:#A000FF" aria-label="fialová dýchá"></span> | Dýchání, perioda 1,8 s | Wi‑Fi funguje, deska není zaregistrovaná v CoreAPI. |
| <span class="status-led-sample led-alternate-250" style="--led-a:#A000FF;--led-b:#FF0000" aria-label="fialová a červená střídavě blikají"></span> |Střídání po 250 ms | CoreAPI vrátilo neplatnou odpověď. |
| <span class="status-led-sample led-breathe-18" style="--led-a:#FFB400" aria-label="žlutá dýchá"></span>| Dýchání, perioda 1,8 s | Není online žádná rozvodna. |
| <span class="status-led-sample led-solid" style="--led-a:#50FF64" aria-label="světle zelená svítí"></span> | Svítí | Online je právě jedna rozvodna. |
| <span class="status-led-sample led-solid" style="--led-a:#14BE3C" aria-label="středně zelená svítí"></span> | Svítí | Online jsou právě dvě rozvodny. |
| <span class="status-led-sample led-solid" style="--led-a:#006419" aria-label="tmavě zelená svítí"></span> | Svítí | Online jsou právě tři rozvodny. |
| <span class="status-led-sample led-double" style="--led-a:#50FF64" aria-label="dvojitý světle zelený záblesk"></span> | Dvojitý záblesk během 1,2 s | NFC tag byl přijat. |
| <span class="status-led-sample led-double" style="--led-a:#FF0000" aria-label="dvojitý červený záblesk"></span> | Dvojitý záblesk během 1,2 s | NFC tag byl odmítnut. |
| <span class="status-led-sample led-pink-triple" style="--led-a:#FF0064" aria-label="periodický trojitý růžový záblesk"></span> | Trojitý záblesk každých 10 s | NFC čtečka není dostupná. |
| <span class="status-led-sample led-breathe-09" style="--led-a:#00FFA0" aria-label="teal dýchá"></span> | Dýchání, perioda 0,9 s | Aktivní debug režim. |
| <span class="status-led-sample led-breathe-05" style="--led-a:#00FFFF" aria-label="cyan rychle pulzuje"></span>| Rychlé dýchání, perioda 0,5 s | Probíhá OTA aktualizace. |
| <span class="status-led-sample led-alternate-150" style="--led-a:#FFFFFF;--led-b:#50FF64" aria-label="bílá a světle zelená střídavě blikají"></span> | Střídání po 150 ms | OTA aktualizace byla úspěšná. |
| <span class="status-led-sample led-alternate-250" style="--led-a:#00FFFF;--led-b:#FF0000" aria-label="cyan a červená střídavě blikají"></span> | Střídání po 250 ms | OTA aktualizace selhala; indikace trvá 10 s. |
| <span class="status-led-sample led-triple" style="--led-a:#FF4600" aria-label="trojitý oranžový záblesk"></span> | Trojitý záblesk každé 2 s | CoreAPI odmítlo autentizaci nebo registraci desky. |
<!--| <span class="status-led-sample led-solid" style="--led-a:#00FFFF" aria-label="cyan svítí"></span> | Svítí | MQTT spojení je healthy. |-->


:::info Priorita indikací
Pokud nastane více stavů současně, firmware vybírá první odpovídající stav v tomto pořadí: OTA aktualizace, debug režim, výsledek OTA, inicializace, Wi‑Fi, chyba autentizace nebo registrace, chyba CoreAPI, registrace desky, MQTT, NFC a
nakonec počet online rozvoden. Proto může například OTA nebo síťová chyba dočasně překrýt běžnou zelenou indikaci rozvoden.
:::

## Update Firmware

Pokud bude potřeba aktualizovat firmware, přejděte na kartu vpravo nahoře, pojmenovanou `Firmware`.

Vyberte danou verzi pro aktualizaci, zaklikněte všechny desky které chcete aktualizovat a stistkněte `Spustit aktualizaci.`. Po aktualizaci (i před ní) můžete zkontrolovat verzi firmwaru a jestli se ho podařilo aktualizovat.

![scenare](/img/enak/v2/fw_up.avif)

## Speciální karty

K workshopu můžete použít také tři speciální NFC kartičky:

- Reset kartičku na vynulování počtu budov
- Kartičku pro vstup do debug módu
- Kartu pro změnu Wi-Fi SSID a hesla k němu

Tyto karty můžete vytvořit pomocí naší aplikace [NFCFlasher](https://github.com/EnergetickaAkademie/NFCFlasher/releases/latest) (pouze Android). Tyto karty lze také vytvořit přes debug mode každé z hlavních desek.

## Debug mode

Pokud budete potřebovat změnit parametry nějaké z desek, nebo přeprogramovat nějaké NFC tagy, můžete tak učinit pomocí debug módu. Do něj se dostanete pomocí debug kartičky, kterou přiložíte k hlavní desce a po dobu 5 s ji tam podržíte. Debug mód je indikován tyrkysovou barvou LED diody.

Jakmile je debug mód zapnut, objeví se Wi-Fi síť ke které se můžete připojit s názvem hlavní desky (pro 2. workshop, 4. desku to tak například bude `ENAK-w2b4`). Jakmile se k této síti připojíte, měli byste být přesměrování na "přihlašovací stránku", na které můžete editovat danou desku. Pokud by toto přesměrování neproběhlo, otevřete prohlížeč a jděte na URL `enak.local`.

Ve vrchní části můžete změnit jméno desky, heslo a API endpoint. Změny můžete uložit, nebo pouze opustit debug mód (vypne se a přepne zpět do normálního režimu, vypne Wi-Fi).

![debug 1](/img/enak/v2/dbg1.avif)

Dále také můžete vidět status připojených rozvoden a počet připojených elektráren, vidět kdy naposledy problěhla komunikace s rozvodnou a jaké vidí elektrárny. Také vidíte na jaké verzi FW deska je a jaký má username.

![debug 2-1](/img/enak/v2/dbg21.avif)

Debug mód vám také umožňuje číst a nahrávat NFC tagy, stačí změnit mód z `normal` (čte tagy normálně jako při průběhu na workshopu) na `inspect only`
nebo `write tags`. Poté zmáčkněte `arm continuous writing` a můžete zapisovat.

Čtení:
![debug 2](/img/enak/v2/dbg2.avif)

Zapisování:
![debug 3](/img/enak/v2/dbg3.avif)

Jestliže máte připojeny nějaké elektrárny, můžete živě měnit nastavení hodnot na enkodérech (zobrazují se hodnoty které jsou stejné i na LED displejích a bargrafech).

![debug 1](/img/enak/v2/dbg4.avif)


## Průběh workshopu

V průběhu workshopu se vždy střídají slidy výkladu, a herní slidy s reálnou simulací (vyvažování soustavy), které jsou vždy dvě kola - den a noc. Nejde o okamžité vyvážení soustavy ale o vyvážení soustavy do konci kola. Čím přesnějí mají studenti vyváženo, tím méně jsou penalizováni.

V jednotlivých kolech se přidávají do hry jak elektrárny (předem přesně připravené kdy se jaké přidají), ale také budovy spotřeby (ty si studenti do nějaké míry mohou volit, v jakém množství přidají). Jakmile je ale přidají, už je nemohou odebrat.

Jednotlivé fáze hry jsou následující (vždy Slide, Den, Noc)

### Úvod + Uhlí
- Každá skupina dostane kostku městského centra, kterou umístí na herní pole - každé město jiné počáteční hodnoty (550 - 620 MW noc, 350 - 400 MW den).
- U každé skupiny označíme hnědou samolepkou člověka - “regulátora” uhelných elektráren. Ten dostane 2 uhelky a umístí je na podkladovou desku. Hráč bude mít po celou dobu hry na starosti poťák výkonu uhelek. Vyrovnají soustavu.
- Každý z ostatních 4 hráčů vybere 1 malo stavbu (70 - 100 MW) - celkem 4, načte ji a umístí na PD, vyrovnají soustavu.

### Voda

- Spotřeba města roste ve dne o 120 MW, v noci o 60 MW 
- U každé skupiny označíme modrou samolepkou člověka - “regulátora” vodních elektráren. 
- Každý ze 3 neoznačených hráčů vybere 1 malou stavbu (70 - 100 MW) - celkem 3, načte ji a umístí na PD.
- Regulátor vodních el. dostane průtok. a přečerp. el. - umístí je na podkladovou desku. Hráč bude mít po celou dobu hry na starosti regulaci výkonu vodních el. (u průtok. poťák, u přečerp. čudlíky pro aktivaci - výroba spotřeba). Přečerpávačka může během 1. části dne (noc/den) buď jen vyrábět, nebo spotřebovávat, nebo nepoužívat. 
- Důraz na ekologii - když to jde, raději využij výkon vodní el, než uhelné…

### Jádro

- Spotřeba města roste o 150 MW          
- U každé skupiny označíme žlutou samolepkou člověka - “regulátora” jaderné el. 
- Každý ze 2 neoznačených hráčů vybere 1 velkou stavbu (celkem 2), načte ji a umístí na PD. 
- Regulátor jaderné el. dostane model j. el. a umístí ho na PD. Hráč bude mít po celou dobu hry na starosti poťák výkonu j. el., vyrovnají soustavu.

### Plyn

- Spotřeba města roste o 100 MW          
- U každé skupiny označíme červenou samolepkou člověka - “regulátora” plynové el. 
- Poslední neoznačený hráč vybere 1 velkou stavbu, načte ji a umístí na PD. 
- Regulátor plynové el. dostane model pl. el. a umístí ho na PD. Hráč bude mít po celou dobu hry na starosti poťák výkonu pl. el., vyrovnají soustavu.

### OZE

- Do této fáze nehrozil blackout (jen pokud by zasáhl lektor - porucha).
- Spotřeba města roste o 200 MW
- Označíme posledního neoznačeného žáka zelenou samolepkou - regulátor OZE, postaví 1 solární farmu a 1 větrný park. Vyrovnají soustavu.
- Do dat se bude již propisovat, jak moc fouká a svítí.
- Skupina dostane na výběr postavit 1-3 stavby podle jejich výběru.
- Dáme skupinám bateriové úložiště pro další balancování - na starosti bude mít regulátor jaderné el. (fialová samolepka). Vyrovnají soustavu.
- V tomto kole je slunečno a fouká (obě elektrárny vyrábějí na maximální výkon).

### Sněží, zima, zataženo nefouká

- V průběhu tohoto kola sněží a nefouká, tedy nám nevyrábí OZE.

### MS v hokeji

- V tomto kole nám začnou OZE opět fungovat, ale koná se MS v hokeji
- Zvyšuje se spotřeba města of 600MW ve dne a 300MW v noci
- Navíce se udála porucha plynové elektrárny, ta tedy nevyrábí nic
- Spotřeba přidaných stadionů se zvyšuje
- Na konci této fáze nutně nastává blackout

:::warning TODO
TODO
TODO
TODO

nasledující sekci přepsat
:::

### Blackout a vyhodnocení hry

- Slidy o blackoutu
- Po konci hry vyskočí okno s nabídkou statistik, ve kterém studenti uvidí jak si vedli v porovnání s ostatními týmy
- Ekologie - jak moc nízkoemisních zdrojů používali
- Finance - jak moc jejich elektřina stála (merit order)
- Stabilita - jak dobře vyvažovali soustavu
- Popularita - mix ostatních faktorů, + jak moc energie vygenerovali (závisí na počtu postavených budov)

![stats](/img/enak/stats.webp)
![stats_plot](/img/enak/stats_plot.webp)

Ze stránky statistik se dá opět odejít stisknutím tlačítka `ESC`.
