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
  ["Dünya", "Psyker", "Psişer (psişik güç kullanıcı)", "Warp'tan güç çeken kişi. Sanctioned (kayıtlı) ve Unsanctioned (kayıtsız) olarak ayrılır; kayıtsızlar daha risklidir."],
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
  { en: "Imperial World", tr: "İmparatorluk Dünyası", role: "Her sınıfa uyar", text: "Seçtiğiniz bir karakteristiğe +10 ve parti üyelerine +5; canınız %40'ın altına düşünce büyük buff; iblis/Warp varlıklarına karşı parti hasarı. Esnek, güvenli seçim." },
  { en: "Fortress World", tr: "Kale (Fortress) Dünyası", role: "Silahlı asker", text: "Her öldürmede birikimli %10 ihtimalle bedava saldırı; ilk reload bedava; ateş etmek Dodge'u artırır." }
];

const ORIGINS = [
  { en: "Astra Militarum Commander", tr: "Astra Militarum Komutanı", text: "Grup buff'ı, menzilli silah odaklı (BS) ve algı bonusu. ⚠ Yama 1.5'te baştan tasarlandı." },
  { en: "Commissar", tr: "Komiser (Commissar)", text: "Müttefike kill sonrası ekstra tur verme fikri, yakın dövüş (WS) ve ilişki bonusu. ⚠ Yama 1.5'te yeniden yapıldı." },
  { en: "Crime Lord", tr: "Suç Lordu", text: "Sağlam bir arka plan hikâyesi; hasar/dodge/debuff odaklı 'Surefire Plan', WS ve Perception bonusu." },
  { en: "Ministorum Priest", tr: "Ministorum Rahibi", text: "Momentum üretimi, dayanıklılık ve irade bonusu. ⚠ Yama 1.5'te yeniden yapıldı." },
  { en: "Navy Officer", tr: "Donanma Subayı", text: "'Brace for Impact' ile hasar azaltma, Agility ve Fellowship bonusu; tank/mitigasyon düşünenlere. ⚠ Yama 1.5'te yeniden yapıldı." },
  { en: "Noble", tr: "Soylu", text: "Bir parti üyesini 'hizmetkâr' atayıp güçlendirirsiniz; Intelligence (lore) bonusu ve diyalog seçenekleri." },
  { en: "Sanctioned Psyker", tr: "Kayıtlı Psişer", text: "Kendi başına neredeyse bir sınıf: alt dal seçilir — Biomancer (iyileştirme/buff), Diviner (şans buff'ı), Pyromancer (ateş), Sanctic (buff/debuff), Telepath (saf psişik hasar). Veil'e dikkat." },
  { en: "Arbites (Lex Imperialis DLC)", tr: "Arbites (Lex Imperialis DLC)", text: "DLC kökeni; yaratım sırasında seçilir (BrokenBuilds'e göre üç uzmanlık içerir)." }
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
  { tier: 2, en: "Overseer (Lex Imperialis DLC)", tr: "Gözetmen (DLC)", rate: "?", role: "Kalkan + pompalı", from: "DLC", note: "Kalkan ve pompalı tüfek temalı. Sıralaması kaynaklarda yok." },
  { tier: 3, en: "Exemplar", tr: "Örnek Alan / Exemplar", rate: "—", role: "Tier 3", from: "36. seviyede", note: "Önceki seçimlerinizi derinleştirir. Oyun sonuna doğru; şimdilik takılmayın." }
];

const COMPANIONS = [
  // name, arch, role tags, tier, join (spoiler), romance, note
  { n: "Abelard Werserian", arch: "Warrior", tags: ["tank","melee"], tier: "B", join: "Prolog (otomatik)", rom: "Yok", note: "Güvenilir ön saf. 'Asla yüz üstü bırakmaz ama tek başına savaş kazandırmaz.'" },
  { n: "Idira Tlass", arch: "Operative (psişer)", tags: ["caster","support"], tier: "A", join: "Prolog (otomatik)", rom: "Yok", note: "Başta zayıf, geç oyunda çok güçlü. Her güçte Perils of the Warp riski." },
  { n: "Sister Argenta", arch: "Soldier", tags: ["ranged","aoe"], tier: "S", join: "Prolog (otomatik)", rom: "Yok", note: "Menzilli carry; ağır bolter en yüksek hasar kaynaklarından." },
  { n: "Cassia Orsellio", arch: "Officer", tags: ["support","navigator","aoe"], tier: "S", join: "Bölüm 1", rom: "Yalnızca erkek Rogue Trader", note: "Navigatör; AoE ve parti buff'ları. Tartışmasız ilk tercih." },
  { n: "Pasqal Haneumann", arch: "Operative", tags: ["ranged","tech","support"], tier: "B", join: "Bölüm 1", rom: "Yok", note: "Yardımcı/teknik. Kişisel hasarı orta; Tech-Use'u partiye katar." },
  { n: "Heinrix van Calox", arch: "Warrior", tags: ["melee","caster"], tier: "S", join: "Bölüm 1", rom: "Yalnızca kadın Rogue Trader", note: "Yakın dövüş + psişer melezi; esnek üçüncü koltuk. Bölüm 2 başında bir süre ayrılır." },
  { n: "Jae Heydari", arch: "Officer", tags: ["support"], tier: "A", join: "Bölüm 2", rom: "Herkes", note: "Cold Trader bonuslarıyla çok güçlü; buff veya kişisel hasar." },
  { n: "Yrliet Lanaevyss", arch: "Operative", tags: ["ranged"], tier: "B", join: "Bölüm 2", rom: "Herkes", note: "Keskin nişancı. Kaynaklar arasında fikir ayrılığı var (kimi A/kimi B). Erken fiziksel yaklaşım romantik hattı bozar." },
  { n: "Ulfar", arch: "Soldier", tags: ["tank","melee"], tier: "C", join: "Bölüm 3", rom: "Yok", note: "Güçlü ama ön saf sorunu çözüldükten sonra geliyor." },
  { n: "Marazhai Aezyrraesh", arch: "Warrior", tags: ["melee"], tier: "B", join: "Bölüm 3", rom: "Herkes", note: "Yakın dövüş suikastçısı; katılımı diyalog tabanlı, kaçırılabilir." },
  { n: "Kibellah (Void Shadows)", arch: "Assassin", tags: ["melee"], tier: "A", join: "DLC görev hattı", rom: "Herkes", note: "En iyi yakın dövüş yoldaşı olarak anılıyor." },
  { n: "Solomorne Anthar (Lex Imperialis)", arch: "Overseer", tags: ["support"], tier: "C", join: "Bölüm 2 (≈24. seviye)", rom: "Herkes", note: "Hikâye değeri savaş değerinden yüksek." },
  { n: "Eogunn Februs (Infinite Museion)", arch: "Officer", tags: ["support"], tier: "—", join: "Bölüm 2–4", rom: "—", note: "Cassia/Jae ile destek koltuğu için yarışır." }
];

