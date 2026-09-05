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

| LED | RGB kód | Vzor | Význam |
| --- | --- | --- | --- |
| <span class="status-led-sample led-off" style="--led-a:#000000" aria-label="LED zhasnutá"></span> | `OFF`<br>`(0, 0, 0)` · `#000000` | Zhasnuto | Tmavá část mezi pulzy u zábleskových indikací; není samostatným stavem. |
| <span class="status-led-sample led-solid" style="--led-a:#FFFFFF" aria-label="bílá svítí"></span> | `WHITE`<br>`(255, 255, 255)` · `#FFFFFF` | Svítí | Okamžitá výchozí indikace při spuštění status LED manageru. |
| <span class="status-led-sample led-breathe-12" style="--led-a:#FFFFFF" aria-label="bílá dýchá"></span> | `WHITE`<br>`(255, 255, 255)` · `#FFFFFF` | Dýchání, perioda 1,2 s | Inicializace desky. Stejný vzor se krátce použije také během čekání na detekci substations. |
| <span class="status-led-sample led-breathe-05" style="--led-a:#00FFFF" aria-label="cyan rychle pulzuje"></span> | `CYAN`<br>`(0, 255, 255)` · `#00FFFF` | Rychlé dýchání, perioda 0,5 s | Probíhá OTA aktualizace. |
| <span class="status-led-sample led-breathe-09" style="--led-a:#00FFA0" aria-label="teal dýchá"></span> | `TEAL`<br>`(0, 255, 160)` · `#00FFA0` | Dýchání, perioda 0,9 s | Aktivní debug režim. |
| <span class="status-led-sample led-alternate-150" style="--led-a:#FFFFFF;--led-b:#50FF64" aria-label="bílá a světle zelená střídavě blikají"></span> | `WHITE` + `LIGHT_GREEN`<br>`(255, 255, 255)` + `(80, 255, 100)` | Střídání po 150 ms | OTA aktualizace byla úspěšná. |
| <span class="status-led-sample led-alternate-250" style="--led-a:#00FFFF;--led-b:#FF0000" aria-label="cyan a červená střídavě blikají"></span> | `CYAN` + `RED`<br>`(0, 255, 255)` + `(255, 0, 0)` | Střídání po 250 ms | OTA aktualizace selhala; indikace trvá 10 s. |
| <span class="status-led-sample led-breathe-18" style="--led-a:#0046FF" aria-label="modrá dýchá"></span> | `BLUE`<br>`(0, 70, 255)` · `#0046FF` | Dýchání, perioda 1,8 s | Deska se připojuje k Wi‑Fi a ještě nikdy nebyla připojená. |
| <span class="status-led-sample led-double" style="--led-a:#0046FF" aria-label="dvojitý modrý záblesk"></span> | `BLUE`<br>`(0, 70, 255)` · `#0046FF` | Dvojitý záblesk každé 2 s | Wi‑Fi připojení bylo ztraceno. |
| <span class="status-led-sample led-triple" style="--led-a:#FF4600" aria-label="trojitý oranžový záblesk"></span> | `ORANGE`<br>`(255, 70, 0)` · `#FF4600` | Trojitý záblesk každé 2 s | CoreAPI odmítla autentizaci nebo registraci desky. |
| <span class="status-led-sample led-alternate-250" style="--led-a:#A000FF;--led-b:#FF0000" aria-label="fialová a červená střídavě blikají"></span> | `PURPLE` + `RED`<br>`(160, 0, 255)` + `(255, 0, 0)` | Střídání po 250 ms | CoreAPI vrátila neplatnou odpověď. |
| <span class="status-led-sample led-double" style="--led-a:#A000FF" aria-label="dvojitý fialový záblesk"></span> | `PURPLE`<br>`(160, 0, 255)` · `#A000FF` | Dvojitý záblesk každé 2 s | CoreAPI je nedostupná nebo je spojení déle než 5 s neaktivní. |
| <span class="status-led-sample led-breathe-18" style="--led-a:#A000FF" aria-label="fialová dýchá"></span> | `PURPLE`<br>`(160, 0, 255)` · `#A000FF` | Dýchání, perioda 1,8 s | Wi‑Fi funguje, ale deska ještě není zaregistrovaná v CoreAPI. |
| <span class="status-led-sample led-solid" style="--led-a:#00FFFF" aria-label="cyan svítí"></span> | `CYAN`<br>`(0, 255, 255)` · `#00FFFF` | Svítí | MQTT spojení je zdravé. |
| <span class="status-led-sample led-double" style="--led-a:#50FF64" aria-label="dvojitý světle zelený záblesk"></span> | `LIGHT_GREEN`<br>`(80, 255, 100)` · `#50FF64` | Dvojitý záblesk během 1,2 s | NFC tag byl přijat. |
| <span class="status-led-sample led-double" style="--led-a:#FF0000" aria-label="dvojitý červený záblesk"></span> | `RED`<br>`(255, 0, 0)` · `#FF0000` | Dvojitý záblesk během 1,2 s | NFC tag byl odmítnut. |
| <span class="status-led-sample led-pink-triple" style="--led-a:#FF0064" aria-label="periodický trojitý růžový záblesk"></span> | `PINK`<br>`(255, 0, 100)` · `#FF0064` | Trojitý záblesk každých 10 s | PN532 NFC čtečka není dostupná. |
| <span class="status-led-sample led-breathe-18" style="--led-a:#FFB400" aria-label="žlutá dýchá"></span> | `YELLOW`<br>`(255, 180, 0)` · `#FFB400` | Dýchání, perioda 1,8 s | Není online žádná substation. |
| <span class="status-led-sample led-solid" style="--led-a:#50FF64" aria-label="světle zelená svítí"></span> | `LIGHT_GREEN`<br>`(80, 255, 100)` · `#50FF64` | Svítí | Online je právě jedna substation. |
| <span class="status-led-sample led-solid" style="--led-a:#14BE3C" aria-label="středně zelená svítí"></span> | `MEDIUM_GREEN`<br>`(20, 190, 60)` · `#14BE3C` | Svítí | Online jsou právě dvě substations. |
| <span class="status-led-sample led-solid" style="--led-a:#006419" aria-label="tmavě zelená svítí"></span> | `DARK_GREEN`<br>`(0, 100, 25)` · `#006419` | Svítí | Online jsou tři substations. |