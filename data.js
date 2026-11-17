/* Rogue Trader Crash Course — içerik verisi
   Türkçe karşılıklar ÇEVİRİ ÖNERİSİDİR; oyun içi resmî metinlerden farklı olabilir.
   Sözlükteki "Oyundaki" sütunu ile grup kendi doğrulamasını yapabilir. */

const GLOSSARY = [
  // [kategori, EN, TR (öneri), açıklama]
  ["Dünya", "Rogue Trader", "Rogue Trader (ferman sahibi tüccar-kaşif)", "İmparatorluk adına sınır ötesi keşif ve ticaret yapma yetkisi (Warrant of Trade) olan soylu; oyundaki ana karakter."],
  ["Dünya", "Warrant of Trade", "Ticaret Fermanı", "Rogue Trader'a geniş yetkiler veren belge. Normalde yasadışı sayılan birçok şeyi yapabilirsiniz, ama sonuçları olur."],
  ["Dünya", "Lord Captain", "Lord Kaptan", "Rogue Trader'ın unvanı. Co-op'ta oturumun 'baş karakteri' ve büyük kararları veren oyuncu."],
  ["Dünya", "Koronus Expanse", "Koronus Bölgesi", "Oyunun geçtiği, az haritalanmış uzay bölgesi."],
  ["Dünya", "Voidship", "Boşluk Gemisi (uzay gemisi)", "Şehir büyüklüğünde, binlerce mürettebatlı geminiz."],
  ["Dünya", "Warp / Immaterium", "Warp / İmmateryum", "Gerçek uzayın 'altındaki' tehlikeli boyut; gemiler hızlı seyahat için buradan geçer."],
  ["Dünya", "Navigator", "Navigatör", "Gemiyi Warp'tan güvenle geçirebilen özel kişi. İyi bir Navigatör seyahati güvenli yapar."],
  ["Dünya", "Psyker", "Psişer (psişik güç kullanıcı)", "Warp'tan güç çeken kişi. Sanctioned (kayıtlı) ve Unsanctioned (kayıtsız) olarak ayrılır; kayıtsızlar daha risklidir (Idira her güçte Perils tetikleyebilir)."],
  ["Dünya", "Imperium", "İmparatorluk (Imperium)", "İnsanlığın İmparatorluğu."],

  ["Karakter", "Homeworld", "Anavatan Dünyası", "Pasif bonusları ve NPC'lerin sizi nasıl gördüğünü etkileyen ilk stratejik seçim (Death World, Voidborn, Hive World, Forge World, Imperial World, Fortress World)."],
  ["Karakter", "Origin", "Köken", "Karakterin geçmişi: hikâye, diyalog seçenekleri ve bir stat bonusu. Yama 1.5'te dört köken baştan tasarlandı."],
  ["Karakter", "Triumph / Darkest Hour", "Zafer / En Karanlık Saat", "Yaratımdaki lore seçimleri: en büyük başarı ve en büyük başarısızlık. Oyunda NPC'ler bunlara atıf yapar; mekanik etkisi küçük, hikâye tadı büyük."],
  ["Karakter", "Archetype", "Arketip (sınıf)", "Sınıf. 3 kademe: Tier 1 (başlangıç), Tier 2 (16. seviyede), Tier 3 / Exemplar (36. seviyede)."],
  ["Karakter", "Characteristics", "Karakteristikler (ana statlar)", "Yüzde şans olan temel değerler: WS, BS, Str, Tgh, Agi, Int, Per, Wil, Fel."],
  ["Karakter", "Skills", "Beceriler", "Karakteristiklerden türeyen, check'lerde kullanılan değerler (Athletics, Logic, Medicae, Tech-Use…)."],
  ["Karakter", "Talents", "Yetenekler", "Seviye atlayınca seçilen pasifler/aktifler."],
  ["Karakter", "Bonus (characteristic bonus)", "Bonus (onlar basamağı)", "Bir karakteristiğin onlar basamağı (38 → bonus 3). Başarının kalitesini (hasar, HP, initiative) belirler; toplam değer ise başarı şansını."],
  ["Karakter", "Weapon Skill (WS)", "Yakın Dövüş Becerisi", "Yakın dövüş isabet şansı."],
  ["Karakter", "Ballistic Skill (BS)", "Balistik Beceri (menzilli)", "Menzilli silah isabet şansı."],
  ["Karakter", "Strength (Str)", "Güç", "Yakın dövüş hasarı (+1 hasar / bonus puanı), Athletics."],
  ["Karakter", "Toughness (Tgh)", "Dayanıklılık", "HP (Wounds) ve zehir/hastalık direnci; Carouse."],
  ["Karakter", "Agility (Agi)", "Çeviklik", "Initiative, Dodge, Demolition."],
  ["Karakter", "Intelligence (Int)", "Zekâ", "Lore, Logic, Medicae, Tech-Use'u besler."],
  ["Karakter", "Perception (Per)", "Algı", "Tuzak/gizli loot tespiti; savunma ve isabet tamamlayıcısı."],
  ["Karakter", "Willpower (Wil)", "İrade", "Zihinsel/psişik etkilere direnç; psişerler için kritik."],
  ["Karakter", "Fellowship (Fel)", "Sosyallik (ilişki kurma)", "Persuasion, Coercion, Commerce becerilerini besler."],
  ["Karakter", "Persuasion", "İkna", "Diyalogda karşıdakini ikna etme."],
  ["Karakter", "Coercion", "Gözdağı / Zorlama", "Tehditle ikna."],
  ["Karakter", "Commerce", "Ticaret", "Tüccarlarla kârlı pazarlık."],
  ["Karakter", "Tech-Use", "Teknoloji Kullanımı", "Kapı/konteyner/kogitatör hack'i. Partide en az bir kişide yüksek olmalı."],
  ["Karakter", "Medicae", "Tıp (Medicae)", "Medkit'lerin etkisi ve eski yaralanmaları iyileştirme şansı."],
  ["Karakter", "Lore (Imperium / Warp / Xenos)", "Bilgi (İmparatorluk / Warp / Yabancı ırklar)", "Ek diyalog seçenekleri ve bulmaca çözümleri açar."],
  ["Karakter", "Convictions", "İnançlar (Dogmatic / Iconoclast / Heretical)", "Seçimlerinizle biriken üç ahlaki/felsefi çizgi; her biri 5 kademe buff verir."],
  ["Karakter", "Dogmatic", "Dogmatik", "Katı, İmparatorluk doktrinine bağlı çizgi (ateş/yanma ağırlıklı buff'lar, 'Grim Determination' gibi)."],
  ["Karakter", "Iconoclast", "İkonoklast", "Merhametli/'doğru olanı yap' çizgisi; ekip dayanıklılığı ve yetenek kolaylığı."],
  ["Karakter", "Heretical", "Heretik (sapkın)", "Yasaklı güçlere ve riskli yollara açık çizgi; psişik güçlere eğilimli."],
  ["Karakter", "Respec", "Yeniden dağıtım (respec)", "Karakteri sıfırlayıp yeniden kurma; gemideki High Factotum üzerinden yapılır."],

  ["Savaş", "Wounds", "Yaralar (= HP / Can)", "Can puanı. Sıfırlanınca karakter bilincini kaybeder; savaş sonunda otomatik kalkar."],
  ["Savaş", "Temporary Wounds", "Geçici Yaralar (kalkan gibi)", "Gerçek canınızdan önce erir; mavi çubuk."],
  ["Savaş", "Injury", "Yaralanma", "Tuzak ya da tek vuruşta canın yarısından fazlasını kaybetmek gibi durumlarda alınır; birikince Trauma olur."],
  ["Savaş", "Trauma", "Travma", "Birkaç Injury birikince oluşur; statları düşürür. Gemide dinlenmek temizler."],
  ["Savaş", "Fresh / Old injury", "Taze / Eski yaralanma", "Taze yaralanma medkit ile garantili iyileşir; belli tur geçince 'eski' olur ve Medicae check gerekir (tur sayısı zorluğa bağlı)."],
  ["Savaş", "Action Points (AP)", "Aksiyon Puanı", "Yetenek/aksiyonları ödediğiniz puan."],
  ["Savaş", "Movement Points (MP)", "Hareket Puanı", "Ne kadar hareket edebileceğiniz."],
  ["Savaş", "Initiative", "Girişim sırası (initiative)", "Savaş sırası. Agility ve Perception bonusundan etkilenir."],
  ["Savaş", "Momentum", "Momentum (ivme)", "Ekibin savaş gidişat çubuğu. Yüksekse Heroic Act, düşükse Desperate Measure açılır."],
  ["Savaş", "Heroic Act", "Kahramanlık Eylemi", "Momentum lehinizeyken açılan ultimate. Dezavantajı yoktur. İlk kullanım 75 momentum, sonrakiler +25 daha pahalı (video verisi; yamayla değişmiş olabilir)."],
  ["Savaş", "Desperate Measure", "Çaresiz Hamle", "Momentum aleyhinizeyken açılan ultimate; güçlüdür ama bedeli vardır (örn. Charge'ı kaybetmek)."],
  ["Savaş", "Resolve", "Azim (resolve)", "Tur başında ve öldürmede ne kadar momentum kazandığınızı belirler."],
  ["Savaş", "Veil Degradation", "Perde (Veil) Bozulması", "Psişik güç kullandıkça dolan gösterge. Yükseldikçe psişik olay ve Warp tehlikesi riski artar. Her turda azalır."],
  ["Savaş", "Psychic Phenomena / Perils of the Warp", "Psişik Olaylar / Warp Tehlikeleri", "Hafif: debuff, momentum kaybı. Ağır: iblis çağrılması, hasar."],
  ["Savaş", "Dodge", "Kaçınma (Dodge)", "Başarılı olursa hasar almazsınız."],
  ["Savaş", "Parry", "Savuşturma (Parry)", "Yakın dövüş saldırısını savuşturma."],
  ["Savaş", "Armor / Deflection", "Zırh / Saptırma (Deflection)", "Önce saptırma (mümkünse) uygulanır; kalan hasar zırh yüzdesiyle azalır."],
  ["Savaş", "Penetration", "Zırh Delme (Penetration)", "Silahın zırhı/saptırmayı aşma gücü."],
  ["Savaş", "Cover (full / half)", "Siper (tam / yarım)", "Tam siper isabet şansını %60, yarım siper %35 düşürür (zorlukla ölçeklenir)."],
  ["Savaş", "Exploit", "Zaaf (Exploit) yığını", "Operatif yetenekleriyle hedefe konan; sonraki isabetli saldırıda fazladan hasar."],
  ["Savaş", "Charge", "Hücum (Charge)", "Mesafe kapatıp bedava saldırı hakkı veren yetenek (Warrior'ların temel aracı)."],
  ["Savaş", "Run and Gun", "Koş ve Ateş Et", "Hareket + ek atış; ama Winded (−10 BS) uygular."],
  ["Savaş", "Winded", "Nefessiz (Winded)", "−10 Ballistic Skill; bir sonraki tur sonuna kadar sürer."],
  ["Savaş", "Burst fire / Recoil", "Seri atış / Geri tepme", "Seri atışta isabet cezası ve ilk atıştan sonra her atışta Recoil kadar BS düşüşü olur; mermiler hedeften sapabilir."],
  ["Savaş", "Reload", "Doldurma", "Menzilli silahlar mermi bitince doldurulur (örnekteki silahta 4 AP). Savaş dışında otomatik dolar."],
  ["Savaş", "Tactical phase", "Taktik evresi", "Düşmanı siz şaşırtırsanız savaş öncesi birlikleri konumlandırabilirsiniz."],
  ["Savaş", "Attack of opportunity", "Fırsat saldırısı", "Düşmanın yakın mesafesinden geçerken ödenen bedava saldırı."],
  ["Savaş", "Friendly fire", "Dost ateşi", "Alan etkili yetenekler müttefikleri de vurur; imleçteki kırmızı kareleri izleyin."],
  ["Savaş", "Weapon set", "Silah seti", "Her karakterde iki set bulunur; set değiştirmek AP harcamaz."],

  ["Ekonomi", "Profit Factor", "Kâr Faktörü", "Servetinizi gösteren soyut para birimi; satın alma gücünüz."],
  ["Ekonomi", "Reputation", "İtibar", "Fraksiyonlarla ilişkiniz; yüksek itibar daha iyi mallar açar."],
  ["Ekonomi", "Cargo", "Kargo", "Gemideki konteyner sistemi. Çöp eşyaları buraya atıp fraksiyonlara satarak itibar kazanırsınız."],
  ["Ekonomi", "Colony / Projects", "Koloni / Projeler", "Sahip olduğunuz gezegenlerde başlatılan, zamanla biten ve kaynak/itibar/silah getiren işler."],
  ["Ekonomi", "Contracts", "Sözleşmeler (Kontratlar)", "Kaynak takası fırsatları (ör. kaynağı Profit Factor'a çevirmek)."],
  ["Ekonomi", "Rumors", "Söylentiler", "Bazıları yeni içerik açar, bazıları boş çıkar; gidip doğrulamanız gerekir."],
  ["Ekonomi", "Scrap", "Hurda (Scrap)", "Gemi onarımı ve Hull/Ram yükseltmesi için kaynak."],
  ["Ekonomi", "Insight Points", "Kavrayış (Insight) Puanları", "Warp rotalarını daha güvenli yapmak için harcanır; harcamadan önce düşünün."],

  ["Gemi", "Hull", "Gövde (Hull)", "Geminin can puanı; scrap ile yükseltilir."],
  ["Gemi", "Ram", "Şahmerdan (Ram)", "Çarpma hasarını artırır / alınan hasarı azaltır; scrap ile yükseltilir."],
  ["Gemi", "Shields (per side)", "Kalkanlar (her yöne ayrı)", "Her geminin her yönünde kalkan vardır; önce kalkan kırılır sonra gövde."],
  ["Gemi", "Posts", "Gemi Mevkileri (Posts)", "Yetenekleri kullanabilmeniz için mürettebattan birini atamanız gereken görevler."],
  ["Gemi", "Swing Run", "Dönüş Manevrası (Swing Run)", "Geminin yerinde U dönüşü yapmasını sağlayan yetenek."],
  ["Gemi", "Torpedoes", "Torpidolar", "Kontrol edilebilir; çok yüksek hasar verir."],
  ["Gemi", "High Factotum", "Yüksek Kâhya (High Factotum)", "Gemideki NPC; respec ve yeni özel karakter (retinue) ekleme seçenekleri sunar."],
  ["Co-op", "Cooperative mode", "Kooperatif mod", "6 oyuncuya kadar. Host, Rogue Trader'dır."],
  ["Co-op", "Retinue", "Maiyet (retinue)", "Parti. Özel karakter oluşturma seçeneği 'maiyetimi güçlendirmek istiyorum' diyaloğuyla açılır."],
  ["Co-op", "Simultaneous combat", "Eş zamanlı savaş", "Co-op'ta isteğe bağlı mod; varsayılan kapalı."]
];