const DIFFICULTY = [
  { n: "Story", tr: "Hikâye", text: "Sadece hikâye ve seçimler. Düşman statları −%30, can −%60, hasar −%60 (Fextralife). Skill check'lerde de bonus verir." },
  { n: "Normal", tr: "Normal", text: "Referans deneyim; CRPG'ye yeni olanlar için iyi taban. Önerimiz: ilk geçiş için bu." },
  { n: "Daring", tr: "Cesur", text: "Normal'den biraz zor. Taze yaralanma 3 tur sonra eskiye döner (zorluk tablosuna göre)." },
  { n: "Hard", tr: "Zor", text: "Düşman statları ve hasar artar; Wiki 'sistemi bilmeyenlere önerilmez' diyor." },
  { n: "Unfair", tr: "Adaletsiz", text: "Optimizasyon zorunlu hale gelir; uzman Rogue Trader'lara." }
];

const DLCS = [
  { n: "Void Shadows", year: "2024", text: "Bladedancer (Tier 1) + Executioner (Tier 2) arketipleri, yoldaş Kibellah ve gemide bir Genestealer Cult hikâye hattı. Birçok kaynak ilk alınacak DLC diyor; Bladedancer yaratımda kilitlendiği için oyuna başlamadan alın.", tag: "İlk alın" },
  { n: "Lex Imperialis", year: "Haziran 2025", text: "Arbites kökeni, Overseer arketipi, yoldaş Solomorne Anthar, savaş 'familiar'ları (cyber-eagle, mastif). PC Gamer: yalnızca evcil hayvan/familiar istiyorsanız şart değil.", tag: "İkinci" },
  { n: "The Infinite Museion", year: "11 Haziran 2026", text: "Sector Bionica augment sistemi (100'den fazla augment), Ferrum Sanctum statı, yoldaş Eogunn Februs. Augment'ler mevcut karaktere uygulandığı için ikinci geçiş satın alımı olabilir.", tag: "Üçüncü" },
  { n: "Processional of the Damned", year: "Duyuruldu", text: "Boşluk gemisi mezarlığı bölgesi, yeni yoldaş, yeni düşmanlar. BrokenBuilds'e göre henüz çıkmamıştı (Temmuz–Eylül 2026 penceresi); güncel durumu mağazadan doğrulayın.", tag: "Doğrula" },
  { n: "The Shovel DLC", year: "Nisan 2025", text: "Ücretsiz silah DLC'si (Darktide kürek silahı).", tag: "Ücretsiz" }
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
  { q: "Düşmanı neyle inceleyebilirsiniz?", a: ["Orta tık", "Sağ tık (zayıflık, zırh, direnç)", "Tab", "J"], c: 1, e: "Sağ tık: düşmanın davranışı, zırhı ve hangi check'lere zayıf olduğu hakkında bilgi verir; savaş sırasında da çalışır." }
];

const CHECKLIST = [
  { g: "Oyundan önce (herkes)", items: [
    "Aynı oyun sürümü ve platform (host'un DLC'leri oturumda paylaşılır; yine de ilk gün test edin)",
    "Dil: Ayarlar → Türkçe arayüz/altyazı (ses İngilizce)",
    "Host DLC'leri: Bladedancer istiyorsanız Void Shadows yaratımdan ÖNCE yüklü olsun",
    "Roller: Lord Kaptan kim? Kargo/envanter, gemi/Warp ve not tutan kim?",
    "Zorluk: Normal ile başlayın (sonra değiştirilebilir)"
  ]},
  { g: "İlk oturum", items: [
    "Host tek oyunculu başlayıp Rogue Trader'ı yaratsın ve tutorial'ı geçsin",
    "Arkadaşlar için özel karakter(ler) gerekiyorsa gemideki 'maiyet' seçeneğiyle oluşturun, sonra kaydedip lobiye geçin",
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
