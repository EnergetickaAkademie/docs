---
title: 3D tisk
outline: deep
---

# Jak vytisknout workshop na 3D tiskárně

:::info Odkaz ke stažení
Stáhněte si modely z tohoto [odkazu](https://drive.google.com/drive/folders/1FOzqfMp_tN2IHXDmlq06NettOhObE4P2?usp=sharing).
:::

Modely jsou připravené ve formátu `.3mf`, což je formát schopný ukládat projekty pro 3d tisk společně s barvami a modifikátory tisku. Připraven byl v programu Bambu Studio, měl by jít otevřít i v programech OrcaSlicer i PrusaSlicer.

:::danger Nastavení tisku
Doporučuji tisknout vše s výplní nastavenou na `adaptive cubic` (hlavně ne rectilinear), případně `gyroid`, wall generator nastavte na `arachne`, pokud jsou potřeba supports, zvolte typ `tree`.

Toto nastavení by již mělo být nastaveno ve stažených projektech.
:::

## Modely elektráren

Modely jsou vždy rozděleny na podstavy a samotné budovy (ty jsou většinou vícebarevné, vždy lze tisknout jednobarevně a poté dobarvit nebo nechat), doporučuji vše tisknout v připravené orientaci (při tisknu na plocho vyžadují podstavy podpory které se velmi těžko odstraňují).
Po vytisknutí přilepte budovy k podstavám pomocí tavné pistole nebo jiného lepidla.

Každá z elektráren navíc vyžaduje k vytištění `powerplant_tray.3mf`, který se vejde do připraveného otvoru v každé z podstav, kam se poté vloží PCB destička pro danou elektrárnu.

Zkontrolujte před tiskem, že každá z podstav (zelená, neplatí pro rozvodnu) má v sobě tuto díru s kulatou dírkou na straně pro vložení špendlíku pro případné vyjmutí:
![trayhole](/img/tisk/trayhole.avif)

Stáhněte si a vytiskněte:

| Model                   | Počet                              |
|-------------------------|------------------------------------|
| baterie.3mf             | 1x na tým                          |
| jaderka.3mf             | 1x na tým                          |
| plynovka.3mf            | 1x na tým                          |
| powerplant_tray.3mf     | 8x na tým                          |
| precerpavacka.3mf       | 1x na tým                          |
| rozvodna.3mf            | 1x na tým                          |
| solary.3mf              | 1x na tým                          |
| uhelka.3mf              | 1x na tým                          |
| vetrna.3mf              | 1x na tým                          |
| vez_jaderka_uhelka.3mf  | 2x na tým                          |
| vodni.3mf               | 1x na tým                          |

:::warning Vodní elektrárna
Vodní elektrárna má od 3D designéra rozbitou geometrii, tedy se ve sliceru může chovat zvláštně. Je rozdělena na tři části - vodu a budovu, které by po vytisknutí měly jít složit dohromady.
:::

:::warning Chladící věž
Aby voda z věže pro jaderku a uhelku neprotékala můžete zvýšit počet spodních vrstev (`bottom shell layers`) a perimetrů (`wall loops`), v mém testování se základní nastavení zdálo jako vyhovující a nic neprotékalo, ale člověk nikdy neví.
:::

## Budovy

Stáhněte si soubor `budovy_2B.3mf`, nachází se v něm všechny budovy, každá na vlastním tiskovém plátě. Budovy jsou odlišeny barevně tak, že malé (M) a velké (V) budovy mají jinou barvu, aby byly lehce rozpoznatelné.

:::warning Pauza při tisku
Ve staženém projektu by již měla být nastaveno pozastavení tisku na vrstvě 6, při které musíte vlepit NFC nálepky dovnitř modelu, tak aby se budovy daly během workshopu načíst na hlavním panelu. Zkontrolujte před tiskem, že se pozastavení skutečně vykoná,

![trayhole](/img/tisk/nfc.avif)

NFC nálepky se hodí například tyto:
[https://www.laskakit.cz/nfc-nalepka-inlay-tag--ntag215--25mm-10ks/](https://www.laskakit.cz/nfc-nalepka-inlay-tag--ntag215--25mm-10ks/)
:::

Vytiskněte tento počet budov:
| **Název** | **Spotřeba den** | **Spotřeba noc** | **Počet** |
| --- | --- | --- | --- |
| V - Centrum města | 650 - 750 | 200 - 250 | 1x na tým   |
| V - Továrna | 400 | 400 | 2x na tým   |
| V - Stadion | 250 | 400 | 2x na tým   |
| V - Nemocnice | 350 | 250 | 1x na tým   |
| V - Universita | 400 | 200 | 1x na tým   |
| V - Letiště | 500 | 400 | 1x na tým   |
| V - Obchodní centrum | 350 | 200 | 2x na tým   |
| V - Technologické centrum | 300 | 250 | 1x na tým   |
| M - Farma | 80  | 40  | 3x na tým   |
| M - Obytná čtvrť - menší | 70  | 40  | 6x na tým   |
| M - Obytná čtvrť - větší | 100 | 60  | 3x na tým   |
| M - Škola | 80  | 30  | 1x na tým   |

## Krajina (kachle)

TBD

## Ovládací panel

TBD