const HOMEWORLDS = [
  { en: "Death World", tr: "Ölüm Dünyası", role: "Tank / hayatta kalma", text: "Düşük canda otomatik %20 iyileşme (savaş başına bir kez), geçici yaralar varken Dodge ve zırh bonusu, ateş/kanama/zehir hasarına direnç; bir kez stun/blind/immobilize yerine can kazanma. Balta/çekiç/yakın silahlarda hasar bonusu." },
  { en: "Voidborn", tr: "Boşluk Doğumlu", role: "Şans / kritik / psişer", text: "Başarısız zarlarda %20 şansla başarı; düşman Dodge/Parry'si %20 şansla başarısız sayılır. Kritik hasar bonusu, ölümcül hasarda hayatta kalma şansı. Ekstra irade sayesinde psişerler için de iyi." },
  { en: "Hive World", tr: "Kovan Dünyası", role: "Kalabalıkta savaşan", text: "Etrafta müttefik/düşman çokken Resolve ve hareket artar, yalnızken ceza alır. Yakın dövüş performansı artar." },
  { en: "Forge World", tr: "Dövme (Forge) Dünyası", role: "Ağır zırh / uzun savaş", text: "Zırh, hareket hızı veya kritik şansından birini seçersiniz. Ağır zırhta ek azaltma, ateşe direnç, plazma/melta/power silah hasarı; saldırdıkça etkinlik artar." },
  { en: "Imperial World", tr: "İmparatorluk Dünyası", role: "Her sınıfa uyar", text: "Sabit stat modifiyesi yok; Humanity's Finest ile seçtiğiniz bir karakteristiğe (WS/BS hariç) cezasız +10. Canınız %40'ın altına düşünce büyük buff. Esnek, güvenli seçim." },
  { en: "Fortress World", tr: "Kale (Fortress) Dünyası", role: "Silahlı asker", text: "Her öldürmede birikimli %10 ihtimalle bedava saldırı; ilk reload bedava; ateş etmek Dodge'u artırır." }
];

const ORIGINS = [
  { en: "Astra Militarum Commander", tr: "Astra Militarum Komutanı", text: "Grup buff'ı, menzilli silah odaklı (BS) ve algı bonusu. ⚠ Yama 1.5'te baştan tasarlandı." },
  { en: "Commissar", tr: "Komiser (Commissar)", text: "At All Costs! (müttefike ateş edip buff verme) + Iconic Sidearm (tabanca); BS ve Fellowship bonusu. ⚠ Yama 1.5'te yeniden yapıldı: eski rehberler yanıltabilir." },
  { en: "Crime Lord", tr: "Suç Lordu", text: "Sağlam bir arka plan hikâyesi; hasar/dodge/debuff odaklı 'Surefire Plan', WS ve Perception bonusu." },
  { en: "Ministorum Priest", tr: "Ministorum Rahibi", text: "Momentum üretimi, dayanıklılık ve irade bonusu. ⚠ Yama 1.5'te yeniden yapıldı." },
  { en: "Navy Officer", tr: "Donanma Subayı", text: "'Brace for Impact!' ile yakındaki dostlara koruma; yakın dövüş/tank/destek odaklı (TGH, PER bonusu). ⚠ Yama 1.5'te yeniden yapıldı: eski rehberlerdeki AGI/FEL bonusu artık geçerli değil." },
  { en: "Noble", tr: "Soylu", text: "Bir parti üyesini 'hizmetkâr' atayıp güçlendirirsiniz; Intelligence (lore) bonusu ve diyalog seçenekleri." },
  { en: "Sanctioned Psyker", tr: "Kayıtlı Psişer", text: "Kendi başına neredeyse bir sınıf: alt dal seçilir — Biomancer (iyileştirme/buff), Diviner (şans buff'ı), Pyromancer (ateş), Sanctic (buff/debuff), Telepath (saf psişik hasar). Veil'e dikkat." },
  { en: "Arbitrator (Lex Imperialis DLC)", tr: "Arbitrator / Arbites (Lex Imperialis DLC)", text: "DLC kökeni; üç alt dal: Vigilant (pompalı), Castigator (debuff/komut), Subductor (kalkan)." }
];

