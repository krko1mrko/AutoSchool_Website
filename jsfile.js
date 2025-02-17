// Separate question pools
const crossroadsQuestions = [
    { id: "cx1", text: "Who has the right of way at this intersection?", type: "radio", options: ["Car A", "Car B", "Pedestrian"], answer: "Car A", image: "crossroad1.jpg", points: 5 },
    // Add 9 more questions with images
];

const signsQuestions = [
    { id: "sg1", text: "What does this sign mean?", type: "radio", options: ["Stop", "Yield", "Speed Limit"], answer: "Stop", image: "sign1.jpg", points: 3 },
    // Add 9 more questions with images
];

const generalQuestions = [
    
    { id: "gq1", text: "Kretanje vozilom unazad dozvoljeno je:", type: "radio", options: ["Na kratkom dijelu puta u nepreglednoj krivini", "Na kratkom dijelu puta u tunelu", "Na kratkom dijelu puta"], answer: "Na kratkom dijelu puta", points: 2 },
    { id: "gq2", text: "Na magistralnom putu van naselja, gdje nema znaka ograničenja brzine, vozač ne smije vozilom da se kreće brzinom većom od:", type: "radio", options: ["60 km/h", "70 km/h", "80 km/h"], answer: "80 km/h", points: 2 },
    { id: "gq3", text: "Pješačko ostrvo koje se nalazi na sredini kolovoza, gdje se saobraćaj odvija u oba smjera, obilazi se vozilom:", type: "radio", options: ["uvijek sa desne strane", "uvijek sa lijeve strane", "sa bilo koje strane"], answer: "uvijek sa desne strane", points: 2 },
    { id: "gq4", text: "Na putu sa prvenstvom prolaza neposredno ispred raskrnice koja nije regulisana semaforom ili saobraćajnim znacima vozač:", type: "radio", options: ["može da pretiče bicikl, moped ili motocikl", "može da pretiče sva vozila koja zadržavaju pravac kretanja", "može da pretiče putnička vozila koja zadržavaju pravac kretanja"], answer: "može da pretiče bicikl, moped ili motocikl", points: 3 },
    { id: "gq5", text: "Prolaženje vozilom pored drugog vozila koje dolazi iz suprotnog smjera je radnja:", type: "radio", options: ["preticanja", "obilaženja", "mimoilaženja"], answer: "mimoilaženja", points: 2 },
    { id: "gq6", text: "Vozač je dužan da bez odlaganja ukloni sa kolovoza:", type: "radio", options: ["sve predmete koji su na kolovozu", "predmete i materije koji potiču sa vozila kojim upravlja", "sve predmete koji se nalaze na saobraćajnoj traci kojom se kreće"], answer: "predmete i materije koji potiču sa vozila kojim upravlja", points: 3 },
    { id: "gq7", text: "Dva prsluka sa svjetlosno reflektujućim osobinama mora imati:", type: "radio", options: ["putničko motorno vozilo", "četvorocikl", "teretno motorno vozilo"], answer: "teretno motorno vozilo", points: 2 },
    { id: "gq8", text: "Vozač na putu za saobraćaj vozila u oba smjera na kojem postoje najmanje četiri saobraćajne trake:", type: "radio", options: ["mora da koristi desnu kolovoznu traku", "mora da koristi samo desnu saobraćajnu traku", "mora da koristi samo lijevu saobraćajnu traku"], answer: "mora da koristi desnu kolovoznu traku", points: 2 },
    { id: "gq9", text: "Brzina kretanja motornih vozila na putu, pod normalnim uslovima saobraćaja, ne smije da se ograniči saobraćajnim znakom ispod:", type: "radio", options: ["40 km/h", "50 km/h", "60 km/h"], answer: "40 km/h", points: 3 },
    { id: "gq10", text: "Na putu na kojem postoje dvije saobraćajne trake namijenjene za saobraćaj vozila u istom smjeru, brže kretanje vozila u jednoj traci od kretanja vozila u drugoj traci:", type: "radio", options: ["smatra se preticanjem", "ne smatra se preticanjem", "smatra se obilaženjem"], answer: "ne smatra se preticanjem", points: 2 },
    { id: "gq11", text: "Vozilo na motorni pogon koje na putu vuče neispravno vozilo ne smije se kretati brzinom većom od:", type: "radio", options: ["40 km/h", "50 km/h", "60 km/h"], answer: "ne smatra se preticanjem", points: 2 },
    { id: "gq12", text: "Saobraćajnu traku namijenjenu za kretanje vozila za javni prevoz putnika, mogu koristiti:", type: "radio", options: ["vozila pod pratnjom", "vozila komunalne službe", "putnička vozila"], answer: "vozila pod pratnjom", points: 2 },
    { id: "gq13", text: "Vozač je dužan da zvučni znak upozorenja daje:", type: "radio", options: ["više puta u naizmjeničnim intervalima", "bez prekida u trajanju od 5 sekundi", "u mjeri koja je dovoljna da se drugi učesnici u saobraćaju upozore"], answer: "u mjeri koja je dovoljna da se drugi učesnici u saobraćaju upozore", points: 3 },
    { id: "gq14", text: "Zvučni znak upozorenja vozač je dužan da upotrijebi na javnom putu:", type: "radio", options: ["pri sustizanju vozila koja se sporo kreću niz nagib", "kada se obilazi vozilo parkirano sa desne strane kolovoza", "kada se pored kolovoza nalaze djeca koja ne obraćaju pažnju na kretanje vozača"], answer: "kada se pored kolovoza nalaze djeca koja ne obraćaju pažnju na kretanje vozača", points: 2 },
    { id: "gq15", text: "Uzdužni dio kolovoza namijenjen za saobraćaj vozila u jednom smjeru, sa jednom ili više saobraćajnih traka zove se:", type: "radio", options: ["saobraćajna traka", "kolovozna traka", "kolovoz"], answer: "kolovozna traka", points: 3 },
    { id: "gq16", text: "Kada ovlašćeni policijski službenik daje naredbe koje odstupaju od pravila saobraćaja, učesnik u saobraćaju:", type: "radio", options: ["dužan je da postupi po naredbama ovlašćenog policijskog službenika", "dužan je da postupi po pravilima saobraćaja", "nije dužan da postupi po naredbama ovlašćenog policijskog službenika"], answer: "dužan je da postupi po naredbama ovlašćenog policijskog službenika", points: 3 },
    { id: "gq17", text: "Ukoliko se ne prevozi u bezbjednosnom sjedištu, u motornom vozilu na prednjem sjedištu, ne smije da se prevozi dijete:", type: "radio", options: ["mlađe od 10 godina", "mlađe od 12 godina", "mlađe od 14 godina"], answer: "mlađe od 12 godina", points: 2 },
    { id: "gq18", text: "Kretanje vozila unazad u uslovima smanjene vidljivosti:", type: "radio", options: ["dozvoljeno je u naselju", "dozvoljeno je na kratkom dijelu puta", " nije dozvoljeno"], answer: "nije dozvoljeno", points: 2 },
    { id: "gq19", text: "U naselju se saobraćajnim znakom motornim vozilima može dozvoliti brzina kretanja najviše do:", type: "radio", options: ["80 km/h", "50 km/h", "60 km/h"], answer: "80 km/h", points: 2 },
    { id: "gq20", text: "Kada vozač naiđe na organizovanu kolonu pješaka koja prelazi kolovoz:", type: "radio", options: ["ne smije vozilom da presijeca organizovanu kolonu pješaka", " smije vozilom da presijeca organizovanu kolonu pješaka uz upotrebu zvučnog znaka upozorenja", "smije vozilom da presjeca organizovanu kolonu pješaka, ako kolonu ne čine djeca"], answer: "ne smije vozilom da presijeca organizovanu kolonu pješaka", points: 2 },
    { id: "gq21", text: "Vučenim motornim vozilom, osim vozača koji njime upravlja:", type: "radio", options: ["dozvoljen je prevoz putnika u skladu sa brojem putničkih mjesta", "dozvoljen je prevoz samo jednog putnika", "zabranjen je prevoz putnika"], answer: "zabranjen je prevoz putnika", points: 3 },
    { id: "gq22", text: "Prelaženje vozilom iz jedne u drugu saobraćajnu traku namijenjenu za saobraćaj u istom smjeru je:", type: "radio", options: ["prestrojavanje", "preticanje", "obilaženje"], answer: "prestrojavanje", points: 2 },
    { id: "gq23", text: "Mladi vozač i vozač početnik ne smije upravljati vozilom na autoputu brzinom većom od:", type: "radio", options: ["70 km/h", "100 km/h", "110 km/h"], answer: "100 km/h", points: 2 },
    { id: "gq24", text: "Da li je učesnik u saobraćaju dužan da postupa u skladu sa saobraćajnom signalizacijom i kad time odstupa od pravila saobraćaja:", type: "radio", options: ["nije dužan", "dužan je", "dužan je samo u naselju"], answer: "dužan je", points: 3 },
    { id: "gq25", text: "Naglo mijenjanje brzine vozila po putu je dozvoljeno:", type: "radio", options: ["u slučaju uključivanja sa zemljanog puta na javni put", "u slučaju izbjegavanja neposredne opasnosti", "u slučaju bržeg isključivanja iz saobraćaja"], answer: "u slučaju izbjegavanja neposredne opasnosti", points: 2 },
    { id: "gq26", text: "Osim traktora, ostala vozila na motorni pogon:", type: "radio", options: ["ne smiju da vuku priključno vozilo za traktor", "smiju da vuku priključno vozilo za traktor", "ne smiju da vuku priključno vozilo za traktor, ako masa skupa vozila prelazi -500 kg"], answer: "ne smiju da vuku priključno vozilo za traktor", points: 3 },
    { id: "gq27", text: "Vozač je dužan da upotrijebi zvučni znak upozorenja:", type: "radio", options: ["prije ulaska u tunel koji nema osvjetljenje", "na putu u naselja prije ulaska u raskrsnicu", "na putu van naselja prije nailaska u nepreglednu i uzanu krivinu"], answer: "na putu van naselja prije nailaska u nepreglednu i uzanu krivinu", points: 3 },
    { id: "gq28", text: "Vozilo na motorni pogon ne smije da vuče:", type: "radio", options: ["motocikl, moped, kao ni laki ni teški tricikl", "teretno vozilo", "putničko vozilo"], answer: "motocikl, moped, kao ni laki ni teški tricikl", points: 2 },
    { id: "gq29", text: "Pješak na javnom putu van naselja:", type: "radio", options: ["ne smije se kretati desnom stranom kolovoza", "ne smije se kretati u koloni", "ne smije se kretati po kolovozu autoputa"], answer: "ne smije se kretati po kolovozu autoputa", points: 2 },
    { id: "gq30", text: "Vozilo koje se kreće po šinama postavljenim na sredini kolovoza:", type: "radio", options: ["smije da se pretiče sa lijeve strane", "smije da se pretiče sa bilo koje strane", "smije da se pretiče sa desne strane"], answer: "smije da se pretiče sa desne strane", points: 2 },
    { id: "gq31", text: "Da li na brzoj saobraćajnici vozač smije da vrši polukružno okretanje:", type: "radio", options: ["da, ako ne ugrožava druge učesnike u saobraćaju", "da, ako ima uključene sve pokazivače pravca", "ne smije"], answer: "ne smije", points: 3 },
    { id: "gq32", text: "Crveno i plavo trepćuće svijetlo koja se naizmjenično pale na vozilu su svjetlosni znaci koje daju:", type: "radio", options: ["vozila sa prvenstvom prolaza", "vozila pod pratnjom", "specijalna vozila"], answer: "vozila pod pratnjom", points: 3 },
    { id: "gq33", text: "Vozač vozila dok ga drugo vozilo pretiče:", type: "radio", options: ["ne smije da povećava brzinu kretanja", "smije da poveća brzinu kretanja", "ne smije da smanji brzinu kretanja"], answer: "ne smije da povećava brzinu kretanja", points: 2 },
    { id: "gq34", text: "Okretanje vozila za 180° iz dotadašnjeg smjera kretanja radi uključivanja u suprotni saobraćajni tok je:", type: "radio", options: ["kružno okretanje", "lijevo skretanje", "polukružno okretanje"], answer: "polukružno okretanje", points: 2 },
    { id: "gq35", text: "Mladi vozač na magistralnom putu ne smije upravljati vozilom brzinom većom od:", type: "radio", options: ["50 km/h", "60 km/h", "70 km/h"], answer: "70 km/h", points: 3 },
    { id: "gq36", text: "Noću vozаč može upotrijebiti svjetlosni znаk upozorenjа na putu u naselju, prilikom:", type: "radio", options: ["mimoilaženja sa drugim vozilom", "mimoilaženja sa pješakom", "preticanja drugog vozila"], answer: "preticanja drugog vozila", points: 2 },
    { id: "gq37", text: "Na raskrsnici postoji horizontalna i svjetlosna signalizacija, vozač će postupiti prema:", type: "radio", options: ["pravilu propuštanja vozila sa desne strane", "značenju svjetlosne signalizacije", "oznakama na kolovozu"], answer: "značenju svjetlosne signalizacije", points: 2 },
    { id: "gq38", text: "Mladi vozač ne smije upravljati vozilom, osim na autoputu, brzinom većom od:", type: "radio", options: ["100 km/h", "80 km/h", "70 km/h"], answer: "70 km/h", points: 2 },
    { id: "gq39", text: "Vozač koji se približava obilježenom pješačkom prelazu, mora:", type: "radio", options: ["smanjiti brzinu kretanja vozila do 30 km/h", "smanjiti brzinu i nastaviti kretanje sa vozilom bez obzira na saobraćajnu situaciju", "prilagoditi brzinu kretanja vozila tako da se u svakoj situaciji može bezbjedno zaustaviti"], answer: "prilagoditi brzinu kretanja vozila tako da se u svakoj situaciji može bezbjedno zaustaviti", points: 3 },
    { id: "gq40", text: "Brzina kretanja teretnog motornog vozila čija je najveća dozvoljena masa do -500 kg ograničena je na:", type: "radio", options: ["80 km/h", "70 km/h", "60 km/h"], answer: "80 km/h", points: 2 },
    { id: "gq41", text: "Prekid kretanja vozila u trajanju dužem od pet minuta, osim prekida koji se vrši da bi se postupilo po znaku ili pravilu kojim se reguliše saobraćaj je:", type: "radio", options: ["zaustavljanje vozila", "parkiranje vozila", "isključenje vozila"], answer: "parkiranje vozila", points: 3 },
    { id: "gq42", text: "Brzina kretanja autobusa u javnom gradskom prevozu putnika ograničena je do:", type: "radio", options: ["50 km/h", "60 km/h", "70 km/h"], answer: "50 km/h", points: 3 },
    { id: "gq43", text: "Vozač umjesto zvučnog znaka upozorenja noću može da upotrijebi:", type: "radio", options: ["dnevna svijetla", "svjetlosni znak upozorenja", "svijetla za maglu"], answer: "svjetlosni znak upozorenja", points: 2 },
    { id: "gq44", text: "Površina koja nije namjenjena za saobraćaj vozila, koja se nalazi na sredini kolovoza sa jednosmjernim saobraćajem, ako saobraćajnim znakom nije drugačije određeno:", type: "radio", options: ["može se obilaziti sa lijeve ili desne strane", "može da se obilazi samo sa desne strane", "može da se obilazi samo sa lijeve strane"], answer: "može se obilaziti sa lijeve ili desne strane", points: 2 },
    { id: "gq45", text: "Na putu za saobraćaj vozila u oba smjera na kojem postoje tri saobraćajne trake vozač:", type: "radio", options: ["smije da koristi bilo koju saobraćajnu traku", "ne smije da koristi saobraćajnu traku uz desnu ivicu kolovoza", "ne smije da koristi saobraćajnu traku uz lijevu ivicu kolovoza"], answer: "ne smije da koristi saobraćajnu traku uz lijevu ivicu kolovoza", points: 2 },
    { id: "gq46", text: "Na raskrsnici vozač je dužan:", type: "radio", options: ["da propusti vozilo koje nailazi sa njegove lijeve strane", "da propusti vozilo koje nailazi sa njegove desne strane", "da propusti sva vozila"], answer: "da propusti vozilo koje nailazi sa njegove desne strane", points: 3 },
    { id: "gq47", text: "Odstojanje između vučnog i vučenog putničkog vozila, ako se vuče pomoću užeta iznosi:", type: "radio", options: ["od 1 do 2 metara", "od 3 do 5 metara", "preko 5 metara"], answer: "od 3 do 5 metara", points: 2 },
    { id: "gq48", text: "U vozilu u kojem su ugrađeni sigurnosni pojasevi u toku vožnje sigurnosni pojas mora da koristi:", type: "radio", options: ["samo vozač", "vozač i putnici", "samo vozač i suvozač"], answer: "vozač i putnici", points: 2 },
    { id: "gq49", text: "Kad se vozilo za organizovani prevoz djece zaustavi na kolovozu radi ulaska, odnosno izlaska djece, vozač:", type: "radio", options: ["mora uključiti lijevi pokazivač pravca", "mora uključiti desni pokazivač pravca", "mora uključiti sve pokazivače pravca"], answer: "mora uključiti sve pokazivače pravca", points: 3 },
    { id: "gq50", text: "U naselju se saobraćajnim znakom motornim vozilima može ograničiti brzina kretanja najviše do:", type: "radio", options: ["80 km/h", "50 km/h", "60 km/h"], answer: "80 km/h", points: 2 },
    { id: "gq51", text: "Vozač vozila za organizovani prevoz djece kad zaustavi vozilo na kolovozu radi ulaska-izlaska djece mora:", type: "radio", options: ["uključiti lijevi pokazivač pravca", "uključiti sve pokazivače pravca", "uključiti desni pokazivač pravca"], answer: "uključiti sve pokazivače pravca", points: 3 },
    { id: "gq52", text: "Kada vozila na rаskrsnicu dolаze iz suprotnih smjerovа i skreću ulijevo mimoilaze se:", type: "radio", options: ["sa desne strane", "sa lijeve strane", "po dogovoru"], answer: "sa desne strane", points: 2 },
    { id: "gq53", text: "Prilikom uključivanja u saobraćaj vozač je dužan:", type: "radio", options: ["da upotrijebi zvučni znak upozorenja i da uključi odgovarajući pokazivač pravca", "da uključi sve pokazivače pravca", "da se uvjeri da to može učiniti na bezbjedan način i da uključi odgovarajući pokazivač pravca"], answer: "da se uvjeri da to može učiniti na bezbjedan način i da uključi odgovarajući pokazivač pravca", points: 3 },
    { id: "gq54", text: "Vozilo koje se kreće po šinama postavljenim na sredini kolovoza:", type: "radio", options: ["smije da se pretiče sa desne straneda upotrijebi zvučni znak upozorenja i da uključi odgovarajući pokazivač pravca", "smije da se pretiče sa lijeve strane", "ne smije da se pretiče"], answer: "smije da se pretiče sa desne strane", points: 2 },
    { id: "gq55", text: "Prilikom mimoilaženja sa pješakom, vozač je dužan da:", type: "radio", options: ["drži bezbjedno rastojanje između svog vozila i pješaka", "sirenom upozori pješaka kako bi pješak napustio kolovoz", "ubrza vozilo da se što prije mimoiđe sa pješakom"], answer: "drži bezbjedno rastojanje između svog vozila i pješaka", points: 3 },
    { id: "gq56", text: "Odstojanje između vučnog i vučenog motornog vozila, ako se vuče pomoću krute veze inosi:", type: "radio", options: ["od 3 do 5 metara", "preko 5 metra", "do 3 m"], answer: "drži bezbjedno rastojanje između svog vozila i pješaka", points: 2 },
    { id: "gq57", text: "Prolaženje vozilom pored drugog vozila koje se ne pomjera je radnja:", type: "radio", options: ["preticanja", "obilaženja", "prestrojavanja"], answer: "obilaženja", points: 2 },
    { id: "gq58", text: "Brzina kretanja teretnog vozila sa priključnim vozilom ograničena je na:", type: "radio", options: ["60 km/h", "70 km/h", "80 km/h"], answer: "70 km/h", points: 3 },
    { id: "gq59", text: "Vozač kome je dat znak za preticanje:", type: "radio", options: ["dužan je da pomjeri svoje vozilo ka desnoj ivici kolovoza", "dužan je da pomjeri svoje vozilo ka razdjelnoj liniji", "dužan je da pomjeri vozilo ka lijevoj ivici kolovoza"], answer: "dužan je da pomjeri svoje vozilo ka desnoj ivici kolovoza", points: 2 },
    { id: "gq60", text: "Da li vozila pod pratnjom smiju presijecati kolonu pješaka:", type: "radio", options: ["ne, ako je kolona duža od 30 metara", "ne, bez obzira na dužinu kolone", "da, bez obzira na dužinu kolone"], answer: "da, bez obzira na dužinu kolone", points: 2 },
    { id: "gq61", text: "U priključnom vozilu za stanovanje - kamp-prikolici:", type: "radio", options: ["smiju se prevoziti lica", "ne smiju se prevoziti lica", "ne smije se prevoziti više od pet lica"], answer: "ne smiju se prevoziti lica", points: 2 },
    { id: "gq62", text: "Teret na motornom vozilu može da pređe najudaljeniju tačku na prednjoj strani vozila:", type: "radio", options: ["do 1,5 metara", "do 1 metar", "nije ograničeno, ali se mora označiti propisanom tablom"], answer: "do 1 metar", points: 3 },
    { id: "gq63", text: "Mladi vozač je vozač:", type: "radio", options: ["koji ima manje od 12 mjeseci vozačkog iskustva", "do 24 godine života", "do 21 godinu života"], answer: "do 24 godine života", points: 2 },
    { id: "gq64", text: "Ako u kretanju vozilom na putu naiđete na saobraćajni znak 'djeca na putu' postupićete tako što ćete:", type: "radio", options: ["sa naročitom opreznošću nastaviti kretanje kako bi mogli blagovremeno zaustaviti vozilo", "prilagoditi brzinu prema opštem ograničenju za datu dionicu puta", "prilagoditi brzinu vremenskim uslovima"], answer: "sa naročitom opreznošću nastaviti kretanje kako bi mogli blagovremeno zaustaviti vozilo", points: 3 },
    { id: "gq65", text: "Kada se vozilom krećeš pored autobusa zaustavljenog na stajalištu postupićeš tako:", type: "radio", options: ["što ćeš zaustaviti vozilo i sačekati ulaz putnika u autobus, a zatim nastaviti kretanje", "što ćeš uključiti sirenu i nastaviti kretanje bez dodatne pažnje na lica koja ulaze u autobus, odnosno izlaze", "što ću se kretati smanjenom brzinom da ne ugrožavam lica koja u autobus ulaze, odnosno izlaze"], answer: "što ću se kretati smanjenom brzinom da ne ugrožavam lica koja u autobus ulaze, odnosno izlaze", points: 2 },
    { id: "gq66", text: "Vozač dok upravlja putničkim motornim vozilom u saobraćaju mora u vozilu:", type: "radio", options: ["imati najmanje dva prsluka sa reflektujućim osobinama", "imati prsluka sa reflektujućim osobinama koliko ima i mjesta za sjedenje", "imati jedan prsluk sa reflektujućim osobinama"], answer: "imati jedan prsluk sa reflektujućim osobinama", points: 3 },
    { id: "gq67", text: "Na putu u naselju na kojem brzina nije ograničena saobraćajnim znakom, vozač ne smije da se kreće brže od:", type: "radio", options: ["50 km/h", "60 km/h", "70 km/h"], answer: "50 km/h", points: 2 },
    { id: "gq68", text: "Kada se vozač uključuje vozilom sa zemljanog puta na put sa asfaltnim zastorom, potrebno je:", type: "radio", options: ["da zaustavi vozilo i ukloni blato sa točkova nakon uključenja", "da naizmjenično ubrza i smanji brzinu vozila nakon uključenja, kako bi blato spalo sa točkova", "da zaustavi vozilo i ukloni blato sa točkova prije uključenja"], answer: "da zaustavi vozilo i ukloni blato sa točkova prije uključenja", points: 2 },
    { id: "gq69", text: "Prilikom kretanja vozilom po kolovozu vozač je dužan da vozilo drži:", type: "radio", options: ["što bliže desnoj ivici kolovoza", "sredinom kolovozne trake", "bliže razdjelnoj liniji"], answer: "što bliže desnoj ivici kolovoza", points: 3 },
    { id: "gq70", text: "Saobraćajnu traku namijenjenu za kretanje vozila za gradski prevoz putnika mogu koristiti:", type: "radio", options: ["vozila za odvoz smeća", "vozila sa prevenstvom prolaza", "putnička vozila pri preticanju"], answer: "vozila sa prevenstvom prolaza", points: 2 },
    { id: "gq71", text: "Kada se iza vozila zbog spore vožnje formira kolona vozila, vozač je dužan da:", type: "radio", options: ["nastavi kretanje bez obaveze prema drugim učesnicima u saobraćaju", "na odgovarajućem mjestu na putu omogući vozilima da ga bezbjedno preteknu, obiđu ili prođu", "nastavi kretanje do prve raskrsnice sa lokalnim putem i isključi se iz saobraćaja"], answer: "na odgovarajućem mjestu na putu omogući vozilima da ga bezbjedno preteknu, obiđu ili prođu", points: 2 },
    { id: "gq72", text: "Vozač smije da zaustavi ili parkira svoje vozilo na trotoaru:", type: "radio", options: ["ako trotoar ima širinu veću od 1,6 metara", "ako je saobraćajnim znakom dozvoljeno, bez obzira na širinu trotoara i prolaza za pješake", "ako je dozvoljeno saobraćajnom signalizacijom, i ako ostane prolaz za pješake najmanje širine 1,6 metara, koji ne smije biti uz ivicu kolovoza"], answer: "ako je dozvoljeno saobraćajnom signalizacijom, i ako ostane prolaz za pješake najmanje širine 1,6 metara, koji ne smije biti uz ivicu kolovoza", points: 3 },
    { id: "gq73", text: "Vozilo koje se kreće po šinama postavljenim uz desnu ivicu kolovoza pretiče se:", type: "radio", options: ["sa bilo koje strane", "sa lijeve strane", "sa desne strane"], answer: "sa lijeve strane", points: 2 },
    { id: "gq74", text: "Za vrijeme kretanja vozila unazad:", type: "radio", options: ["moraju biti uključeni svi pokazivači pravca", "ne moraju biti uključeni svi pokazivači pravca", "mora biti uključen samo desni pokazivač pravca"], answer: "moraju biti uključeni svi pokazivači pravca", points: 2 },
    { id: "gq75", text: "Vozačka dozvola za kategoriju B može se izdati licu koje je navršilo:", type: "radio", options: ["17 godina", "17 godina i 6 mjeseci", "18 godina"], answer: "18 godina", points: 3 },
    { id: "gq76", text: "Vozač koji na kolovozu bez ulične rasvjete zaustavi ili parkira vozilo, noću ili u uslovima smanjene vidljivosti, mora na vozilu uključiti:", type: "radio", options: ["oborena svijetla", "parkirna, odnosno poziciona svijetla", "svijetla za maglu"], answer: "parkirna, odnosno poziciona svijetla", points: 2 },
    { id: "gq77", text: "Odstojanje na kojem učesnik u saobraćaju može jasno vidjeti kolovoz je:", type: "radio", options: ["preglednost", "vidno polje", "vidljivost"], answer: "vidljivost", points: 2 },
    { id: "gq78", text: "Za vožnju bicikla, gdje ne postoji posebna staza, odnosno traka, može da se koristi kolovoz:", type: "radio", options: ["u širini do 1 metra od desne ivice kolovoza", "u širini do 1,5 metara od desne ivice kolovoza", "u širini do 1,2 metra od desne ivice kolovoza"], answer: "u širini do 1 metra od desne ivice kolovoza", points: 3 },
    { id: "gq79", text: "Brzina kretanja vozila na javnom putu kada prevozi opasne materije van naselja ograničena je:", type: "radio", options: ["na 60 km/h", "na 70 km/h", "na 80 km/h"], answer: "na 70 km/h", points: 2 },
    { id: "gq80", text: "Vozač može da se uključi vozilom u saobraćaj kada:", type: "radio", options: ["uključi zvučni signal i sve pokazivače pravca", "uključi samo pokazivač pravca", "se uvjeri da ne ometa i na propisan način obavijesti ostale učesnike"], answer: "se uvjeri da ne ometa i na propisan način obavijesti ostale učesnike", points: 3 },
    { id: "gq81", text: "Kada se vozilom vrši prevoz djeteta u bezbjednosnom sjedištu:", type: "radio", options: ["dijete ne mora biti vezano sigurnosnim pojasom", "dijete ne mora biti vezano, ako je sjedište pričvršćeno sigurnosnim pojasom", "dijete mora biti vezano sigurnosnim pojasom"], answer: "dijete mora biti vezano sigurnosnim pojasom", points: 2 },
    { id: "gq82", text: "Na javnom putu gdje su kolovozne trake fizički odvojene, vozač smije vozilom da se kreće:", type: "radio", options: ["kolovoznom trakom namijenjenom za saobraćaj vozila iz suprotnog smjera", "desnom kolovoznom trakom", "lijevom i desnom kolovoznom trakom"], answer: "desnom kolovoznom trakom", points: 2 },
    { id: "gq83", text: "Lice koje se prevozi vozilom ne smije:", type: "radio", options: ["da piše poruke na telefonskom uređaju", "da ometa vozača u upravljanju", "da koristi slušalice"], answer: "da ometa vozača u upravljanju", points: 3 },
    { id: "gq84", text: "Kad se vozilom kreće unazad vozač je:", type: "radio", options: ["dužan da propusti vozilo koje dolazi iza njegovog vozila", "dužan da uključi lijevi pokazivač pravca", "nije dužan da propusti vozilo koje dolazi iza njegovog vozila"], answer: "dužan da propusti vozilo koje dolazi iza njegovog vozila", points: 2 },
    { id: "gq85", text: "Sredstvo kojim se ometa rad uređaja za mjerenje brzine kretanja vozila:", type: "radio", options: ["ne smije se koristiti na dijelu puta gdje postoji dopunska tabla radarska kontrola", "smije se koristiti na dijelu puta gdje ne postoji dopunska tabla radarska kontrola", "ne smije se koristiti i nalaziti u vozilu"], answer: "ne smije se koristiti i nalaziti u vozilu", points: 2 },
    { id: "gq86", text: "Ako se vozač nalazi na kolovozu van svog vozila:", type: "radio", options: ["dužan je da nosi prsluk sa svjetlosno reflektujućim osobinama", "nije dužan da nosi prsluk sa svjetlosno reflektujućim osobinama", "dužan je da položajem ruku upozori ostale učesnike o svom prisustvu"], answer: "dužan je da nosi prsluk sa svjetlosno reflektujućim osobinama", points: 3 },
    { id: "gq87", text: "Kada na raskrsnici vozila dolaze iz suprotnih smjerova i skreću ulijevo mimoilaze se sa:", type: "radio", options: ["desne strane", "lijeve strane", "lijeve i desne strane"], answer: "desne strane", points: 2 },
    { id: "gq88", text: "U toku kretanja za vrijeme magle na vozilu moraju da budu uključena:", type: "radio", options: ["velika svijetla", "oborena svijetla", "pokazivači pravca"], answer: "oborena svijetla", points: 2 },
    { id: "gq89", text: "Vozač koji se približava raskrsnici dužan je da:", type: "radio", options: ["poveća brzinu kretanja da što brže prođe kroz raskrsnicu", "prilagodi vožnju uslovima saobraćaja na raskrsnici", "vozi brzinom koja je propisana opštim ograničenjem"], answer: "prilagodi vožnju uslovima saobraćaja na raskrsnici", points: 3 },
    { id: "gq90", text: "U bezbjednosnom sjedištu mora da se prevozi dijete do:", type: "radio", options: ["7 godina", "6 godina", "5 godina"], answer: "5 godina", points: 2 },
    { id: "gq91", text: "Na istoj osovini vozila pneumatici moraju da budu jednaki:", type: "radio", options: ["po dimenzijama, nosivosti, brzinskim karakteristikama, vrsti konstrukciji, marki i tipu", "samo po merki, tipu, dimenzijama, novosti, vrsti i dubini šare", "samo po dimenzijama, marki i tipu"], answer: "po dimenzijama, nosivosti, brzinskim karakteristikama, vrsti konstrukciji, marki i tipu", points: 2 },
    { id: "gq92", text: "Svijetla za maglu na motornom vozilu treba da budu postavljena tako da osvjetljavaju put ispred vozila koji nije duži od:", type: "radio", options: ["15 metara", "30 metara", "35 metara"], answer: "35 metara", points: 3 },
    { id: "gq93", text: "Naslon za glavu mora biti ugrađen na sjedištu kod kojeg sigurnosni pojas:", type: "radio", options: ["je vezan u dvije tačke", "nije vezan", "je vezan u tri tačke"], answer: "je vezan u tri tačke", points: 2 },
    { id: "gq94", text: "Kad kod povrijeđenog hoćemo da zaustavimo krvarenje upotrebljavamo:", type: "radio", options: ["jod i sterilnu gazu", "kompresivni zavoj", "alkohol i sterilnu gazu"], answer: "kompresivni zavoj", points: 3 },
    { id: "gq95", text: "Broj hitne pomoći je:", type: "radio", options: ["122", "123", "124"], answer: "124", points: 2 },
    
];

