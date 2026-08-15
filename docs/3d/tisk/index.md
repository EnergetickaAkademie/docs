---
title: 3D tisk
outline: deep
---

# Jak vytisknout workshop na 3D tiskárně

:::info Odkaz ke stažení
Stáhněte si modely z tohoto [odkazu](https://drive.google.com/drive/folders/1FOzqfMp_tN2IHXDmlq06NettOhObE4P2).

***Před tiskem si, prosím, přečtěte připomínky k tisku uvedené na této stránce.***
:::

Modely jsou připravené ve formátu `.3mf`, což je formát schopný ukládat projekty pro 3d tisk společně s barvami a modifikátory tisku. Připraveny byly v programu Bambu Studio, měly by jít otevřít i v programech OrcaSlicer i PrusaSlicer.

:::tip Nastavení tisku
Doporučuji tisknout vše s výplní nastavenou na `adaptive cubic` (hlavně ne rectilinear), případně `gyroid`, wall generator nastavte na `arachne`, pokud jsou potřeba supports, zvolte typ `tree`.

Při tisku kachlí můžete snížit `Sparse infill density` na `5 - 10%`.

Toto nastavení by již mělo být nastaveno ve stažených projektech.
:::

## Modely elektráren

Modely jsou vždy rozděleny na podstavy a samotné budovy (ty jsou většinou vícebarevné, vždy lze tisknout jednobarevně a poté dobarvit nebo nechat), doporučuji vše tisknout v připravené orientaci
(při tisknu na plocho vyžadují podstavy podpory které se velmi těžko odstraňují, doporučuji je tedy tisknout na výšku).

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
Vodní elektrárna má od 3D designéra rozbitou geometrii, tedy se ve sliceru může chovat zvláštně. Je rozdělena na tři části - vodu, budovu a podstavu, které by po vytisknutí měly jít složit dohromady.

Takto by ve sliceru měla vypadat vodní (modrá) část elektrárny po naslicování (pouze neprůsvitná část se vytiskne, to je správně):
![vodni](/img/tisk/vodni.avif)
:::

:::tip Chladící věž
Aby voda z věže pro jaderku a uhelku neprotékala můžete zvýšit počet spodních vrstev (`bottom shell layers`) a perimetrů (`wall loops`), v mém testování se základní nastavení zdálo jako vyhovující a nic neprotékalo, ale člověk nikdy neví.
:::

## Budovy

***Před tiskem se ujistěte, že máte k dispozici vhodné NFC nálepky pro vlepení do vnitra modelů, viz info níže.***

Stáhněte si soubor `budovy_2B.3mf`, nachází se v něm všechny budovy, každá na vlastním tiskovém plátě. Budovy jsou odlišeny barevně tak, že malé (M) a velké (V) budovy mají jinou barvu, aby byly lehce rozpoznatelné.

:::danger Pauza při tisku pro vlepení NFC tagů
Ve staženém projektu by již mělo být nastaveno pozastavení tisku na vrstvě 6, při kterém musíte vlepit NFC nálepky dovnitř modelu, tak aby se budovy daly během workshopu načíst na hlavním panelu. Zkontrolujte před tiskem, že se pozastavení skutečně vykoná:

![trayhole](/img/tisk/nfc.avif)

NFC nálepky se hodí například tyto:

- [https://www.laskakit.cz/nfc-nalepka-inlay-tag--ntag215--25mm-10ks/](https://www.laskakit.cz/nfc-nalepka-inlay-tag--ntag215--25mm-10ks/) [10ks]
- [https://allegro.cz/nabidka/tag-nfc-ntag215-samolepka-etiketa-13-56mhz-prazdna-programovatelna-bila-50x-18160004302](https://allegro.cz/nabidka/tag-nfc-ntag215-samolepka-etiketa-13-56mhz-prazdna-programovatelna-bila-50x-18160004302) [50ks]
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

Stáhněte si soubory `kachle.3mf` a `hreben_jezirka.3mf` (jezírka k hřebenu jsou oddělená, jelikož vyžadují podpory) a vytiskněte následný počet kusů herních desek (počet klidně můžete upravit podle svých potřeb):

| Kachle                  | Počet                              |
|-------------------------|------------------------------------|
| Hřeben                  | 1x na tým                          |
| Kopec                   | 1x na tým                          |
| Jezírko                 | 2x na tým                          |
| Moře                    | 2x na tým                          |
| Moře roh                | 2x na tým                          |
| Louka                   | 4x na tým                          |
| Řeka                    | 2x na tým                          |
| Rohová řeka             | 2x na tým                          |
| Celkem                  | 16                                 |

:::danger Magnety
Zkontrolujte, zda se na každé hraně kachle vyskytují dvě díry pro magnety (celkem osm na kachli), které se do nich vlepí aby kachle držely pospolu. Velikost těchto magnetů je **20x5x2mm** a dají se sehnat například na [https://www.aliexpress.com/item/1005010040308548.html](https://www.aliexpress.com/item/1005010040308548.html).

Orientace magnetů se musí střídat, vždy severní a jižní pól na stejná místa na každé kachli, tak aby do sebe zacvakly v každé konfiguraci:

![magnety](/img/tisk/magnets.avif)
:::

:::warning Vícebarevný tisk
V modelech jsou nastaveny modifikátory barvy tisku podle vrstvy; pro kachle moří (žlutá->zelená, tak aby vynikla pláž), a kachli hřebenu (zelená->bílá). Zkontrolujte zda výměna barvy proběhne v pořádku.

![magnety](/img/tisk/more1.avif)

Voda je tisknuta samostatně, a po vytisknutí je nutné ji přilepit k dané desce.
:::

## Ovládací panel

Pro tisk ovládacího panelu musíte vytisknout:

- 5x krabičku na baterii (spodní a vrchní díl s ikonou baterie) v `batterybox.3mf`, je vymodelován pro tuto powerbanku - [alza.cz](https://www.alza.cz/ugreen-45w-power-bank-with-built-in-cable-d13196498.htm)
- 5x krabičku na hlavní desku (spodek krabičky a 1x vršek od každého čísla týmu) v `mainbox.3mf`
- 3x pro každý tým sadu ovládacích panelů v `ovladani.3mf` (vždy se jedná a pár vrchního dílu s ikonkami a spodního dílu bez ikonek)
- 5x ukazatel výroby a spotřeby v `vyroba_spotreba.3mf`

Pro každý tým byste tedy měli mít:
- 1x krabičku na baterii (spodek a vršek)
- 1x krabičku na hlavní desku (spodek a vršek)
- 3x panel s ikonkami (spodek a 3 různé vršky)
- 1x panel se spotřebou a výrobou

## Ostatní

Pro vyjmutí difuzérů z chladících věží si vytiskněte model `puller.stl`, který vám umožní dolévání vody, aby difuzéry nepřestaly fungovat. Stačí ho zasunout do vršku chladící věže a po odpojení USB kabelu difuzér vytáhnout.
