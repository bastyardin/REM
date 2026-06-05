# 🏠 Upravljalec nepremičnin

**Brezplačen program za upravljanje nepremičnin v najemu, prilagojen slovenski zakonodaji.**

Ena sama HTML datoteka, ki jo odprete v brskalniku — brez namestitve, brez interneta, brez naročnine. Vsi podatki ostanejo na vašem računalniku.

---

## ✨ Kaj program zna

### 📊 Nadzorna plošča
Pregled celotnega portfelja na enem mestu: letni prihodek, dobiček (prihodki minus stroški), zasedenost nepremičnin in neplačane najemnine. Graf prihodkov po mesecih, primerjava donosnosti nepremičnin in samodejna opozorila za pomembne roke.

### 🏢 Nepremičnine
Vodenje vseh nepremičnin (stanovanja, hiše, garaže, apartmaji ...) z vsemi podatki: naslov, površina, število sob, številka parcele, nabavna vrednost, rezervni sklad in stroški upravnika. Vsaki nepremičnini lahko dodate **fotografijo**, vodite pa tudi **popis števcev** (voda, elektrika, plin) ob vselitvi in izselitvi — pomembno pri morebitnih sporih.

### 👥 Najemniki
Evidenca najemnikov s kontakti, datumom rojstva (pomembno za znižano davčno stopnjo) in zgodovino najemov. Vsak najemnik je lahko povezan z nepremičnino prek najemne pogodbe.

### 💶 Najemnine in plačila
- **Mesečni pregled** v obliki preglednice — z enim klikom označite plačano/neplačano za vsak mesec
- **Zapadle najemnine** s samodejnim izračunom zamude
- **Generator opominov** za neplačnike (pripravljen za e-pošto ali tisk)
- **Generator računov / položnic** za najemnike
- **Varščine** — ločen pregled (prejeto, vrnjeno ali zadržano), z davčno opombo

### 🧾 Stroški in režije
Vodenje vseh stroškov po kategorijah (voda, elektrika, ogrevanje, upravnik, popravila, zavarovanje ...) z razčlenitvijo in označevanjem davčno priznanih stroškov. Stroški so ločeni od najemnine — kar je davčno pomembno.

### 📈 Davki in poročila
Samodejni izračun davka po slovenski zakonodaji z **dvema davčnima režimoma** (glej spodaj). Program primerja normirano in dejansko metodo stroškov ter priporoči ugodnejšo. Letni pregled za FURS in izvoz poročila v CSV (Excel).

### 🛏️ Kratkoročni najem (Airbnb / Booking)
Ločen modul za turistično oddajanje: vodenje rezervacij, samodejni izračun turistične takse, **koledarski pregled** zasedenosti in opozorilo ob približevanju 150-dnevni meji za registrirane sobodajalce.

### 📁 Pogodbe in dokumenti
Evidenca dokumentov (pogodbe, popisni listi, zavarovanja, položnice) z opozorili za poteke. Vključuje **generator osnovne najemne pogodbe** za tisk.

### 🔔 Opozorila in roki
Program vas sam opozori na: potek najemne pogodbe, potek zavarovanja, davčne roke (28. februar in 31. marec), in približevanje 150-dnevni meji pri kratkoročnem najemu. Predlaga tudi letno uskladitev najemnine z inflacijo.

### 📑 Letni davčni list
Z enim klikom ustvarite lepo oblikovan davčni povzetek za celo leto (vse nepremičnine, prihodki, stroški, davek) — pripravljen za tisk ali kot priloga za računovodjo.

### 👥 Več najemnikov na stanovanje
Podpora za sostanovalce — v istem stanovanju ima lahko vsak najemnik svojo sobo, najemnino in plačila. Program sešteje skupno najemnino in pravilno upošteva zasedenost.

### 🔍 Iskalnik in filtri
Hitro iskanje po nepremičninah in najemnikih ter filtri po statusu — uporabno, ko imate večji portfelj.

### 📊 Primerjava po letih
Graf trenda prihodkov in dobička skozi leta — takoj vidite, ali letos zaslužite več kot lani.

### 🎨 Dodatno
- **Temni način** za lažje delo ponoči
- **Iskalnik** po nepremičninah in najemnikih
- Deluje na računalniku, tablici in telefonu
- V celoti v slovenščini, z evri in slovenskimi datumi

---

## 💰 Davčni režimi

Program podpira oba aktualna scenarija slovenske obdavčitve najemnin:

| Režim | Stopnja | Opis |
|-------|---------|------|
| **Sedanji** | 25 % | Cedularna obdavčitev (velja danes). Davčna osnova = najemnina minus 10 % normiranih stroškov. |
| **ZIURS** | 15 % | Splošna stopnja po interventnem zakonu (sprejet 11. 5. 2026). |
| **ZIURS — znižana** | 5 % | Za oddajo mladim (do 30 let) ali družinam z otrokom (do 18 let) s stalnim bivališčem. |