const generalQuestions2 = [

    { id: "q1", text: "Radno kočenje ne mora da ima:", type: "radio", options: ["poluprikolica sa tri osovine", "putničko vozilo do 750 kg sopstvene mase", "laka prikolica"], answer: "laka prikolica", points: 1 },
    { id: "q2", text: "Svijetlo za maglu na zadnjoj strani vozila je:", type: "radio", options: ["crvene boje", "žute boje", "bijele boje"], answer: "crvene boje", points: 1 },
    { id: "q3", text: "Blatobrani na motornom vozilu moraju da budu postavljeni tako da pokrivaju širinu:", type: "radio", options: ["samo zadnjih točkova", "samo prednjih točkova", "svih točkova"], answer: "svih točkova", points: 1 },
    { id: "q4", text: "Učesnika u saobraćajnoj nezgodi koji je zadobio povrede grudnog koša postavljamo:", type: "radio", options: ["u ležeći položaj", "na bočnu stranu", "u polusjedeći položaj"], answer: "u polusjedeći položaj", points: 1 },
    { id: "q5", text: "Pod opekotinom podrazumijevamo povredu nastalu od:", type: "radio", options: ["upale kože", "djelovanja toplote", "uboda črvstog predmeta"], answer: "djelovanja toplote", points: 1 },
    { id: "q6", text: "Pod uređajem na vozilu koji omogućava normalnu vidljivost smatra se:", type: "radio", options: ["svijetlo za maglu", "poziciono svijetlo", "vjetrobran"], answer: "vjetrobran", points: 1 },
    { id: "q7", text: "Svjetlost pokazivača pravca mora da bude:", type: "radio", options: ["žute boje", "bijele boje", "crvene boje"], answer: "žute boje", points: 1 },
    { id: "q8", text: "Protiv blokirajući sistem (ABS) je dio sistema za:", type: "radio", options: ["osvjetljavanje kolovoza", "prenos snage", "za kočenje"], answer: "za kočenje", points: 1 },
    { id: "q9", text: "Pod imobilizacijom podrazumijevamo:", type: "radio", options: ["stavljanje sterilne gaze na povrijeđeni dio tijela", "stavljanje povrijeđenog dijela tijela u stanje mirovanja", "vraćanje povrijeđenog u stanje svijesti"], answer: "stavljanje povrijeđenog dijela tijela u stanje mirovanja", points: 1 },
    { id: "q10", text: "Koliki je broj otkucaja srca kod normalne zdrave osobe:", type: "radio", options: ["do 60 otkucaja u jednoj sekundi", "60 do 80 otkucaja u jednom minutu", "preko 100 otkucaja u jednom minutu"], answer: "60 do 80 otkucaja u jednom minutu", points: 1 },
    { id: "q11", text: "Slobodan hod točka upravljača na vozilu na motorni pogon ne smije biti veći od:", type: "radio", options: ["20 stepeni", "30 stepeni", "40 stepeni"], answer: "30 stepeni", points: 1 },
    { id: "q12", text: "Na motornom vozilu se serijski ugrađuju:", type: "radio", options: ["radna, pomoćna i parkirna kočnica", "radna i pomoćna kočnica i trajni usporivač", "radna i parkirna kočnica i trajni usporivač"], answer: "radna, pomoćna i parkirna kočnica", points: 1 },
    { id: "q13", text: "Najveća dozvoljena dužina motornog vozila osim autobusa je:", type: "radio", options: ["8 metara", "10 metara", "12 metara"], answer: "12 metara", points: 1 },
    { id: "q14", text: "Kada dodje do umora tokom vožnje potrebno je:", type: "radio", options: ["usporenim kretanjem nastaviti vožnju", "konzumirati energetske napitke i nastaviti vožnju", "napraviti pauzu za odmor"], answer: "napraviti pauzu za odmor", points: 1 },
    { id: "q15", text: "Krvarenje kod povrijeđenog je:", type: "radio", options: ["isticanje krvi iz krvnih sudova", "zatvoreni prelom podkoljenice", "zgrušavanje krvi u krvnom sudu"], answer: "isticanje krvi iz krvnih sudova", points: 1 },
    { id: "q16", text: "Od određene opreme u autobusu mora da postoje: ", type: "radio", options: ["tri kutije prve pomoći", "dvije kutije prve pomoći", "jedna kutija prve pomoći"], answer: "dvije kutije prve pomoći", points: 1 },
    { id: "q17", text: "Pod uređajima za davanje svjetlosnih znakova ne smatraju se:", type: "radio", options: ["stop-svijetla", "pokazivači pravca", "katadiopteri"], answer: "katadiopteri", points: 1 },
    { id: "q18", text: "Parkirnu kočnicu kod vozila vozač koristi:", type: "radio", options: ["da zaustavi vozilo kada naiđe na iznenadnu prepreku", " da spriječi pokretanje zaustavljenog vozila", "da spriječi pokretanje vozila samo dok je parkirano u garaži"], answer: " da spriječi pokretanje zaustavljenog vozila", points: 1 },
    { id: "q19", text: "Arterijsko krvarenje kod povrijeđenog prepoznaje se po:", type: "radio", options: ["laganom isticanju krvi i zgrušavanju na povrijeđenom dijela tijela", "krvi u mlazevima", "otoku i modrim podlivima povrijeđenog dijela tijela"], answer: "krvi u mlazevima", points: 1 },
    { id: "q20", text: "Ako je licu u saobraćajnoj nezgodi povrijeđena glava i vrat:", type: "radio", options: ["povrijeđenog što manje pomjerati", "postaviti ga u sjedeći položaj", "postaviti ga na bok u ležeći položaj"], answer: "postaviti ga na bok u ležeći položaj", points: 1 },
    { id: "q21", text: "Sastavni dio motora sa unutrašnjim sagorijevanjem je:", type: "radio", options: ["koljenasto vratilo", "kardansko vratilo", "poluvratilo"], answer: "koljenasto vratilo", points: 1 },
    { id: "q22", text: "Servo uređaj za upravljanje:", type: "radio", options: ["smanjuje ugao zakretanja upravljačkih točkova", "smanjuje ukupnu silu djelovanja vozača kod zakretanja točka upravljača i obezbjeđuje lakoću upravljanja", "smanjuje prečnik putanje pri skretanja vozila"], answer: "smanjuje ukupnu silu djelovanja vozača kod zakretanja točka upravljača i obezbjeđuje lakoću upravljanja", points: 1 },
    { id: "q23", text: "Svijetla glavnih svjetala treba da budu:", type: "radio", options: ["bijele boje", "žute boje", "crvene boje"], answer: "bijele boje", points: 1 },
    { id: "q24", text: "Neposredno nakon saobraćaje nezgode, lice koje je učestvovalo u saobraćajnoj nezgodi:", type: "radio", options: ["smije da konzumira alkoholno piće", "smije da konzumira sedative za smirenje", "ne smije da konzumira alkoholno piće"], answer: "ne smije da konzumira alkoholno piće", points: 1 },
    { id: "q25", text: "Ako je lice koje je povrijeđeno u saobraćajnoj nezgodi bez svijesti treba ga:", type: "radio", options: ["postaviti u ležeći položaj na leđa", "postaviti u ležeći položaj na stomak", "postaviti u bočni položaj"], answer: "postaviti u bočni položaj", points: 1 },
    { id: "q26", text: "Pod opremom motornih i priključnih vozila ne smatra se:", type: "radio", options: ["bočni retrovizor", "rezervni točak", "rezervne sijalice"], answer: "bočni retrovizor", points: 1 },
    { id: "q27", text: "Svjetlost dnevnog svijetla treba da bude:", type: "radio", options: ["žute boje", "plave boje", "bijele boje"], answer: "bočni retrovizor", points: 1 },
    { id: "q28", text: "Minimalna dubina šare na gazećoj površini pneumatika za zimsku upotrebu treba da bude:", type: "radio", options: ["2 mm", "4 mm", "1,6 mm"], answer: "4 mm", points: 1 },
    { id: "q29", text: "Broj policije je:", type: "radio", options: ["124", "112", "122"], answer: "122", points: 1 },
    { id: "q30", text: "Kod povrijeđenog lica na ranu se prvo stavlja:", type: "radio", options: ["alkohol", "voda", "sterilna gaza"], answer: "sterilna gaza", points: 1 },
    { id: "q31", text: "Vozila koja imaju ugrađene brisače vjetrobrana moraju imati i:", type: "radio", options: ["sunđer za pranje stakala", "perače vjetrobrana", "uređaj za zagrijavanje vjetrobrana"], answer: "perače vjetrobrana", points: 1 },
    { id: "q32", text: "Svjetlosni snop oborenog svijetla treba da bude:", type: "radio", options: ["izveden kao lijevi asimetrični", "simetričan", "izveden kao desni asimetrični"], answer: "izveden kao desni asimetrični", points: 1 },
    { id: "q33", text: "Uređaji za odvođenje i ispuštanje izduvnih gasova ne smiju da prelaze dimenzije vozila:", type: "radio", options: ["po dužini ili širini", "po visini", "više od 0,1 metar po dužini"], answer: "po dužini ili širini", points: 1 },
    { id: "q34", text: "Mrtvačke pjege i hladno tijelo su:", type: "radio", options: ["stanja povrijeđnog usled gubljenja svijesti zbog hladnoće", "sigurni znak smrti", "sigurni znak umora"], answer: "sigurni znak smrti", points: 1 },
    { id: "q35", text: "Broj telefona vatrogasne službe je:", type: "radio", options: ["123", "122", "124"], answer: "123", points: 1 },
    { id: "q36", text: "Svijetla za vožnju unazad kod motornih vozila moraju biti:", type: "radio", options: ["bijele boje", "crvene boje", "žute boje"], answer: "bijele boje", points: 1 },
    { id: "q37", text: "Radna kočnica motornih vozila treba da djeluje:", type: "radio", options: ["na sve točkove", "samo na prednje točkove", "samo na zadnje točkove"], answer: "na sve točkove", points: 1 },
    { id: "q38", text: "Motorno vozilo koje pored sjedišta za vozača ima još najviše osam sjedišta je:", type: "radio", options: ["autobus", "teretno vozilo", "putničko vozilo"], answer: "putničko vozilo", points: 1 },
    { id: "q39", text: "U pružanju prve pomoći u saobraćajnoj nezgodi ranu kod povrijeđenog:", type: "radio", options: ["treba isprati vodom", "treba isprati alkoholom", "ne treba ispirati tečnošću"], answer: "ne treba ispirati tečnošću", points: 1 },
    { id: "q40", text: "Pod dejstvom alkohola je vozač:", type: "radio", options: ["ako se u organizmu utvrdi sadržaj alkohola veći od 0,3 g/kg", "ako se u organizmu utvrdi sadržaj alkohola do 0,3 g/kg", "ako se u organizmu utvrdi sadržaj alkohola do 0,2 g/kg"], answer: "ako se u organizmu utvrdi sadržaj alkohola veći od 0,3 g/kg", points: 1 },
    { id: "q41", text: "Sastavni dio uređaja za upravljanje je:", type: "radio", options: ["pneumatik", "točak upravljača", "amortizer"], answer: "točak upravljača", points: 1 },
    { id: "q42", text: "Sastavni dio uređaja za osvjetljavanje puta na motornim vozilima je:", type: "radio", options: ["stop svijetlo", "gabaritno svijetlo", "svijetlo za vožnju unazad"], answer: "svijetlo za vožnju unazad", points: 1 },
    { id: "q43", text: "Sastavni dio prenosnika snage kod motornog vozila je:", type: "radio", options: ["mjenjač", "točak upravljača", "ručica parkirne kočnice"], answer: "mjenjač", points: 1 },
    { id: "q44", text: "Prilikom imobilizacije povrijeđenog lica osnovno pravilo je:", type: "radio", options: ["imobilisati cijelo tijelo povrijeđenog", "imobilisati dva susjedna zgloba", "imobilisati samo zglob koji je najbliži povrijeđenom mjestu"], answer: "imobilisati dva susjedna zgloba", points: 1 },
    { id: "q45", text: "Povrijeđeno lice koje izgubi dosta krvi ima:", type: "radio", options: ["dosta povišen krvni pritisak", "dosta usporen puls", "ubrzano i nepravilno disanje"], answer: "ubrzano i nepravilno disanje", points: 1 },

];