const ARCHETYPES = [
  // tier, en, tr, rating, role, from, note
  { tier: 1, en: "Officer", tr: "Subay (Officer)", rate: "S", role: "Destek / aksiyon ekonomisi", from: "—", note: "Müttefiklere bonus tur verir; en affedici başlangıç. Tier 2'de Grand Strategist / Master Tactician'a açılır." },
  { tier: 1, en: "Bladedancer (Void Shadows DLC)", tr: "Kılıç Dansçısı (DLC)", rate: "S", role: "Yakın dövüş carry", from: "—", note: "Parry/Dodge tabanlı kılıç uzmanı. ⚠ Yaratım anında kilitlenir; DLC'yi baştan yükleyin." },
  { tier: 1, en: "Soldier", tr: "Asker (Soldier)", rate: "A", role: "Menzilli carry", from: "—", note: "Run and Gun ile vur-yer değiştir-yine vur. Arch-Militant veya Master Tactician'a güzel akar." },
  { tier: 1, en: "Operative", tr: "Operatif (Operative)", rate: "A", role: "Debuff / zaaf", from: "—", note: "Analyse Enemy gibi araçlarla zaaf yığar. 1.6'da iyileştirildi. Öğrenmesi biraz zaman alır." },
  { tier: 1, en: "Warrior", tr: "Savaşçı (Warrior)", rate: "B", role: "Yakın dövüş / tank", from: "—", note: "Charge ile ön saf; sağlam ama zor zorluklarda konumlanma zahmetli." },

  { tier: 2, en: "Grand Strategist", tr: "Büyük Stratejist", rate: "S", role: "Destek (tepe)", from: "Operative veya Officer", note: "Bölge bazlı, tüm partiyi kapsayan buff'lar; ekstra tur verebilir." },
  { tier: 2, en: "Arch-Militant", tr: "Baş Militan", rate: "S", role: "Hasar motoru", from: "Warrior, Soldier veya Bladedancer", note: "Silah türleri arasında geçiş yapınca 'Versatility' yığılır. Geç oyun hasar kralı." },
  { tier: 2, en: "Master Tactician", tr: "Usta Taktisyen", rate: "A", role: "Momentum → hasar", from: "Soldier, Officer veya Bladedancer", note: "Parti momentumunu kişisel hasara çevirir; grup saldırıları da var." },
  { tier: 2, en: "Bounty Hunter", tr: "Ödül Avcısı", rate: "A", role: "Av işaretli menzilli", from: "Soldier veya Operative", note: "Av (prey) işaretiyle büyük buff ve garantili kritikler; büyük savaşlarda güçlü." },
  { tier: 2, en: "Assassin", tr: "Suikastçı", rate: "A", role: "Tek hedef patlama", from: "Warrior, Operative veya Bladedancer", note: "1.6'da güçlendirildi; hâlâ konumlanmaya bağlı." },
  { tier: 2, en: "Vanguard", tr: "Öncü (Vanguard)", rate: "B", role: "Misilleme tank", from: "Warrior veya Officer", note: "Sağlam savunma; hücum tavanı düşük." },
  { tier: 2, en: "Executioner (Void Shadows DLC)", tr: "İnfazcı (DLC)", rate: "B", role: "Zamanla hasar", from: "Warrior, Operative veya Bladedancer", note: "Hasar-zamanla bruiser; 1.5 direnç reformunda dizginlendi." },
  { tier: 2, en: "Overseer (Lex Imperialis DLC)", tr: "Gözetmen (DLC)", rate: "?", role: "Siber-familiar destek", from: "Officer veya Operative (ya da Psyker/Arbites origin)", note: "Siber-familiar'ları komuta eden destek uzmanı. Sıralaması kaynaklarda yok." },
  { tier: 3, en: "Exemplar", tr: "Örnek Alan / Exemplar", rate: "—", role: "Tier 3", from: "36. seviyede, herhangi bir Advanced ile", note: "Basic ve Advanced arketipinizin yeteneklerini geliştirir. Oyun sonuna doğru; şimdilik takılmayın." }
];

const COMPANIONS = [
  // name, arch, role tags, tier, join (spoiler), romance, note
  { n: "Abelard Werserian", arch: "Warrior", tags: ["tank","melee"], tier: "B", join: "Prolog (otomatik)", rom: "Yok", note: "Güvenilir ön saf. 'Asla yüz üstü bırakmaz ama tek başına savaş kazandırmaz.'", role: "Ön saf tank", path: "Vanguard (öneri)", sk: "Athletics, Carouse" },
  { n: "Idira Tlass", arch: "Operative (psişer)", tags: ["caster","support"], tier: "A", join: "Prolog (otomatik)", rom: "Yok", note: "Başta zayıf, geç oyunda çok güçlü. Her psişik güçte rastgele Perils of the Warp riski (sıradan psişerler gibi eşik beklemez): vahşi büyücü gibi; çok felaket çıkarırsa partiden çıkarabilirsiniz [Video 3].", role: "Psişer / geç oyun kontrol", path: "Yol kaynaklarda net değil; oyunda tooltip'e bakın", sk: "Lore (Warp), Awareness" },
  { n: "Sister Argenta", arch: "Soldier", tags: ["ranged","aoe"], tier: "S", join: "Prolog (otomatik)", rom: "Yok", note: "Menzilli carry; ağır bolter en yüksek hasar kaynaklarından.", role: "Menzilli AoE hasar", path: "Arch-Militant veya Bounty Hunter (öneri)", sk: "Demolition, Awareness" },
  { n: "Cassia Orsellio", arch: "Officer", tags: ["support","navigator","aoe"], tier: "S", join: "Bölüm 1", rom: "Yalnızca erkek Rogue Trader", note: "Navigatör; AoE ve parti buff'ları. Tartışmasız ilk tercih.", role: "En güçlü destek, Navigatör", path: "Grand Strategist (veya Master Tactician)", sk: "Persuasion, Coercion" },
  { n: "Pasqal Haneumann", arch: "Operative", tags: ["ranged","tech","support"], tier: "B", join: "Bölüm 1", rom: "Yok", note: "Yardımcı/teknik. Kişisel hasarı orta; Tech-Use'u partiye katar.", role: "Tech + debuff / yardımcı", path: "Grand Strategist (öneri; kişisel hasar zaten ikinci planda)", sk: "Tech-Use, Logic, Medicae" },
  { n: "Heinrix van Calox", arch: "Warrior", tags: ["melee","caster"], tier: "S", join: "Bölüm 1", rom: "Yalnızca kadın Rogue Trader", note: "Yakın dövüş + psişer melezi; esnek üçüncü koltuk. Bölüm 2 başında bir süre ayrılır.", role: "Yakın dövüş + psişer melez", path: "Warrior kapısı; tek bir yola odaklanın", sk: "Athletics, Lore (Xenos)" },
  { n: "Jae Heydari", arch: "Officer", tags: ["support"], tier: "A", join: "Bölüm 2", rom: "Herkes", note: "Cold Trader bonuslarıyla çok güçlü; buff veya kişisel hasar.", role: "Yüz / destek, çok yönlü", path: "Grand Strategist veya Master Tactician (destek)", sk: "Commerce, Logic, Tech-Use, Lore (Imperium), Lore (Xenos), Persuasion" },
  { n: "Yrliet Lanaevyss", arch: "Operative", tags: ["ranged"], tier: "B", join: "Bölüm 2", rom: "Herkes", note: "Keskin nişancı. Kaynaklar arasında fikir ayrılığı var (kimi A/kimi B). Erken fiziksel yaklaşım romantik hattı bozar.", role: "Keskin nişancı", path: "Bounty Hunter (öneri)", sk: "Awareness, Lore (Xenos)" },
  { n: "Ulfar", arch: "Soldier → Arch-Militant", tags: ["tank","melee"], tier: "C", join: "Bölüm 3", rom: "Yok", note: "Güçlü ama ön saf sorunu çözüldükten sonra geliyor.", role: "Ağır yakın dövüşçü", path: "Arch-Militant (hazır gelir)", sk: "Awareness, Demolition" },
  { n: "Marazhai Aezyrraesh", arch: "Warrior → Assassin", tags: ["melee"], tier: "B", join: "Bölüm 3", rom: "Herkes", note: "Yakın dövüş suikastçısı; katılımı diyalog tabanlı, kaçırılabilir.", role: "Yakın dövüş suikastçısı", path: "Assassin (hazır gelir)", sk: "Kaynaklarda önerilen yok" },
  { n: "Kibellah (Void Shadows)", arch: "Assassin", tags: ["melee"], tier: "A", join: "DLC görev hattı", rom: "Herkes", note: "En iyi yakın dövüş yoldaşı olarak anılıyor.", role: "Hareketli yakın dövüş patlaması", path: "Assassin", sk: "Demolition, Medicae" },
  { n: "Solomorne Anthar (Lex Imperialis)", arch: "Overseer", tags: ["support"], tier: "C", join: "Bölüm 2 (≈24. seviye)", rom: "Herkes", note: "Hikâye değeri savaş değerinden yüksek.", role: "Destek, siber-mastiff", path: "Overseer (bazı kaynaklar Arch-Militant yolunu daha güçlü buluyor)", sk: "Coercion, Demolition" },
  { n: "Eogunn Februs (Infinite Museion)", arch: "Officer", tags: ["support"], tier: "—", join: "Bölüm 2–4", rom: "—", note: "Cassia/Jae ile destek koltuğu için yarışır.", role: "Destek / galvanik buff", path: "Officer yolları", sk: "Kaynaklarda önerilen yok" },
  { n: "Stella (Processional of the Damned)", arch: "Henüz açıklanmadı", tags: ["caster"], tier: "—", join: "DLC 4 (8 Aralık 2026, henüz çıkmadı)", rom: "—", note: "Final DLC'nin yoldaşı: Ecclesiarchy'nin 'mucize' saydığı kayıtsız (unsanctioned) bir psişer; Miraculist origin'i var. Detaylar çıkış sonrası netleşir.", role: "Psişer (açıklanmadı)", path: "Henüz bilinmiyor", sk: "Henüz bilinmiyor" }
];

