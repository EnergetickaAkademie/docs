---
title: Scénařovací systém
outline: deep
---

# Scénářovací systém

Tato stránka popisuje jak funguje scénařovací systém vytvoření pro workshop Enak.

Python knihovna umožňuje tuto funkcionalitu je dostupná na [GitHub](https://github.com/EnergetickaAkademie/scenarios).

## Vytvoření nového scénáře

Pro vytvoření nového scénáře napište nový python skript v tomto formátu

::: code-group

```py [test_scenario.py]
from enak.Enak import *
from random import randint

building_consumptions = {
	Building.CITY_CENTER_A: (randint(550, 620), randint(350, 400)),
	...
}

source_productions = {
	Source.COAL: (250, 500),
	...
}

def getScript():
	script = Script(building_consumptions, source_productions)

	#script.setVerbose(True) #set script to be verbose

	...

	return script
```
:::

Tento skript uložte do složky [`WebControl/CoreAPI/src/scenarios`](https://github.com/EnergetickaAkademie/CoreAPI/tree/main/src/scenarios), samotné přidání se provede v souboru [`CoreAPI/src/state.py`](https://github.com/EnergetickaAkademie/CoreAPI/blob/main/src/state.py) následovně:
```py
from scenarios.test_scenario import getScript as getTestScript

available_script_generators: Dict[str, Callable[[], Script]] = {
    "testovací": getTestScript,
}
```

## Formát souboru skriptu

Skript musí obsahovat funkci která vrací objekt typu `Enak.Script` (typicky `getScript()`) a konfiguraci spotřeb budov a produkcí elektráren.

Skript začíná importy knihoven

```py
from enak.Enak import *
from random import randint
```

### Konfigurace spotřeb budov

první číslo je denní spotřeba, druhé noční

```py
building_consumptions = {
	Building.CITY_CENTER_A: (randint(550, 620), randint(350, 400)),
	Building.CITY_CENTER_B: (randint(550, 620), randint(350, 400)),
	Building.CITY_CENTER_C: (randint(550, 620), randint(350, 400)),
	Building.CITY_CENTER_D: (randint(550, 620), randint(350, 400)),
	Building.CITY_CENTER_E: (randint(550, 620), randint(350, 400)),
	Building.CITY_CENTER_F: (randint(550, 620), randint(350, 400)),
	
	Building.FACTORY: (400, 400),
	Building.STADIUM: (250, 400),
	Building.HOSPITAL: (350, 250),
	Building.UNIVERSITY: (400, 200),
	Building.AIRPORT: (500, 400),
	Building.SHOPPING_MALL: (350, 200),
	Building.TECHNOLOGY_CENTER: (300, 250),
	Building.FARM: (80, 40),
	Building.LIVING_QUARTER_SMALL: (70, 40),
	Building.LIVING_QUARTER_LARGE: (100, 60),
	Building.SCHOOL: (80, 30)
}
```

### Konfigurace produkce elektráren 

čísla definují rozsah minimální a maximální produkce pro každý daný typ elektrárny

```py
source_productions = {
	Source.COAL: (250, 500),
	Source.HYDRO: (0, 200),
	Source.HYDRO_STORAGE: (-200, 200),
	Source.GAS: (0, 500),
	Source.NUCLEAR: (900, 1000),
	Source.WIND: (0, 100),
	Source.PHOTOVOLTAIC: (0, 100),
	Source.BATTERY: (-200, 200)
}
```

:::info Makro CITY_CENTERS
V Enak.py je naimplementováno makro `CITY_CENTERS`, které obsahuje pole `[CITY_CENTER_A, CITY_CENTER_B, CITY_CENTER_C, CITY_CENTER_D, CITY_CENTER_E, CITY_CENTER_F]`
a tak zjednodušuje inkrementální změny všech center měst, která mají jinou spotřebu pro každý z tymů.
:::

### Samotný scénář

samotný skript tvoříme ve funkci `getScript()` (nebo jinak vhodně pojmenované), která na začátku vytvoří objekt `Script` a na konci tento objekt vrací 
```py
def getScript():
	script = Script(building_consumptions, source_productions)

	#script.setVerbose(True)

	#... zbytek scénáře zde

	return skript
```

V samotném scénáři můžeme vytvořit 4 typy kol: `Den`, `Noc`, `Slide` a `SlideRange`. Ty se vytváří takto:

#### Slide

řetězec v konstruktoru `Slide(str)` odkazuje na soubor ve složce [`CoreAPI/presentations`](https://github.com/EnergetickaAkademie/CoreAPI/tree/main/presentations)
```py
	sl = Slide("normal/24.svg")
	script.addRound(sl)
```

#### Slide Range

zobrazí více slidů v sekvenci, s ukazatelem na kolikátém slidu se nacházíme (dole uprostřed)

```py
	sr = SlideRange(["demo/outputname-01.png",
					"normal/03.svg",
					"normal/04.svg",
					"normal/05.svg",
					"normal/06.svg",
					"normal/07.svg",
					"normal/08.svg"])

	script.addRound(sr)
```

#### Den / Noc

jednoduché vytvoření denního kola je následovné

```py
	d = (Day()
		.comment("Uhelky")
		.build())
	script.addRound(d)
```

případně pouze (komentář není vyžadován)

```py
	n = Night().build()
	script.addRound(n)
```

pro dny s počasím stačí přidat

```py
	d = (Day()
		.sunny()
		.windy()
		.build())
	script.addRound(d)
```

kde počasí je typu: `sunny(), windy(), breezy(), calm(), cloudy(), partly_cloudy(), foggy(), snowy(), rainy()`.

Pro výpadek zdroje lze použít metodu `outage(Source.TYPE)`, tedy například:
```py
	n = (Night()
		.windy()
		.outage(Source.GAS)
		.build())
	script.addRound(n)
```

a lze změnit spotřebu budov pomocí `.addBuildingModifier(self, building: Building, modifier: float)` (pro jednu budovu), nebo například `.addBuildingModifiers(self, buildings: List[Building], modifier: float)` (pro více budov).

```py
	d = (Day()
		.comment("MS v hokeji, porucha plyn elektrárny")
		.addBuildingModifiers(CITY_CENTERS, 600)
		.outage(Source.GAS)
		.sunny()
		.windy()
		.build())
	script.addRound(d)
```

Pro manuální konfiguraci lze použít metodu `setCoefficient(self, source: Source, coefficient: float)`.


:::warning Poznámka
Je nutné vždy po dokončení kola toto kolo přidat do skriptu za použití `script.addRound(round)`.
:::

#### Modifikace, povolení výroby

Before each added round, you can also change the consumption coefficients, and allow productions. This is done in the following manner

```py
	script.changeBuildingsConsumptions(CITY_CENTERS, (120, 60)) #změna budov pro makro CITY_CENTERS
	script.allowProduction(Source.HYDRO) #povolení produkce na HYDRO
	script.allowProduction(Source.HYDRO_STORAGE)

	d = Day().build()
	script.addRound(d)
```

změna v `changeBuildingsConsumptions` (více budov), nebo `changeBuildingConsumption` je permanentní (promítá se do všech následujících kol), a jedná se o navýšení aktuální spotřeby a zadané budovy (den a noc).

## Příklady souborů

Níže jsou uvedeny vzorové scénáře, implementované ve webové verzi enak.cz

::: code-group

<<< @/public/snippets/scenarios/normal_long.py

<<< @/public/snippets/scenarios/normal_medium.py

<<< @/public/snippets/scenarios/normal_short.py

<<< @/public/snippets/scenarios/allon.py

<<< @/public/snippets/scenarios/allon_outage.py

<<< @/public/snippets/scenarios/demo.py

:::