// Function to get fixed number of questions from each pool
function getRandomQuestions() {
    let selectedCrossroads = [...crossroadsQuestions].sort(() => 0.5 - Math.random()).slice(0, 10);
    let selectedSigns = [...signsQuestions].sort(() => 0.5 - Math.random()).slice(0, 10);
    let remainingPoints = 80 - selectedCrossroads.reduce((sum, q) => sum + q.points, 0) - selectedSigns.reduce((sum, q) => sum + q.points, 0);
    let selectedGeneral = [...generalQuestions].sort(() => 0.5 - Math.random()).slice(0, Math.max(remainingPoints / 4, 1));

    return [...selectedCrossroads, ...selectedSigns, ...selectedGeneral].sort((a, b) => a.id.localeCompare(b.id));
}

function loadQuestions() {
    const questionnaire = document.getElementById("questionnaire");
    questionnaire.innerHTML = "";

    const selectedQuestions = getRandomQuestions();
    selectedQuestions.forEach(q => {
        let questionDiv = document.createElement("div");
        questionDiv.className = "question-step";

        if (q.image) {
            let img = document.createElement("img");
            img.src = q.image;
            img.alt = "Question Image";
            questionDiv.appendChild(img);
        }

        let label = document.createElement("label");
        label.textContent = q.text;
        questionDiv.appendChild(label);

        q.options.forEach(option => {
            let radioContainer = document.createElement("div");

            let input = document.createElement("input");
            input.type = "radio";
            input.name = q.id;
            input.value = option;

            let optionLabel = document.createElement("label");
            optionLabel.textContent = option;

            radioContainer.appendChild(input);
            radioContainer.appendChild(optionLabel);
            questionDiv.appendChild(radioContainer);
        });

        questionnaire.appendChild(questionDiv);
    });
}

function showResult() {
    let correctAnswers = 0;
    let totalPoints = 0;
    let formData = new FormData(document.getElementById('questionnaire-form'));

    formData.forEach((value, key) => {
        let question = [...crossroadsQuestions, ...signsQuestions, ...generalQuestions].find(q => q.id === key);
        if (question && value === question.answer) {
            correctAnswers++;
            totalPoints += question.points;
        }
    });

    document.getElementById("result-text").innerHTML = `You answered ${correctAnswers} correctly.<br><strong>Score: ${totalPoints}/80</strong>`;
    document.getElementById("questionnaire").style.display = 'none';
    document.getElementById("result").style.display = 'block';
    document.getElementById("submit-btn").style.display = 'none';
}

document.getElementById("submit-btn").addEventListener("click", showResult);
window.onload = loadQuestions;