const DIFFICULTY = [
  { n: "Story", tr: "Hikâye", text: "Sadece hikâye ve seçimler. Düşman statları −%30, can −%60, hasar −%60 (Fextralife). Skill check'lerde de bonus verir." },
  { n: "Normal", tr: "Normal", text: "Referans deneyim; CRPG'ye yeni olanlar için iyi taban. Önerimiz: ilk geçiş için bu." },
  { n: "Daring", tr: "Cesur", text: "Normal'den biraz zor. Taze yaralanma 3 tur sonra eskiye döner (zorluk tablosuna göre)." },
  { n: "Hard", tr: "Zor", text: "Düşman statları ve hasar artar; Wiki 'sistemi bilmeyenlere önerilmez' diyor." },
  { n: "Unfair", tr: "Adaletsiz", text: "Optimizasyon zorunlu hale gelir; uzman Rogue Trader'lara." }
];

const DLCS = [
  { n: "Void Shadows", date: "24 Eylül 2024", tag: "İlk alın", pass: "Season Pass 1",
    comp: "Kibellah (Death Cult suikastçısı; Assassin)", arch: "Bladedancer (Basic) + Executioner (Advanced)", mech: "Yeni mekanik yok; arketipler + yoldaş.",
    story: "Genestealer Cult mürettebatınıza sızar; hikâye kendi geminizde geçer (~15 saat).",
    coop: "Kibellah, yakın dövüş koltuğu için güçlü bir yoldaş seçeneği; bir oyuncunun 2 karakterinden biri olabilir. Bladedancer yalnızca karakter yaratılırken seçilebildiği için host'un DLC'yi oyuna başlamadan kurması gerekir. Co-op'ta ücretli DLC paylaşılmadığından tüm oyuncularda Void Shadows olmalı (bkz. DLC uyumluluk kontrolü); Bladedancer'ı özel co-op karakterinde seçip seçemeyeceğinizi oyunda kontrol edin." },
  { n: "Lex Imperialis", date: "24 Haziran 2025", tag: "Kalkan + pompalı için", pass: "Season Pass 1",
    comp: "Solomorne Anthar (Arbitrator, Overseer) + cyber-mastiff Glaito", arch: "Arbitrator origin (Vigilant / Castigator / Subductor) + Overseer (Advanced)", mech: "Kalkanlar (yeni ekipman türü) ve familiar'lar (cyber-mastiff, siber-kartal).",
    story: "Adeptus Arbites bir davayla Koronus Expanse'e gelir (~15 saat). Yama 1.4 ile birlikte çıktı.",
    coop: "Kalkanlı pompalı ön saf (Subductor) veya familiar'lı destek (Overseer) için yeni bir rol seçeneği açar; familiar sahibinin turuna ek saldırı kaynağı ekler. Arbitrator origin yaratım anında seçilir (Lord Captain için); özel co-op karakterinde seçilip seçilemediğini oyunda kontrol edin. Diğer oyuncular Solomorne'u veya Overseer yolunu kullanabilir. Solomorne'un savaş değeri topluluğa göre ortada: koltuğu daha çok hikâyesi için seçin." },
  { n: "The Infinite Museion", date: "11 Haziran 2026", tag: "Augment / 2. oynayış", pass: "Season Pass 2",
    comp: "Eogunn Februs (Tech-Priest; Officer tipi destek, servo-kafatası Nuncius)", arch: "Yeni arketip/origin yok", mech: "Sector Bionica: 6 vücut slotunda 100'den fazla augment; Ferrum Sanctum statı; Galvanization.",
    story: "Necron Overlord Trazyn the Infinite'in kasası ve von Valancius hanedanının geçmişi. Görev hattı 2. Perde'de başlar, 4–5. Perde'ye uzanır.",
    coop: "Augment'ler kalıcıdır ve her birinin bir dezavantajı vardır; Ferrum Sanctum implant hasarını artırır ama elektrik/EMP hasarını da. Astartes, Aeldari, Drukhari, Cassia ve Navigator'lar augment alamaz; bu karakterleri yöneten oyuncu o koltukta sistemden yararlanamaz. Kalıcı olduğu için kurmadan önce parti olarak karar verin. Eogunn, Cassia ve Jae ile destek koltuğu için yarışır." },
  { n: "Processional of the Damned", date: "8 Aralık 2026 (henüz çıkmadı)", tag: "Yakında · 8 Ara", pass: "Season Pass 2",
    comp: "Stella the Miraculist (Ecclesiarchy'nin 'mucize' saydığı kayıtsız psişer)", arch: "Zealot (Basic; ezici silahlarla yakın dövüş)", mech: "Madness (tüm yoldaşları etkiler, savaşta debuff biriktirir), Grenade Launcher'lar, yeni düşmanlar (Arch Enemy ve Aeldari).",
    story: "Ölmekte olan bir yıldızın yörüngesindeki devasa bir gemi mezarlığında mahsur kalırsınız (~15 saat). PC, PS5 ve Xbox için duyuruldu; Switch 2 için kaynaklar çelişiyor.",
    coop: "Madness herkesin yoldaşını etkilediği için tüm oyuncuların partisini ilgilendirecek; hangi yoldaşın en çok etkilendiği ve nasıl iyileştiği çıkış sonrası netleşir. Zealot Basic bir arketip olduğundan, Bladedancer örneğinden hareketle yaratım anında seçilmesi muhtemel (doğrulanmadı). DLC henüz çıkmadığı için co-op ayrıntıları kesin değildir; 8 Aralık'tan sonra kontrol edin." },
  { n: "The Shovel DLC", date: "Nisan 2025", tag: "Ücretsiz", pass: "—",
    comp: "—", arch: "—", mech: "Ücretsiz silah DLC'si (Darktide kürek silahı).", story: "—", coop: "Yok." }
];

