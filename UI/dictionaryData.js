const validWords4 = ["jazz","jizz","zizz","buzz","fuzz","muzz","fizz","wazz","hajj","juju","quiz","jeez","razz","seqq","tizz",
"jeux","jinx","jack","jock","jump","zack","doxx","jamb","jibb","jiff","jimp","jivy","joky","juku","junk","waqf","ziff",
"chez","cozy","fiqh","fozy","jank","jauk","jink","jouk","juke","mazy","phiz","qoph","whiz","zonk","zouk","zyme","baju","cinq",
"fuji","futz","fuze","hazy","jagg","jake","jaup","java","jerk","jive","joke","jook","jowl","juba","jube","judy","jupe","koji",
"puja","putz","quem","quim","quip","yuzu","zebu","zeks","zikr","zinc","baza","bize","boxy","bozo","czar","dozy","dzho","faze",
"flux","foxy","friz","hadj","jabs","jams","jape","jaws","jeep","jefe","jehu","jhil","jibe","jibs"];

const validWords5 = ["rossa","jetty","wizzo","cuppa","cohoe","gurks","squad","beisa","shrug","fossa","fluyt","camus","speed",
"mamil","array","polio","short","swish","haets","owned","musky","gimps","nodes","lefty","furca","exome","dribs","gouks","smews",
"barns","panes","souts","limas","fetch","queck","twink","graze","crock","almud","oohed","colog","wisht","beard","samel","ahind",
"brung","barca","mahal","jambe","plush","bruja","howre","middy","kabab","zeals","mazel","sputa","goory","pails","scogs","snool",
"poboy","doest","orixa","quipo","burbs","goads","blaud","flocs","harim","mamey","primp","lathy","lunes","staps","salad","agony",
"gusli","damps","tocks","hoick","marry","amply","glisk","pulis","apter","shell","capas","saunf","kutis","teggs","halsh","gamma",
"tardy","tease","towts","abuts","allee","chins","rolly","situs","bards","phyma","torrs","chace","bikky","stoor","quink","wedgy",
"vises","swore","upsee","gyves","heapy","gilas","gairs","yonic","wagon","rance","swail","laxed","panne","tabus","anomy","swarm",
"sword","pharm","penes","snoek","razet","nahal","kapus","lokey","gobos","jails","afars","nerka","cundy","snark","intra","bundh",
"tanga","baaed","solus","senor","umami","wared","sharp","pewed","tuktu","knowd","dawds","flurr","inert","taxus","ruana","sulci",
"jaded","othyl","redig","manky","ovism","matlo","cease","perae","sixes","pubco","yappy","famed","hexed","bawrs","decry","iddah",
"dixit","cased","rupia","toidy","hodad","yukes","gaffe","annoy","leugh","howay","pixel","linga","bayou","lurgy","lears","scrat",
"prize","homes","scroo","egest","mopus","verbs","maple","barfs","judge","salle","shine","zineb","flexo","gismo","rears","khads",
"begum","glade","imams","strad","venae","skene","moten","rugby","goels","khazi","belit","smolt","morin","ofays","sural","janny",
"munts","chiro","learn","mocus","slime","mokis","nevis","arcus","prigs","rente","yfere","hiker","crame","irked","naira","stire",
"nagas","peisy","miser","vivda","dolie","weave","umbel","barmy","louns","didos","viold","fowth","guqin","kayos","finca","taths",
"eliad","dorts","cooey","dicty","bobak","lowse","tuile","laked","tarts","reefy","agama","thing","shore","nicks","nunny","akoya",
"snaws","writs","doubt","alive","beaut","ibrik","hemps","towed","crout","mogul","halid","pecky","eched","musit","couth","acron",
"dynes","gothy","bundy","seeps","deeps","plene","kukus","petre","putto","darls","warps","shoji","emoji","hiked","omits","rainy",
"fills","zines","bores","algor","oliva","midge","vizor","hafta","mulla","paled","kneed","fibre","ptish","redan","exode","zorro",
"droll","niece","segno","sceat","tunes","mompe","radon","akkas","jowly","gandy","medii","knelt","evoke","lowts","teaks","bucko",
"groks","leafy","meses","synes","laths","zedas","blank","japed","voled","toxic","reach","nazzy","pubsy","pedro","cucks","baith",
"magas","gompa","bilby","popes","hents","auras","giddy","tacos","onned","bowed","tsars","slogs","grind","morel","asada","weeke",
"winna","amman","sabji","runts","slops","tread","loofa","fever","glove","trist","creps","pheon","beres","corso","sofar","reeze",
"pisos","lames","treck","boabs","apply","grata","daals","soyas","amour","gernec","dudes","nifle","again","slurp","ulnar","ettin",
"noles","gobar","bohos","kawas","coati","scail","helot","motel","tides","coven","jasey","flown","urubu","kiddo","nrtya","pinna",
"curbs","botas","cycle","yugas","ugali","opter","laver","ousts","ootid","easel","lewis","renos","paned","cunit","muils","jehus",
"ebike","cotch","upper","theor","unais","idiot","manes","sawer","gazoo","edged","pikey","meech","adyts","boite","ixias","alios",
"padle","lotah","ragas","pudus","meare","graip","quack","noise","livre","pheme","chest","lined","azlon","waves","achoo","valve",
"mawks","hydro","muxed","etude","smith","mends","pisco","cilia","algos","nenes","karma","neant","visie","volar","burro","doeth",
"ecrus","dekes","seepy","facts","pours","gambo","mensa","swept","oafos","shock","roams","potts","piker","tings","fount","daunt",
"battu","licit","cider","fords","palms","wheep","copes","whelm","usnea","staid","dosai","patka", "board", "staff"];

const validWords6 = ["bezazz","jazzbo","pazazz","pizazz","jazzed","zizzed","zizzle","jazzer","pazzes","jizzes","zizzes","muzjik",
"whizzy","mizzly","scuzzy","buzzed","frizzy","fuzzed","huzzah","jujube","muzzle","puzzle","whizzo","buzzer","buzzes","fezzed","fizzed",
"fizzle","fuzzes","guzzle","mezuza","mizzen","mizzle","mozzle","pizzle","wazzed","wizzen","zigzag","bezzie","bizzes","cozzes","cozzie",
"fezzes","fizzer","fizzes","hazzan","huzzas","jojoba","mezzos","mozzie","nuzzle","piazza","piazze","pizzas","queazy","snazzy","wazzes",
"banjax","bijoux","dazzle","hajjes","hajjis","jejuna","jejune","nozzle","paxwax","quezal","zizith","exequy","izzard","jezail","muzhik",
"quacky","quartz","razzed","razzle","sezzed","sizzle","zanzas","zazens","zebeck","zincky","blowzy","bombyx","buzuki","coccyx","gazump",
"hijack","jacksy","jimply","jinxed","jockey","jubbah","kuvasz","quamby","quippy","quokka","razzes","razzia","rozzer"];

const dictionary = {
  4: validWords4,
  5: validWords5,
  6: validWords6,
};
export const getDictionary = (wlength) => {
  return dictionary[wlength];
};
