---
title: ENAK
outline: deep
---

# Workshop ENAK pro 6. a 7. třídu

## Seznam součástí workshopu

Workhop je složen z 5 týmů, kdy každý z týmů dostane jeden kontrolní panel označený číslem týmu (se síťovým zdrojem a baterií) + svorku k uchycení panelu k lavici (černo růžová). Kromě toho také každý tým dostane sadu 3D vytištěných budov, elektráren a krajin.

### Budovy

| Budova                | Počet                              |
|----------------------|-----------------------------------|
| Bytové domy          | 3x na tým         |
| Domečky			   | 6x na tým         |
| Farma                | 3x na tým         |
| Letiště              | 1x na tým         |
| Náměstí              | 1x na tým         |
| Nemocnice            | 1x na tým         |
| Obchodní centrum     | 2x na tým         |
| Škola                | 1x na tým         |
| Stadion              | 2x na tým         |
| Technologické centrum| 1x na tým         |
| Továrna              | 2x na tým         |
| Univerzita           | 1x na tým         |
| Celkem               | 24                |

### Elektrárny

| Elektrárna               | Počet                              |
|-------------------------|-----------------------------------|
| Bateriové úložiště      | 1x na tým                          |
| Jaderná elektrárna      | 1x na tým                          |
| Plynová elektrárna      | 1x na tým                          |
| Přečerpávací elektrárna | 1x na tým                          |
| Rozvodna                | 1x na tým                          |
| Solární elektrárna      | 1x na tým                          |
| Elektrický stožár       | pro ukázku, rozvod kabelů             |
| Uhelná elektrárna       | 2x na tým                          |
| Větrná elektrárna       | 1x na tým                          |
| Vodní průtoční elektrárna| 1x na tým                          |
| Celkem                  | 10                                 |

:::info Zabalení elektráren
<Inline style="width:49%;">/img/enak/package.webp</Inline> <Inline style="width:49%;">/img/enak/package1.webp</Inline>
:::

### Krajina

| Krajina               | Počet                              |
|-------------------------|-----------------------------------|
| Hřeben                  | 1x na tým                          |
| Kopec                   | 1x na tým                          |
| Jezírko                 | 2x na tým                          |
| Moře                    | 2x na tým                          |
| Moře roh                | 2x na tým                          |
| Louka                   | 4x na tým                          |
| Řeka                    | 2x na tým                          |
| Rohová řeka             | 2x na tým                          |
| Celkem                  | 16                                 |

### Access Point / Router

Součástí workshopu je také WiFi access point, který je potřeba zapojit do zásuvky. Přes něj se napojují veškeré kontrolní panely do internetu, je přes něj také možné připojit se do samotné webové aplikace, pokud by na škole nefungoval internet.

## Příprava a zprovoznění workshopu

:::info Webová aplikace
Webová aplikace je dostupná na serveru [enak.cz](https://enak.cz), přihlaste se do ní s přidělenými přihlašovacími údaji.
:::

![enak main](/img/enak/main.webp)

herní rozhraní vypadá následovně
![tymy](/img/enak/tymy.webp)
Kde šedivá tečka znázorňuje odpojený tým, zelená perfektně vyvážený (spotřeba rovná se výroba), oranžová lehce nevyvážený (odchylka do 1%), červená blackout.

### Ovládání webové aplikace
Webová aplikace se defaultně zobrazí ve fullscreenu, pro ukončení stačí dvakrát zmáčknout `ESC`. Po spuštění herní simulace, se dále přesouváte stiskem šipky vpravo, nebo `PgDn` (klik prezentéru).

:::danger Další krok v prezentaci
Pro další krok na prezentačních slidech stačí stisknout slačítko dále pouze jednou. Pro přechod do dalšího herního kola (den/noc) je vždy potřeba stisknout tlačítko dvakrát (do jedné sekundy). Toto je implementováno z důvodů archiutektury simulace, ve které se bohužel není možné vracet zpět.
:::

Všechny desky krajiny rozdělíme mezi žáky a necháme je poskládat si na lavicích vlastní krajinu. Rozdělíme mezi ně také budovy a elektrárny, z předem připravených setů. Každý tým dostane jeden kontrolní panel a rozvodnou stanici

![enak rozvodna](/img/enak/rozvodna.jpg)

kterou lektor připojí do ovládacího panelu (označeno modrou šipkou), druhá strana kabelu je v rozvodné stanici na straně kde je pouze jeden kabel (označeno červenou šipkou). Samotné elektrárny se připojují do zbylých deseti portů (označeno fialově).

:::danger Pozor
Port pro připojení rozvodné stanice je horní port směrem k workshopu, nikoliv spodní port. Ten je použit pouze pro programování hlavní desky, a při workshopu se nepoužívá.
:::

:::info Zapnutí ovládacího panelu
Po zapnutí kontrolního panelu by se měly rozsvítit displeje, a měly by začít problikávat displeje spotřeby a výroby. To znamená že deska je připojená k webové simulaci a přijímá od ní data, a zároveň není připojená rozvodná stanice (na webu by se měl stav změnit z Odpojeno k Připojeno u daného týmu). Po připojení rozvodné stanice blikání přestane a displeje zůstanou svítit.
:::

:::warning Uhelné a jaderné elektrárny
Uhelné a jaderné elektrárny je potřeba naplnit vodou, pro funkčnost nebulizérů. Stačí nalít vodu z kohoutku přes difuzér (bílá část na vrchu elektrárny), dokud voda nezačne přetékat (důležité - nepřelejte elektrárny do jejich elektronických součástí, naplňujte je pod úhlem a opatrně).
:::

Po zapojení všech týmů by se měly na webu objevit všechny se statusem Připojeno. V ten moment stačí vybrat scénář a spustit ho.
![scenare](/img/enak/scenare.webp).

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