const QUIZ = [
  { q: "Co-op'ta diyalog seçeneğini kim seçer?", a: ["Lord Kaptan (host)", "En yüksek Fellowship'li karakter", "Herkes aynı anda", "Oyun rastgele seçer"], c: 0, e: "Diğer oyuncular seçenekleri vurgulayabilir/oylayabilir ama seçimi Lord Kaptan yapar; ayrıca gemi seviyesi ve mekân girişleri de ondadır." },
  { q: "Co-op'ta bir skill check geldiğinde oyun en iyi karakteri otomatik seçer mi?", a: ["Evet, her zaman", "Hayır, kimin deneyeceğini siz seçersiniz", "Sadece Story'de", "Sadece Lord Kaptan'ın karakteri dener"], c: 1, e: "Co-op'ta check'i doğru kişi tetiklemeli; birbirinize 'şu karaktere geç' demeyi alışkanlık yapın." },
  { q: "'Wounds' neyin karşılığı?", a: ["Zırh", "Can (HP)", "Mermi", "Momentum"], c: 1, e: "Wounds = HP. Sıfırlanınca karakter bilincini kaybeder; savaş sonunda canlanır." },
  { q: "Bir check'te ekranda +30, karakterin becerisi 40. Başarı şansı yaklaşık?", a: ["%30", "%40", "%70", "%100"], c: 2, e: "d100 atılır; toplam (40+30=70) altında atarsanız geçersiniz → %70. Ekrandaki sayı ne kadar büyükse o kadar iyi." },
  { q: "Savaş sonunda canı düşük karakterler için ne olur?", a: ["Kalıcı yaralı kalır", "Can tamamen dolar ve bilinci kapalılar kalkar", "Medkit zorunlu", "Yarısı dolar"], c: 1, e: "Savaşı bitireceğinizi biliyorsanız medkit harcamayın." },
  { q: "Momentum çok düşükken hangi ultimate açılır?", a: ["Heroic Act", "Desperate Measure", "Hiçbiri", "Charge"], c: 1, e: "Heroic Act lehinizeyken (bedelsiz), Desperate Measure aleyhinizeyken (bedelli) açılır." },
  { q: "Silah seti değiştirmek AP harcar mı?", a: ["Evet, 2 AP", "Evet, 1 AP", "Hayır, bedava", "Sadece savaş dışında"], c: 2, e: "Tur içinde istediğiniz zaman değiştirebilirsiniz: av tüfeği → yakın set → Charge gibi." },
  { q: "Veil bozulması neyi artırır?", a: ["Zırh", "Psişik olay ve Warp Tehlikeleri ihtimali", "Initiative", "Kâr Faktörü"], c: 1, e: "Her psişik güç gösterge doldurur; her tur 1 azalır. Büyük güç +3, küçük güç +1 (video)." },
  { q: "Çöp loot'u en iyi nereye koymalısınız?", a: ["Yere atın", "Cargo'ya; fraksiyonlara satıp itibar kazanın", "Hepsi sabit satıcıya", "Kimseye satmayın"], c: 1, e: "Cargo konteyner satışı itibar kazandırır. Düşük seviye düşmandan düşen bile işe yarar." },
  { q: "Gemi yeteneğini açtınız ama çalışmıyor. Neden?", a: ["Hull dolu değil", "Yeteneği kullanabilecek bir mürettebatı ilgili post'a atamadınız", "Scrap yok", "Co-op bug'ı"], c: 1, e: "İki adım: yeteneği aç + o yeteneği bilen birini post'a ata." },
  { q: "Run and Gun'dan sonra neden önce normal atış yapmalısınız?", a: ["Run and Gun cooldown'a girer", "Winded −10 BS ceza verir; normal atışı bozmamak için sırayı ayarlayın", "AP biter", "Önemi yok"], c: 1, e: "Önce normal menzilli atış, sonra Run and Gun, sonra bedava atış → ceza yalnızca bedava atışa binsin." },
  { q: "Agility 38 iken +5 yükseltirseniz?", a: ["Bonus 3 kalır", "Bonus 4 olur (başarı kalitesi artar)", "Hiçbir şey değişmez", "Toughness da artar"], c: 1, e: "Onlar basamağı bonus; 43 → bonus 4. Şansa ek olarak initiative/dodge kalitesi de iyileşir." },
  { q: "Warp rotasında yeşil çizgi ne demek?", a: ["Ölümcül", "Güvenli yolculuk", "Hiç yol yok", "Ticaret rotası"], c: 1, e: "Yeşil güvenli, sarı/turuncu riskli, kırmızı tehlikeli. Navigatör ve Insight puanları riski düşürür." },
  { q: "Void Shadows DLC'sini ne zaman almanız önerilir?", a: ["Oyun ortasında", "Yeni oyuna başlamadan önce (Bladedancer yaratımda kilitli)", "Hiç gerekmez", "Sadece Hard'da"], c: 1, e: "Bladedancer yaratım sırasında seçilir; sonradan eklenmez." },
  { q: "Idira'yı sıradan bir psişer gibi kullanmak neden riskli?", a: ["Çok yavaştır", "Her psişik güçte rastgele Perils of the Warp tetikleyebilir", "Hiç hasar vermez", "Yalnızca Bölüm 1'de partide kalır"], c: 1, e: "Idira kayıtsız (unsanctioned) bir psişerdir: sıradan psişerler gibi Veil eşiğini beklemez, her güçte rastgele Perils riski vardır. Çok felaket çıkarırsa partiden çıkarmak makul [Video 3]." },
  { q: "Erken oyunda en güvenli savaş yaklaşımı hangisi?", a: ["İlk turda herkesle yakın dövüş", "Mesafe aç, siper kullan, düşmanı kümelendirip AoE ile vur", "Hiç siper kullanma", "Sadece tek hedefe odaklan"], c: 1, e: "Yarım siper %35, tam siper %60 kaçınma verir; kümelenen düşmanlara AoE ve dar geçitte tank + fırsat saldırıları çok işe yarar [Video 3]." },
  { q: "Düşmanı neyle inceleyebilirsiniz?", a: ["Orta tık", "Sağ tık (zayıflık, zırh, direnç)", "Tab", "J"], c: 1, e: "Sağ tık: düşmanın davranışı, zırhı ve hangi check'lere zayıf olduğu hakkında bilgi verir; savaş sırasında da çalışır." }
];

const CHECKLIST = [
  { g: "Oyundan önce (herkes)", items: [
    "Aynı oyun sürümü ve platform; ücretli DLC setleri uyumlu mu? (Co-op sekmesindeki DLC uyumluluk kontrolü; kozmetikler host'tan paylaşılır)",
    "Dil: Ayarlar → Türkçe arayüz/altyazı (ses İngilizce)",
    "Host DLC'leri: Bladedancer istiyorsanız Void Shadows yaratımdan ÖNCE yüklü olsun",
    "Roller: Lord Kaptan kim? Kargo/envanter, gemi/Warp ve not tutan kim?",
    "Zorluk: Normal ile başlayın (sonra değiştirilebilir)"
  ]},
  { g: "İlk oturum", items: [
    "Host yeni oyunu başlatıp Rogue Trader'ı yaratsın (ilk odada Mercenary Steward var)",
    "Arkadaşlar özel karakter istiyorsa ilk odadaki Mercenary Steward ile yaratsın; sonradan köprüde Janris Danrok (Lord Captain kontrolüyle) ek karakter yaratır",
    "Cooperative modda lobi aç → kayıt seç → kod paylaş → karakterleri oyunculara dağıt",
    "Her oyuncuya 2 karakter (6 kişilik parti) planlayın; ilk saatlerde parti daha küçük olabilir",
    "Tab (loot vurgula), M (harita), Space (turu bitir), X (silah seti) tuşlarını birlikte deneyin"
  ]},
  { g: "Her oturum", items: [
    "Bölge bitirmeden M ile haritada kaçan konteyner var mı bakın",
    "Tüm çöpü Cargo'ya atın",
    "Savaş sonrası level-up okunu kontrol edin (sarı ok)",
    "Manuel kayıt: büyük kararlardan ve savaşlardan önce",
    "Veil göstergesi ve Momentum'u her tur takip edin"
  ]}
];

/* ---------- WALKTHROUGH ----------
   Kaynak: Gamer Guides (bölüm yazıları), Fextralife wiki, BrokenBuilds başarım rehberi, Steam tartışmaları.
   gist/warn: spoiler'sız veya çok hafif. Diğer alanlar <details> içinde saklanır.
   Türkçe bölüm adları öneridir; oyundaki resmi Türkçe adlar farklı olabilir. */