> ⚠️ **Pomembno:** Interventni zakon ZIURS je bil sprejet, vendar v času izdelave programa **še ni začel veljati** in se je napovedoval referendum. Program zato omogoča preklop med obema režimoma. Pred oddajo davčne napovedi preverite veljavno zakonodajo na [FURS](https://www.fu.gov.si).

Kratkoročni (turistični) najem se obravnava kot **dohodek iz dejavnosti** (sobodajalec / s.p.) z 80 % normiranih odhodkov — drugačen režim od dolgoročnega najema.

---

## 🚀 Kako začeti

1. Prenesite datoteko `Upravljalec-nepremicnin.html`
2. **Dvokliknite** nanjo — odpre se v vašem privzetem brskalniku
3. Začnite z dodajanjem prve nepremičnine

To je vse. Ni namestitve, ni registracije, ni interneta.

> **Najboljši brskalniki:** Chrome ali Edge (omogočata samodejno shranjevanje v datoteko). Deluje pa tudi v Firefox, Safari in drugih.

---

## 🔒 Varnost in zasebnost podatkov

**Vsi vaši podatki ostanejo samo na vašem računalniku.** Nič se ne pošilja na splet ali v oblak. Program nima strežnika in ne zbira nobenih podatkov.

Podatki se shranjujejo v pomnilnik brskalnika (`localStorage`). Da jih ne izgubite, program ponuja **tri ravni zaščite**:

1. **Samodejno shranjevanje v datoteko** *(priporočeno, Chrome/Edge)* — enkrat izberete datoteko, program pa vanjo sproti shranjuje ob vsaki spremembi. Če datoteko shranite v mapo OneDrive / Google Drive / Dropbox, so podatki samodejno varni v oblaku in dostopni na vseh napravah.

2. **Ročna varnostna kopija** — gumb "Prenesi varnostno kopijo" ustvari datoteko `.json`, ki jo lahko kadarkoli uvozite nazaj.

3. **Samodejna opozorila** — program vas ob zagonu opozori, če je minilo več kot 7 dni od zadnje kopije.

### GDPR in anonimna statistika

Ob prvem zagonu se prikaže obvestilo o zasebnosti. Program **ne uporablja piškotkov za sledenje** in **ne zbira osebnih podatkov**. Vaši podatki o nepremičninah in najemnikih ostanejo izključno na vaši napravi.

Spletna različica lahko uporablja **[Umami](https://umami.is)** — odprtokodno orodje za anonimno statistiko obiskov, zasnovano za zasebnost (brez piškotkov, brez osebnih podatkov, GDPR-skladno). To pokaže le, koliko ljudi program uporablja, in tega ni mogoče povezati z vami.

> **Kot najemodajalec** ste sami upravljavec osebnih podatkov svojih najemnikov in zanje odgovorni skladno z GDPR.

> 💡 **Nasvet:** Varnostno kopijo hranite v mapi, ki se sinhronizira v oblak. Tako so podatki varni tudi ob okvari računalnika.

---

## ❓ Pogosta vprašanja

**Ali potrebujem internet?**
Ne. Program deluje povsem brez povezave.

**Ali so moji podatki varni?**
Da. Ostajajo izključno na vašem računalniku. Program nima strežnika.

**Ali lahko program uporabljam na več napravah?**
Da — shranite datoteko za samodejno shranjevanje v oblačno mapo (OneDrive, Dropbox), ali ročno prenesite varnostno kopijo in jo uvozite na drugi napravi.

**Ali izgubim podatke, če posodobim program?**
Ne. Ob nadgradnji se obstoječi podatki ohranijo, nove funkcije se samodejno dodajo.

**Ali je davčni izračun uraden?**
Izračuni so informativne narave in v pomoč pri pregledu. Za uradno napoved se posvetujte z računovodjo ali preverite na FURS (eDavki).

---

## 🛠️ Za razvijalce (objava na splet)

Program je ena sama HTML datoteka — lahko ga objavite na **GitHub Pages**, Netlify ali katerikoli statični strežnik.

**Vklop Umami statistike (neobvezno):**
1. V [Umami](https://umami.is) dodajte svojo spletno stran (npr. vašo GitHub Pages domeno).
2. Umami vam da *Website ID* in URL skripte.
3. V `Upravljalec-nepremicnin.html` poiščite blok `<!-- UMAMI ANALYTICS -->` v `<head>` in odkomentirajte vrstico `<script>`, kjer vstavite svoj Website ID in URL.

Analitika deluje samo na spletu (ne pri lokalni rabi datoteke) in beleži le anonimne obiske.

---

## ⚖️ Pravno obvestilo

Ta program je pripomoček za lažje vodenje evidence nepremičnin v najemu in je informativne narave. Davčni izračuni temeljijo na splošno dostopnih informacijah o slovenski zakonodaji in **ne nadomeščajo strokovnega davčnega ali pravnega svetovanja**. Avtor ne prevzema odgovornosti za morebitne napake ali odločitve, sprejete na podlagi programa. Za uradne davčne napovedi vedno preverite veljavno zakonodajo in se po potrebi posvetujte z računovodjo.

---

## 📄 Licenca

Brezplačno za osebno uporabo.

---

*Narejeno z ❤️ za slovenske najemodajalce.*