const WALK = [
  {
    id: "w0", tr: "Prolog — Kan Hakkıyla", en: "Prologue — By the Right of Blood",
    gist: "Kısa giriş ve savaş eğitimi. Karakteriniz hazırken hikâyeye ve ilk çatışmalara başlarsınız.",
    warn: ["Final konuşmasında “Rogue Trader olmayı reddetme” seçeneğinde ısrar etmeyin: oyun erken bir epilogla bitebilir."],
    steps: [
      "Kunrad’ı takip edin; Theodora’nın ganimet odasında kontrolden çıkmış bir servitor ile ilk savaş (eğitim) yaşanır.",
      "Theodora ile konuşma ve köprüde isyan; Kunrad’ın asıl niyeti ortaya çıkar. Warrant of Trade odasını açmak için kanınız gerekir.",
      "Abelard yanınıza katılır. Navigator’s Sanctum → yemekhane (Sister Argenta katılır) → Theodora’nın çalışma odası.",
      "Köprüye ulaşın, Chaos Spawn’ı yenin, Master Helmsman ile konuşup Lord Kaptan’ın yerini alın."
    ],
    choices: [
      "İlk büyük karar 15 conviction puanı verir: <b>Dogmatic</b> = ateşin içinden geç (Edelthrad ve “Gizli asansör” hedefi); <b>Heretical</b> = gizli odaya yardım kabul et (Corrupted Inferno Pistol, ama üst güverte ganimetinin bir kısmı kaçar); <b>Iconoclast</b> = köprü mürettebatını tahliye et, platformu Ballistic Skill ile düşür (kurtardığınız mürettebat final boss’ta yardım eder).",
      "Kunrad’a direnir ya da Coercion / Sanctioned Psyker diyalog seçerseniz Chaos blade ile kesilirsiniz: içinize bir daemon bilinci yerleşir. Sadece anlatım katar ve Prolog’da temizlenebilir.",
      "<b>Blade Shard</b>: Chaos Spawn’dan lootlarsanız sizde kalır; atlarsanız Janris Danrok sonradan conviction’a göre seçenekler sunar.",
      "Güverte görevlilerinde Iconoclast seçeneği “Varisle toplantıya yetiş” hedefini başarısız kılar."
    ],
    companions: ["<b>Abelard</b> ve <b>Sister Argenta</b> bu bölümde katılır; <b>Idira</b>’nın yetenekleri (Lightning Arc) ilk savaşlarda işinize yarar."],
    bosses: ["<b>Chaos Spawn</b> (köprü): masa/mobilya ile siper alın; Iconoclast yolunda kurtardığınız mürettebat destek olur."],
    missable: [
      "Başarım <i>Don’t Touch This</i>: Chaos Spawn hiçbir kültisti yemesin.",
      "Nomos (gemi makine ruhu) zinciri burada başlar; Nomos’u asla öldürmeyin / arındırmayın (Possessed Ship, gizli son için de önemli).",
      "Üst güverteyi kilitli kapılar için Tech-Use / Demolition ile tarayın; ek sandıklar çıkar."
    ],
    tips: ["Abelard önde, Idira’nın Lightning Arc’ı zincirleme vurduğu yerde dursun. Idira kayıtsız psişerdir: her güçte rastgele Perils riski vardır, felaket çıkarırsa şaşırmayın.", "Odadan çıkmadan Abelard ile Kunrad’ın yarasını iyileştirin; yoksa göndermez."]
  },
  {
    id: "w1", tr: "Bölüm 1 — Belanın Peşinde (Rykad sistemi)", en: "Chapter 1 — Looking for Trouble",
    gist: "Oyunun uzun öğretici bölümü (~15 saat). Ana hikâye, yoldaş görevleri ve yan görevler birlikte açılır.",
    warn: [
      "<b>Geçit töreni (Parade) ve Epilogue</b> Rykad Minoris’i kapatır: yan görevleri ve alışverişi bunlardan <b>önce</b> bitirin.",
      "Bölüm 2’de tüccarlara erişim kapanır; satış/alışverişi bu bölümde tamamlayın."
    ],
    steps: [
      "Gemide ilk işler: gemiyi onarın, mürettebatı doldurun, yeni bir Navigator bulun (Warp seyahati için).",
      "<b>The Chosen Ones</b> (hapishane gezegeni) — önce bunu önerilir; Pilot Raquel ile konuşun, kışlayı temizleyin, Evayne’i bulun, çukurda ona katılın. Sonunda Raquel’e durumun çözüldüğünü söyleyin.",
      "<b>Secrets of the Navis Nobilite</b> — Cassia’yı mümkün olduğunca erken kurtarın. Laboratuvardaki bulmaca Warp/Toxic düşmanlara karşı iksirler verir.",
      "<b>The Starport</b> (Rykad Minoris) — bir Tech-Priest’i başkente kadar eşlik edin (Pasqal katılır), depo (isteğe bağlı bulmaca + kanalizasyonda Herald of Tzeentch), keskin nişancılar, uçaksavar topu, Ancient Cannon’u yok edin; sığınakta general ve bir tüccar var.",
      "<b>Gleam of the Final Dawn</b> (Elektrodinamik manastır) — kayıp keşişleri bulun; Heinrix girişin sağındaki yan odada. Reaktörde üç noktada sabotaj yapın, sonunda Aurora ile savaşın.",
      "İsteğe bağlı: Rykad Majoris’teki gizemli gemiyi inceleyin.",
      "<b>Taste of Victory → The Escape</b>: tören, saldırı, kaçış. Başlamadan önce tüm yan işleri bitirin."
    ],
    choices: [
      "Starport’ta Fanatical Old Man’ı bağışlamak/öldürmek sırasıyla Iconoclast / Dogmatic puanı verir. Vali Medineth ile Commerce kontrolü isteğe bağlı ek XP ve Profit Factor verir.",
      "Chosen Ones’ta kaçan mahkûmları bağışlamak Iconoclast +1 verir.",
      "Kaçış sırasında kurtarma kararı: Mechanicus eserleri, halk veya soylular. Bir <b>Persuasion kontrolü</b>, <i>Illustrious Glory</i> triumph’ı ya da Dogmatic–Follower yolu ile hem soyluları hem askerleri kurtarabilirsiniz. Bazı mekikler boss savaşında yok olabilir (1–3 mekik kalır).",
      "Bölüm sonunda ayrı bir büyük karar var (halk / reaktör / Exterminatus gibi seçenekler). Gamer Guides bunun için ayrı sayfa ayırmış; kaydedip her yolu görebilirsiniz."
    ],
    companions: [
      "<b>Cassia</b>: Navis Nobilite (erken). <b>Pasqal</b>: Starport. <b>Heinrix</b>: manastırdaki yan oda.",
      "<b>Evayne</b>: Chosen Ones; sonraki bölümde ayrılır. Ana hikâyeyi ondan önce yaparsanız Evayne ölür."
    ],
    bosses: [
      "<b>The Warden</b> (Chosen Ones): önce Unholy Lens’leri yok edin ve hızlı olun; Evayne ölebilir.",
      "<b>Aurora</b> (reaktör): grubu üçe bölün, Electro-Priest’lere öncelik verin; <b>elektrikli silah kullanmayın</b> — elektrikle iyileşirler.",
      "<b>Chaos Space Marine</b> (Epilogue): Heavy Bolter’ın patlama alanı yüzünden üst üste yığılmayın; keskin nişancıyı hızla indirin."
    ],
    missable: [
      "Hapishane gezegeni ana hikâyeden sonra kapanır (Evayne ölür).",
      "Navis Nobilite laboratuvar iksirleri, Arc Rifle bulmacası, depo bulmacası (isteğe bağlı).",
      "Rykad Majoris’teki Drukhari egzotik silahı.",
      "Chaos Blade parçaları (başarım <i>Knee-Deep in Chaos</i>) Prolog + Bölüm 1’de toplanır.",
      "Gizli son zinciri için Bölüm 1–2’de Başkâhya (High Factotum) ile servitor sorununu çözmek ve Bölüm 1 sonu seçimi önemli (başarım rehberine göre)."
    ],
    tips: ["Starport sırasında: yeni başlayanlar için bulmacayı atlamak sorun değil.", "Argenta’nın ikinci silah yuvasına erken alınabilen Flamer, kalabalığa karşı çok iş görür."]
  },
  {
    id: "w2", tr: "Bölüm 2 — Kaybedileni Geri Al (Koronus Expanse)", en: "Chapter 2 — Reclaim What Was Lost",
    gist: "Oyun açılır: uzay savaşı, gemi geliştirme, koloniler, fraksiyonlar. Üç gezegen görevini istediğiniz sırayla yaparsınız.",
    warn: [
      "Bölüm <b>taç giyme (Dargonus)</b> ile biter; sonra Footfall kısmen kapanır ve tüccarlara erişim bir süre kesilir. Her şeyi bundan önce bitirin.",
      "Taç giyme için üç gezegen görevi + <i>Blades in the Void</i> tamamlanmış olmalı."
    ],
    steps: [
      "<b>Tattered Spirit</b>: Furibundus’ta uzay savaşı eğitimi, sonra Footfall. Anver haydutlarıyla uğraşın, Drusian ve Kasballica temsilcileriyle tanışın, Jae’yi bulun; Heinrix gemiye geri döner.",
      "<b>Reclaim What Was Lost</b> (zorunlu): Navigator ile Warp rotaları açın; üç gezegen, sırası serbest:",
      "• <b>Janus (World Shapers, Telikos Epsilon)</b>: isyanı inceleyin, valinin kaderine karar verin, Aeldari mi kültistler mi? Sonra Footfall’a yardım gönderip göndermemek.",
      "• <b>Kiava Gamma (Flame in the Dark, Cranach)</b>: Heinrix’i getirin (yoldaş görevi burada). Forge world’den geçip bozulmuş Fabricator-Censor Cubis Delphim’e ulaşın.",
      "• <b>Dargonus (Spiders in a Jar, Mundus Valancius)</b>: çoğunlukla siyasi; asıl işi taç giymeyi açmak.",
      "<b>Blades in the Void, Bölüm 1</b>: Vheabos VI’da Drukhari’yi temizleyin; Warp seyahati sonrası bir baskın başlar → <b>Attack in the Silence of Mer-Segrit</b> → <b>Blades in the Void, Bölüm 2</b>: Palatium Stellos, Cinerus Maleficum bulutsusunda Drukhari lideri Marazhai, bindirme savaşı, Dargonus’a dönüş.",
      "<b>Coronation</b>: Dargonus’a saldırı, saray çevresinde Drukhari savaşı; bölüm biter."
    ],
    choices: [
      "Janus valisine pişmanlık yolu mu konfrontasyon mu; isyancılarla mı Aeldari ile mi.",
      "Atrium’daki mutant mültecileri kurtarmak/bırakmak.",
      "Drukhari gladyatörlerini Tazarra’ya karşı ikna etmek savaşı kolaylaştırır.",
      "Footfall’a erzak göndermek ileride <i>Hunger’s Hand</i> sonucuna bağlanır.",
      "Dargonus çökme tepkisi: yalnızca küçük etkiler."
    ],
    companions: [
      "<b>Jae</b>: Persona Non Grata (Liege’in sarayı) — görevi başlatmazsanız yoldaş görevi de açılmaz.",
      "<b>Yrliet</b>: Janus’ta isteğe bağlı; almazsanız isyancıları bulmak için bir kitap olayında kontroller geçmeniz gerekir.",
      "<b>Argenta</b>: Astray, Hieronymus Doloroso ile konuşunca ilerler. <b>Idira</b>: Echo of the Past, Telikos Epsilon yolunda tetiklenmesi muhtemel."
    ],
    bosses: ["Janus’ta Muaran; Drukhari lideri Marazhai (Cinerus Maleficum); bindirme ve saray savaşları."],
    missable: [
      "Kiava Gamma’da bir konteynerde Melta Ultima ve Staff of Blood.",
      "Palatium Stellos: Sybarite’ten Elite Blast Pistol; mekik yakınındaki cesette Armor of the Undaunted ve benzersiz Bolt Pistol.",
      "Heinrix’in Kiava Gamma odası: gezegenden ayrılmadan çözün.",
      "Foulstone koloni projesi “For Saint Drusus!” (Trinnitos) ödülü Infernical flamer.",
      "Castel (Void Shadows ile ilgili görünüyor): <i>Burning Inheritance</i> ile <i>This Is a Job for the Lord Captain</i> birbirini dışlar — birini seçin.",
      "Kiava Gamma ve Dargonus’taki gizli önbellekler (Nomos başarımı)."
    ],
    tips: ["Navigator’ın açtığı Warp rotalarının rengi tehlike seviyesini gösterir; oyunun tooltip’ini okuyun.", "Gemi savaşı ve koloni için “Gemi & Uzay” sekmesine bakın."]
  },
  {
    id: "w3", tr: "Bölüm 3 — Rahatsız Edici Gelişmeler", en: "Chapter 3 — Troubling Developments",
    gist: "Doğrusal, hikâye ağırlıklı bölüm. Sık kayıt alın; bölüm boyunca birçok seçim geri alınamaz.",
    warn: [
      "Bu bölümde <b>kaçırılabilir yoldaş teklifleri</b> ve geri dönüşsüz noktalar var; ayrıntı için aşağıdaki spoiler’ı açın.",
      "Bu bölümde tüccarlara erişim yoktur (Bölüm 4’te geri gelir); eşyalarınızı önceden düzenleyin."
    ],
    steps: [
      "<b>One Foot in the Grave</b>: Corpse Pile’dan gardiyanlı Xeno sokağından geçip Çukur’a (Pit) varın, Malice ile konuşun → <i>The Chasm</i> ve <i>Reunion</i> açılır.",
      "<b>The Chasm</b>: Malice Komiser’in başını ister (ya Komiser’i öldürün ya Malice’e karşı çıkın); her iki yol da arenaya götürür.",
      "<b>Arena 1</b>: Chimera’lar ve dönüştürülmüş insan esirler; sonra Anatomical Opera’da Tervantias.",
      "<b>Marazhai ve Tervantias</b>: Opera’da iyileşin, Marazhai ile konuşun.",
      "<b>Arena 2</b>: rastgele çatışmalar (Marazhai katılabilir), sonra Opera’da uçan yaratıkla diyalog.",
      "<b>Arena 3</b>: mini boss’lar, sonunda Keykaross ve robotu. Sık kaydedin.",
      "<b>Puppeteer</b>: Kule’de iki kız kardeşle savaş; Stranger sizi kurtarılacak bir Farseer’e yönlendirir.",
      "<b>Reaving Tempest Spire</b>: Farseer’i kurtarın, ganimeti alın, Tervantias’ın hikâyesini bitirin. Son boss: Yremeryss; Commorragh’tan kaçış."
    ],
    choices: [
      "Komiser mi Malice mi: Komiser’i yenmek takviyesiz daha zor; Malice ile savaşta takviye için 3 tur dayanmalısınız.",
      "Komiser Şapkası: Çukur’da gardiyanları Komiser’e karşı çevirerek alınır.",
      "Tervantias yalnızca <b>bir</b> yoldaş verir — seçiminizi bilerek yapın.",
      "Yrliet: öldür, bağışla ya da zihin solucanını çıkarmak için kullan. Abelard, Pasqal veya Argenta’yı bölüme getirmediyseniz onu bağışlamak başlangıçta tek başına savaşmanızı önler.",
      "Heretical yol: Chaos’u şehre almak ek görev içeriği açar."
    ],
    companions: [
      "<b>Yrliet</b>: Çukur sonrası Chasm kavşağı. <b>Abelard</b>: Mangled Sector’da Athletics boşluğu (Coercion/Persuasion kontrolü veya Stimm).",
      "<b>Argenta</b>: Mangled Sector’da Komiser yakını. <b>Idira</b>: Opera laboratuvarı (ikna edin veya cihazını çıkarın).",
      "<b>Heinrix ve Cassia</b>: 2. arenadan sonrasına kadar bir kutuda kilitli. <b>Jae</b>: 1. arenadan sonra Opera önü.",
      "<b>Pasqal</b>: 1. arenadan sonra Mangled asansörü yanındaki dilenciler. <b>Ulfar</b>: Opera’da kafeste; 1. arenadan bir eşyayla serbest bırakılır.",
      "<b>Marazhai</b>: Opera ziyaretinde ve 2. arenada teklif edin."
    ],
    bosses: ["Komiser (isteğe bağlı/Chasm), Malice, Arena 1 Chimera’ları, iki kız kardeş (Puppeteer), Keykaross ve robotu, Pain Engine’ler, Yremeryss (son, güçlü takviyeli)."],
    missable: [
      "<b>Marazhai’nin katılım teklifi</b> ilk Opera ziyaretinde söylenmezse kaybolur.",
      "<b>Heretical görev</b> Opera bölgesinden çıkmadan başlamalı; dönüş şansı az.",
      "Tech Use / Athletics / Demolition gerektiren ganimet 3. arenadan önce alınmalı.",
      "İsteğe bağlı Mangled boss’u Opera’dan ayrılmadan yenilmeli; Heretical terminali Opera dışında; Marazhai’nin Kule’deki kargo etkileşimi.",
      "Başarım <i>Whodunit?</i>: Dark City’deki kilit anlarda Argenta partide olsun."
    ],
    tips: ["Abelard, Pasqal veya Argenta’yı bölüme getirmediyseniz Yrliet’i bağışlamak iyi olur; yoksa başlangıçta yalnız dövüşürsünüz.", "Bölüm başında kişisel odalardan çıkış noktası görünmezse kaydedip yeniden yükleyin (bilinen bug)."]
  },
  {
    id: "w4", tr: "Bölüm 4 — Lord Engizitör ve Lord Kaptan", en: "Chapter 4 — The Lord Inquisitor and the Lord Captain",
    gist: "Hesaplaşma bölümü: önceki seçimlerin sonuçları ortaya çıkar. Conviction hattınız burada çok belirleyici olur.",
    warn: [
      "Bu bölümde conviction’ınızı sıfırlayabilen <b>tek seferlik</b> bir seçenek ve yoldaşların <b>kalıcı olarak</b> ayrılabileceği bir eşik var — spoiler’ı okuyup karar verin.",
      "Zor bir savaşta takılırsanız zorluğu geçici düşürebilirsiniz; yan boss’lar ödülü az olduğu için isteğe bağlı."
    ],
    steps: [
      "Janus’a dönüş: Vigdis’in raporu <i>The Lord Inquisitor and the Lord Captain</i> ve <i>Hunting Grounds</i> görevlerini açar; Abelard (Blood Ties), Idira (The Door), Jae (Rat Hunting) yoldaş görevleri başlar; Marazhai’nin Soulless görevi başlayabilir.",
      "<b>Lord Inquisitor… Bölüm 1</b>: Footfall; Vladaym Tocara’yı tutuklamanız istenir.",
      "<b>Hunting Grounds Bölüm 1</b>: Quetza Temer (tekrar eden haritalar), Calligos Winterscale avı; Yrliet’in Outcast’s Duty görevi başlar.",
      "<b>The Great Judgment</b>: bar yüzleşmesi, Incendia savaşı. <b>Lair of the Haemonculus</b>: Tervantias boss’u.",
      "<b>Hunting Grounds Bölüm 2</b>: köyde Calligos’u kurtarın ya da savaşın.",
      "<b>Lord Inquisitor… Bölüm 2</b>: Footfall’a dönüş; Engizitör’ün talepleri conviction ve yoldaşları etkiler.",
      "<b>The Siege</b>: Emperor’s Palm’da savaş konseyi, yörünge savaşı, Eufrates II’ye kara saldırısı. Ulfar ve Argenta yoldaş görevleri burada başlar.",
      "<b>Machine Cathedral</b>: Uralon, Incongruous Defiler boss’u, Prayer Halls. Finalde Doomscream savaşı ve “Questions and Answers”."
    ],
    choices: [
      "Janus dönüşü sonrası Yrliet’e tavır: genelde özür dilettirip konuyu kapatmak iyi sonuç verir.",
      "Great Judgment’ta Vladaym ya da Incendia’nın tarafı: Vladaym’a yardım tutuklama hedefini bozar ve Incendia savaşına yol açar.",
      "Calligos’u kurtarmak için belirli kontroller ve diyalog gerekir; köyde seçim bir kez yapılır.",
      "<b>Calcazar’a pişmanlık</b>: conviction’ı nötre sıfırlar ve conviction rank’larınızı siler; tek seferlik.",
      "Savaş konseyi planı (Opticon-22 mi Thorbald mı): rehber hangisinin kesin doğru olduğunu söylemiyor."
    ],
    companions: [
      "<b>Uralon</b> gizli yoldaştır: Heretical yol ve <i>The Call of the Edge</i> ilerlemesi gerekir.",
      "Idira’nın Tervantias laboratuvarındaki kapısı için Idira partide olmalı."
    ],
    bosses: [
      "<b>Incendia</b> (iyi konumlanma ile kolay). <b>Tervantias</b>: bio-founts ve Cronos engine’i önce yok edin; kanamalı düşmanlardan iyileşir.",
      "<b>Calligos ve maiyeti</b> (isteğe bağlı): çok zor, ödül az.",
      "<b>Incongruous Defiler</b>: önce plazma bataryalarını yok edin, Havoc Barrage’dan kaçınmak için hareket edin, arkadan vurun."
    ],
    missable: [
      "<b>Kalıcı ayrılış:</b> Heretical iken pişmanlığı reddederseniz Yrliet, Ulfar ve Argenta The Siege başında kalıcı olarak ayrılır.",
      "Lair’deki Toxic Flamer odası için Awareness kontrolü.",
      "Machine Cathedral’deki gizli odada Untainted Sacrament chainsword.",
      "Khepri’s Cradle’daki kayalık gezegende altın xeno idol (başarım <i>Frog Trader</i>).",
      "Başarım <i>Knee-Deep in Chaos</i>: Engizitör’e karşı Chaos’u seçin, sonra Eufrates II sonunda da Chaos seçeneğini seçin; tek sapma zinciri bozar.",
      "Marazhai’nin Soulless görevi önceki bölümlerin seçimlerine bağlı."
    ],
    tips: ["Machine Cathedral / reaktör finali oyuncularca zor bulunuyor (Uralon): Abelard’ı tank yapın, yüksek DPS’i önemli hedeflere verin; gerekirse kaydı bölüm öncesine alıp partiyi yeniden kurun.", "Bu bölümün yan boss’ları için kaynakta zorluğu düşürme önerisi var; ilk geçişte zorlamayın."]
  },
  {
    id: "w5", tr: "Bölüm 5 — Karanlığa Cesurca İlk Adım", en: "Chapter 5 — To Walk Bravely First Into Darkness",
    gist: "Final bölümü. Nekron mekaniklerine hazırlanın: ölü robotlar yeniden canlanır, kendini onarır.",
    warn: [
      "Resmî bir geri dönüşsüz nokta işaretlenmemiş; ama <b>filo savaşı</b> ve <b>Nomos seçimi</b> final öncesi son kapılar. Önce isteğe bağlı gezegenleri gezip kaydedin.",
      "Parti: Vanguard (taunt), siper/dodge araçları, Deathmark’ları vuracak uzun menzil."
    ],
    steps: [
      "Debris of Battiada’da başlayın; yakın yıldız sistemlerini gezerek Sanctum of Tepheetus’a ve Calcazhar’ın izine gidin.",
      "İsteğe bağlı: ilk sistemde Buz Dünyası gibi yan savaşlar Nekron pratiği içindir.",
      "İsteğe bağlı ganimet: <b>Neos Charoitus</b> (Gaze of the Void, Cloaking Field Emitter) ve <b>Sanctum’un Tomb World’ü</b> (Inevitable Demise eldivenleri, Gloomrifle, They Shall Weep, Heavy Void Suit — en değerlisi).",
      "<b>Filo savaşı</b>: bir Nekron Lord filosu yolu keser. Ana gemilere hızlı yük bindirin; Lord en çok yarası kalan gemiyi güçlendirir.",
      "<b>Nomos seçimi</b>: Epitaph’a inmeden önce Nomos’un hangi bedeni kullanacağı seçilir (çoğunlukla diyalog/görünüm).",
      "Boss sırası: Elegy of Sorrow → Cryptogeometric Sentinel → The Copies → Calcazhar savaşı → C’tan Shard."
    ],
    choices: [
      "C’tan Shard yenilince kaderine karar verirsiniz: Nomos kullansın, Calcazhar planını bitirsin ya da C’tan’ı yok edin. Bunlar Heretical / Dogmatic / Iconoclast çizgileriyle eşleşir; önceki seçimler sonları şekillendirir.",
      "Gizli son (<i>How Did It All End?</i>) için Nomos’un sonuna kadar yaşaması gerekir."
    ],
    companions: [],
    bosses: [
      "<b>Elegy of Sorrow</b>: güçlü Burst Fire; Elusive Shadow’lu Assassin ateşi çekebilir.",
      "<b>Cryptogeometric Sentinel</b>: balkonu alın, kanatlardaki Deathmark’ları temizleyin; 4’ten fazla Nekron yaşarken hasarı artar.",
      "<b>The Copies</b>: partinizin üç kopyası; en tehlikelisi Burst Fire kopyalar, Vanguard diğerlerini taunt’lasın.",
      "<b>Calcazhar</b>: Inquisitor Veteran ve Diviner’ı erken indirin; Biomancer ve Calcazhar’a crowd control.",
      "<b>C’tan Shard</b>: önce Structuring Shard klonunu öldürün (büyük Temp HP); Energy Bomb öncelikli; %20 civarında Imprison evresine dikkat."
    ],
    missable: ["Nomos’u öldürmek/arındırmak gizli sonu kapatır.", "İsteğe bağlı ganimetleri (Neos Charoitus, Tomb World) ana yola girmeden alın."],
    tips: ["Nekron mekanikleri: Living Metal iyileşmesi, Reanimation Protocols, Scarab Swarm onarımı.", "Boss öncesi manuel kayıt; sonra farklı son için kayıt dallandırın."]
  }
];

const WALK_GENERAL = [
  "Her bölümün <b>sonunda</b> ve büyük seçimlerden önce <b>manuel kayıt</b> alın; ayrı slotlarda tutun.",
  "Bölümü bitirecek “tören/final” görevine girmeden önce yan görev, yoldaş ve tüccarları tamamlayın; tören sonrası bazı yerler kapanır.",
  "Triumph’ı (zafer töreni) yan işleri bitirmeden başlatmayın; Steam topluluğunda içerik kaçırdığı bildirilmiş.",
  "Üç kişilik co-op’ta büyük kararı Lord Kaptan seçer; ama önemli diyaloglarda üçünüz de ekranı okuyup oy kullanın.",
  "Bazı seçimler yoldaşların kalıcı ayrılmasına yol açabilir; büyük kararlardan önce spoiler’lı bölüm notlarını okuyun."
];

// "İlk 2 saat" adımları. Kayıt anahtarı: rtcc:first2h (eski checklist anahtarından ayrı, onu bozmaz).
const FIRST2H = [
  { t: "Oyun öncesi: DLC ve sürüm", l: "coop", h: "#dlc-check", items: [
    "Üç kişi de aynı sürümde (PC güncel: 1.6.1.514); sürüm co-op menüsünün sağ altında yazar",
    "DLC uyumluluk kontrolü yapıldı; en az DLC'li kişi host",
    "Türkçe arayüz/altyazı seçildi (ses İngilizce)" ]},
  { t: "Karakter yaratma", l: "create", h: "#arch-guide", items: [
    "Homeworld ve origin seçildi (sonradan değişmez)",
    "Basic arketip ve hedef Advanced yol belirlendi",
    "3 kişilik dağılımda aynı Advanced yolda iki kişi çakışmıyor" ]},
  { t: "Co-op kurulum", l: "coop", h: "#coop-setup", items: [
    "Host Rogue Trader'ı yarattı, lobi açıldı, Server ID paylaşıldı",
    "Arkadaşlar ilk odadaki Mercenary Steward ile karakterlerini yarattı (ya da hikâye yoldaşlarını aldı)",
    "Karakterler oyunculara dağıtıldı (ikişer)" ]},
  { t: "İlk savaş", l: "combat", h: "#combat-tips", items: [
    "AP/MP ayrımı anlaşıldı; her turda AP bitirildi",
    "Cover kullanıldı, ilk turda yakın dövüşe atılmadı",
    "AoE ve seri atışta dost ateşi kontrol edildi" ]},
  { t: "İlk level-up", l: "create", h: "#hw-table", items: [
    "Savaş sonrası sarı ok görüldü; puanlar dağıtıldı",
    "Skill'ler 1–2 uzmanlığa odaklandı (Awareness iyi bir dolgu)" ]},
  { t: "Loot ve Cargo alışkanlığı", l: "loot", h: "#loot", items: [
    "Bölgeden çıkmadan M ile haritada kaçan sandık var mı bakıldı",
    "Eşyalar çöpe atılmadı: Cargo'ya gönderildi" ]}
];
