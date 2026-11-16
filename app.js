/* Rogue Trader Crash Course — etkileşim */
(function () {
  "use strict";

  // ---------- yardımcılar ----------
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const store = {
    get(k, d) { try { const v = localStorage.getItem("rtcc:" + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("rtcc:" + k, JSON.stringify(v)); } catch (e) { /* özel mod vb. */ } }
  };

  // ---------- sekmeler ----------
  const panels = $$("main .panel");
  const tabsEl = $("#tabs");
  panels.forEach((p) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "tab";
    b.dataset.target = p.id;
    b.innerHTML = p.dataset.title;
    b.addEventListener("click", () => { clearSearch(); showPanel(p.id, true); });
    tabsEl.appendChild(b);
  });

  function showPanel(id, scroll) {
    if (/^w\d$/.test(id)) { const t = document.getElementById(id); id = "walk"; if (t) setTimeout(() => t.scrollIntoView({ behavior: "instant", block: "start" }), 50); }
    if (!panels.some((p) => p.id === id)) id = panels[0].id;
    panels.forEach((p) => p.classList.toggle("active", p.id === id));
    $$(".tab", tabsEl).forEach((b) => {
      const on = b.dataset.target === id;
      b.classList.toggle("on", on);
      b.setAttribute("aria-current", on ? "page" : "false");
    });
    store.set("tab", id);
    if (history.replaceState) history.replaceState(null, "", "#" + id);
    if (scroll) window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---------- arama ----------
  const q = $("#q");
  const qcount = $("#qcount");
  function norm(s) { return s.toLocaleLowerCase("tr").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ı/g, "i"); }
  function runSearch() {
    const term = norm(q.value.trim());
    const searching = term.length > 0;
    document.body.classList.toggle("searching", searching);
    let total = 0;
    panels.forEach((p) => {
      if (!searching) {
        $$(".card, #glTable tbody tr", p).forEach((el) => el.classList.remove("hide"));
        p.classList.toggle("active", $(".tab.on", tabsEl).dataset.target === p.id);
        return;
      }
      let vis = 0;
      $$(".card, #glTable tbody tr", p).forEach((el) => {
        const text = norm((el.dataset.s || "") + " " + el.textContent);
        const ok = text.indexOf(term) !== -1;
        el.classList.toggle("hide", !ok);
        if (ok) vis++;
      });
      p.classList.toggle("active", vis > 0);
      total += vis;
    });
    qcount.textContent = searching ? total + " sonuç" : "";
  }
  function clearSearch() { if (q.value) { q.value = ""; runSearch(); } }
  q.addEventListener("input", runSearch);
  q.addEventListener("keydown", (e) => { if (e.key === "Escape") clearSearch(); });

  // ---------- kontrol listesi ----------
  (function checklist() {
    const box = $("#checklist");
    const saved = store.get("checklist", {});
    CHECKLIST.forEach((g, gi) => {
      const wrap = document.createElement("div");
      wrap.className = "cl-group";
      wrap.innerHTML = "<h4>" + esc(g.g) + "</h4>";
      g.items.forEach((it, ii) => {
        const id = "cl-" + gi + "-" + ii;
        const lab = document.createElement("label");
        lab.className = "cl-item";
        lab.innerHTML = '<input type="checkbox" id="' + id + '"><span>' + esc(it) + "</span>";
        const cb = $("input", lab);
        cb.checked = !!saved[id];
        lab.classList.toggle("done", cb.checked);
        cb.addEventListener("change", () => {
          const s = store.get("checklist", {});
          s[id] = cb.checked;
          store.set("checklist", s);
          lab.classList.toggle("done", cb.checked);
        });
        wrap.appendChild(lab);
      });
      box.appendChild(wrap);
    });
    $("#resetChecklist").addEventListener("click", () => {
      store.set("checklist", {});
      $$("#checklist input").forEach((c) => { c.checked = false; c.closest("label").classList.remove("done"); });
    });
  })();

  // ---------- kart listeleri ----------
  function card(html, s) { return '<article class="card" data-s="' + esc(s || "") + '">' + html + "</article>"; }

  $("#homeworlds").innerHTML = HOMEWORLDS.map((h) =>
    card("<h4>" + esc(h.tr) + ' <span class="en">' + esc(h.en) + '</span></h4><p class="tag">' + esc(h.role) + "</p><p>" + esc(h.text) + "</p>", "homeworld anavatan " + h.en)
  ).join("");

  $("#origins").innerHTML = ORIGINS.map((o) =>
    card("<h4>" + esc(o.tr) + ' <span class="en">' + esc(o.en) + "</span></h4><p>" + esc(o.text) + "</p>", "origin köken " + o.en)
  ).join("");

  function renderArch(filter) {
    $("#archetypes").innerHTML = ARCHETYPES.filter((a) => filter === "all" || String(a.tier) === filter).map((a) =>
      card(
        '<div class="rowhead"><h4>' + esc(a.tr) + ' <span class="en">' + esc(a.en) + '</span></h4><span class="badge r' + esc(a.rate.replace(/[^A-Z?]/g, "x")) + '">' + esc(a.rate) + "</span></div>" +
        '<p class="tag">Tier ' + a.tier + " · " + esc(a.role) + "</p>" +
        "<p>" + esc(a.note) + "</p>" +
        (a.from !== "—" ? '<p class="muted">Kapı: ' + esc(a.from) + "</p>" : ""),
        "arketip archetype " + a.en
      )
    ).join("");
  }
  renderArch("all");
  $("#archFilters").addEventListener("click", (e) => {
    const b = e.target.closest(".chip"); if (!b) return;
    $$("#archFilters .chip").forEach((c) => c.classList.toggle("on", c === b));
    renderArch(b.dataset.f);
  });

  function renderComp(filter) {
    $("#companions").innerHTML = COMPANIONS.filter((c) => filter === "all" || c.tags.indexOf(filter) !== -1).map((c) =>
      card(
        '<div class="rowhead"><h4>' + esc(c.n) + '</h4><span class="badge r' + esc(c.tier.replace(/[^A-Z]/g, "x")) + '">' + esc(c.tier) + "</span></div>" +
        '<p class="tag">' + esc(c.arch) + " · " + esc(c.tags.join(", ")) + "</p>" +
        "<p>" + esc(c.note) + "</p>" +
        '<details class="spoiler"><summary>Katılım & romantik hat (hafif spoiler)</summary><p>Katılım: ' + esc(c.join) + "<br>Romantik hat: " + esc(c.rom) + "</p></details>",
        "yoldaş companion " + c.n + " " + c.arch
      )
    ).join("");
  }
  renderComp("all");
  $("#compFilters").addEventListener("click", (e) => {
    const b = e.target.closest(".chip"); if (!b) return;
    $$("#compFilters .chip").forEach((c) => c.classList.toggle("on", c === b));
    renderComp(b.dataset.f);
  });

  $("#difficulty").innerHTML = DIFFICULTY.map((d) =>
    card("<h4>" + esc(d.tr) + ' <span class="en">' + esc(d.n) + "</span></h4><p>" + esc(d.text) + "</p>", "zorluk difficulty " + d.n)
  ).join("");

  $("#dlcs").innerHTML = DLCS.map((d) =>
    card('<div class="rowhead"><h4>' + esc(d.n) + '</h4><span class="badge">' + esc(d.tag) + '</span></div><p class="tag">' + esc(d.year) + "</p><p>" + esc(d.text) + "</p>", "dlc " + d.n)
  ).join("");

  // ---------- hatalar ----------
  const MISTAKES = [
    ["Hard'da başlamak", "Wiki, Hard'ın sistemi bilmeyenlere önerilmediğini söylüyor. Normal ile başlayın, rahat edince yükseltin."],
    ["Herkesi her şeyde iyi yapmaya çalışmak", "Statlar yavaş artar. Herkes bir alanda uzman olsun; diğerlerinin değerleri yükseltme ekranında görünür."],
    ["Co-op'ta check'i yanlış kişiyle denemek", "Oyun en iyisini otomatik seçmez. Kapı/diyalog öncesi 'en yüksek Tech-Use/Persuasion kimde?' diye sorun."],
    ["Loot'u satıp geçmek / yerde bırakmak", "Çöp eşyayı Cargo'ya atın, fraksiyonlara konteyner olarak satıp itibar kazanın. Tab ve M haritası ile kaçan loot'u yakalayın."],
    ["Savaş sonrası medkit harcamak", "Savaş bittiğinde can tamamen dolar. Medkit yalnızca savaşı kaybetme riskinde ya da yaralanma (injury) temizlemek için."],
    ["Taze yaralanmayı eskiye bırakmak", "Fresh injury medkit ile garantili geçer; eski yaralanma şansa bağlı. Zorluğa göre tur sayısı değişir."],
    ["Dost ateşi", "AoE'den önce imleç altındaki kırmızı kareleri kontrol edin (Lightning Arc gibi)."],
    ["Veil'i görmezden gelmek", "Art arda psişik güç = iblis/ceza. Güçleri tur tur dağıtın."],
    ["Run and Gun'ı yanlış sırada kullanmak", "Winded −10 BS verir. Normal atış → Run and Gun → bedava atış sırasını izleyin."],
    ["Silah seti değişimini unutmak", "Bedava ve tur içinde serbest; menzilli + yakın set tanımlayın."],
    ["Idira'yı sıradan psişer sanmak", "Her psişik güçte rastgele Perils tetikleyebilir (video 3). Riskli bir kart: eğlenin ya da gerekirse partiden çıkarın."],
    ["Savaşa ilk turda atılmak", "Erken oyunda mesafe açın, siper kullanın, kümelenen düşmanı AoE ile vurun; dar geçitte tank + fırsat saldırıları."],
    ["Diyalog seçeneklerini tüketmemek", "Yoldaş görüşü ve Logic/Lore/Awareness/Coercion seçenekleri benzersiz loot, XP ve kısayol açabilir."],
    ["Tank için ağır zırh yeterliliği almamak", "Güç ve Heavy Armor Proficiency yoksa ağır zırhı giyemezsiniz. Önceden planlayın."],
    ["Gemide yeteneği açıp post atamamak", "İki adım: yetenek + post'a atanan, yeteneği bilen mürettebat."],
    ["Insight puanlarını hemen harcamak", "Topluluk ipucu: ileride özel rotalar kurmak için saklayın; zorunlu değilse güvenli rota için acele etmeyin."],
    ["Tooltip'leri okumamak", "Oyun tooltip'te çok şey açıklar; Corpus Valencius'ta sözlük var. Bilmediğiniz kelimenin üstüne gelin."],
    ["Nadiren kayıt almak", "Özellikle zorlu savaş öncesi ve geç bölümlerde sık manuel kayıt. Son otomatik kayıt uzak olabiliyor."],
    ["Sözcükleri yanlış anlamak", "Wounds = HP, Resolve = momentum kazancı, Cargo ≠ envanter. Sözlük sekmesini açık tutun."]
  ];
  $("#mistakeList").innerHTML = MISTAKES.map((m, i) =>
    card('<h4><span class="num">' + (i + 1) + "</span> " + esc(m[0]) + "</h4><p>" + esc(m[1]) + "</p>", "hata " + m[0])
  ).join("");

  // ---------- hesaplayıcılar ----------
  function updateBonus() {
    const base = Math.max(0, parseInt($("#bonusStat").value, 10) || 0);
    const up = parseInt($("#bonusUp").value, 10) || 0;
    const b0 = Math.floor(base / 10), b1 = Math.floor((base + up) / 10);
    $("#bonusOut").innerHTML = "Şimdi: <b>" + base + "</b> → bonus <b>" + b0 + "</b> &nbsp;|&nbsp; +" + up + " sonrası: <b>" + (base + up) + "</b> → bonus <b>" + b1 + "</b> " +
      (b1 > b0 ? '<span class="good">(bonus artıyor ✔)</span>' : '<span class="muted">(bonus aynı; yalnızca şans artar)</span>');
  }
  $("#bonusStat").addEventListener("input", updateBonus);
  $("#bonusUp").addEventListener("change", updateBonus);
  updateBonus();

  let lastRoll = null;
  function updateCheck(roll) {
    const total = (parseInt($("#chkSkill").value, 10) || 0) + (parseInt($("#chkMod").value, 10) || 0);
    const chance = Math.max(0, Math.min(100, total));
    let html = "Toplam hedef: <b>" + total + "</b> → yaklaşık <b>%" + chance + "</b> başarı";
    if (typeof roll === "number") {
      const ok = roll <= total;
      html += '<br>Zar: <b>' + roll + "</b> → " + (ok ? '<span class="good">BAŞARILI ✔</span>' : '<span class="bad">BAŞARISIZ ✘</span>');
    }
    $("#chkOut").innerHTML = html;
  }
  ["chkSkill", "chkMod"].forEach((id) => $("#" + id).addEventListener("input", () => updateCheck(null)));
  $("#chkRoll").addEventListener("click", () => { lastRoll = 1 + Math.floor(Math.random() * 100); updateCheck(lastRoll); });
  updateCheck(null);

  // ---------- parti kurucu ----------
  (function builder() {
    const RT = {
      support: { label: "Officer", tags: ["support"] },
      rangedcarry: { label: "Soldier", tags: ["ranged"] },
      melee: { label: "Warrior", tags: ["melee", "tank"] },
      debuff: { label: "Operative", tags: ["support", "ranged"] },
      meleecarry: { label: "Bladedancer", tags: ["melee"] }
    };
    const REQ = [
      ["tank", "Ön saf / tank"],
      ["support", "Destek (buff/debuff)"],
      ["ranged", "Menzilli hasar"],
      ["melee", "Yakın hasar"],
      ["caster", "Psişer / kontrol"],
      ["tech", "Yüksek Tech-Use"]
    ];
    const PLAYERS = ["Oyuncu A", "Oyuncu B", "Oyuncu C"];
    const state = store.get("builder", { rt: "support", owner: "0", comps: {} });
    const compsBox = $("#builderComps");

    compsBox.innerHTML = COMPANIONS.map((c, i) =>
      '<div class="bc"><span>' + esc(c.n) + ' <small class="muted">· ' + esc(c.join) + '</small></span>' +
      '<select data-i="' + i + '"><option value="">—</option>' + PLAYERS.map((p, pi) => '<option value="' + pi + '">' + p + "</option>").join("") + "</select></div>"
    ).join("");

    $("#rtArch").value = state.rt;
    $("#rtOwner").value = state.owner;
    $$("select", compsBox).forEach((s) => { s.value = state.comps[s.dataset.i] || ""; });

    function render() {
      const members = [{ name: "Rogue Trader (" + RT[state.rt].label + ")", owner: parseInt(state.owner, 10), tags: RT[state.rt].tags, join: "Prolog" }];
      COMPANIONS.forEach((c, i) => {
        const o = state.comps[i];
        if (o !== undefined && o !== "") members.push({ name: c.n, owner: parseInt(o, 10), tags: c.tags, join: c.join });
      });
      const per = [0, 0, 0];
      members.forEach((m) => per[m.owner]++);
      const covered = {};
      members.forEach((m) => m.tags.forEach((t) => (covered[t] = true)));
      const warns = [];
      if (members.length > 6) warns.push("Parti en çok 6 kişi: " + members.length + " seçtiniz. Savaşta 6'sı aktif olabilir; fazlası kenarda kalır.");
      per.forEach((n, i) => { if (n > 2) warns.push(PLAYERS[i] + " " + n + " karakter yönetiyor; 3 oyuncu için en rahat dağılım 2'şer karakter."); if (n === 0) warns.push(PLAYERS[i] + " hiç karakter almadı."); });
      const early = members.filter((m) => !/Prolog/.test(m.join));
      if (early.length) warns.push("Erken oyunda (Prolog) yalnızca Abelard, Idira ve Argenta var. " + early.map((m) => m.name.split(" (")[0]).join(", ") + " daha sonra katılır; o zamana kadar özel karakter ya da daha az karakterle oynayın.");
      const missing = REQ.filter((r) => !covered[r[0]]);
      const tips = [];
      if (!covered.support) tips.push("Destek eksik: Cassia veya Jae düşünün.");
      if (!covered.tank) tips.push("Ön saf eksik: Abelard iyi bir başlangıç.");
      if (!covered.ranged) tips.push("Menzilli hasar eksik: Argenta çok iyi (prolog'da gelir).");
      if (!covered.tech) tips.push("Tech-Use eksik: Pasqal (Bölüm 1) kapı/konteyner için çok işe yarar.");

      $("#builderOut").innerHTML =
        '<div class="players">' + PLAYERS.map((p, i) => {
          const list = members.filter((m) => m.owner === i).map((m) => esc(m.name)).join("<br>") || '<span class="muted">—</span>';
          return '<div class="pl"><b>' + p + " (" + per[i] + ")</b><div>" + list + "</div></div>";
        }).join("") + "</div>" +
        '<div class="cover">' + REQ.map((r) => '<span class="cv ' + (covered[r[0]] ? "ok" : "no") + '">' + (covered[r[0]] ? "✔ " : "✘ ") + esc(r[1]) + "</span>").join("") + "</div>" +
        (warns.length ? '<ul class="warnlist">' + warns.map((w) => "<li>" + esc(w) + "</li>").join("") + "</ul>" : "") +
        (tips.length ? '<ul class="tiplist">' + tips.map((t) => "<li>" + esc(t) + "</li>").join("") + "</ul>" : "") +
        (!warns.length && !missing.length ? '<p class="good">Güzel: tüm temel roller kapalı ve dağılım dengeli.</p>' : "");
    }
    render();

    $("#rtArch").addEventListener("change", (e) => { state.rt = e.target.value; store.set("builder", state); render(); });
    $("#rtOwner").addEventListener("change", (e) => { state.owner = e.target.value; store.set("builder", state); render(); });
    compsBox.addEventListener("change", (e) => {
      const s = e.target.closest("select"); if (!s) return;
      state.comps[s.dataset.i] = s.value; store.set("builder", state); render();
    });
  })();

  // ---------- sözlük ----------
  (function glossary() {
    const cats = ["Hepsi"].concat(Array.from(new Set(GLOSSARY.map((g) => g[0]))));
    const fb = $("#glFilters");
    fb.innerHTML = cats.map((c, i) => '<button class="chip' + (i === 0 ? " on" : "") + '" data-f="' + esc(c) + '">' + esc(c) + "</button>").join("");
    const tb = $("#glTable tbody");
    const mine = store.get("glossary-mine", {});
    tb.innerHTML = GLOSSARY.map((g) =>
      '<tr data-c="' + esc(g[0]) + '" data-k="' + esc(g[1]) + '"><td><b>' + esc(g[1]) + "</b></td><td>" + esc(g[2]) + "</td><td>" + esc(g[3]) + '</td><td><input class="mine" type="text" placeholder="oyundaki Türkçesi…" value="' + esc(mine[g[1]] || "") + '" aria-label="' + esc(g[1]) + ' oyundaki karşılığı"></td></tr>'
    ).join("");
    fb.addEventListener("click", (e) => {
      const b = e.target.closest(".chip"); if (!b) return;
      $$("#glFilters .chip").forEach((c) => c.classList.toggle("on", c === b));
      const f = b.dataset.f;
      $$("tr", tb).forEach((r) => r.classList.toggle("catHide", f !== "Hepsi" && r.dataset.c !== f));
    });
    tb.addEventListener("input", (e) => {
      const inp = e.target.closest(".mine"); if (!inp) return;
      const m = store.get("glossary-mine", {});
      const k = inp.closest("tr").dataset.k;
      if (inp.value.trim()) m[k] = inp.value; else delete m[k];
      store.set("glossary-mine", m);
    });
    $("#glExport").addEventListener("click", () => {
      const blob = new Blob([JSON.stringify(store.get("glossary-mine", {}), null, 2)], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "rogue-trader-sozluk-oyundaki.json";
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    });
    $("#glImport").addEventListener("click", () => $("#glFile").click());
    $("#glFile").addEventListener("change", (e) => {
      const f = e.target.files[0]; if (!f) return;
      const rd = new FileReader();
      rd.onload = () => {
        try {
          const data = JSON.parse(rd.result);
          if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error("biçim");
          const m = store.get("glossary-mine", {});
          Object.keys(data).forEach((k) => { if (typeof data[k] === "string") m[k] = data[k]; });
          store.set("glossary-mine", m);
          $$("tr", tb).forEach((r) => { r.querySelector(".mine").value = m[r.dataset.k] || ""; });
        } catch (err) { alert("Dosya okunamadı: geçerli bir JSON değil."); }
      };
      rd.readAsText(f);
      e.target.value = "";
    });
  })();

  // ---------- quiz ----------
  (function quiz() {
    const body = $("#quizBody");
    let order = [], i = 0, score = 0, answered = false;
    function shuffle(a) { for (let k = a.length - 1; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1)); [a[k], a[j]] = [a[j], a[k]]; } return a; }
    function start() { order = shuffle(QUIZ.map((_, k) => k)); i = 0; score = 0; show(); }
    function show() {
      answered = false;
      if (i >= order.length) {
        const best = Math.max(store.get("quiz-best", 0), score);
        store.set("quiz-best", best);
        body.innerHTML = "<h3>Sonuç</h3><p class='big'>" + score + " / " + order.length + "</p><p class='muted'>En iyi skorunuz: " + best + "</p><button class='btn' id='qRestart'>Tekrar</button>";
        $("#qRestart").addEventListener("click", start);
        return;
      }
      const qq = QUIZ[order[i]];
      const opts = qq.a.map((t, k) => ({ t, k }));
      shuffle(opts);
      body.innerHTML = "<div class='qhead'><span>Soru " + (i + 1) + " / " + order.length + "</span><span>Skor " + score + "</span></div>" +
        "<h3>" + esc(qq.q) + "</h3><div class='opts'>" + opts.map((o) => "<button class='opt' data-k='" + o.k + "'>" + esc(o.t) + "</button>").join("") + "</div><div id='qfb' class='qfb' aria-live='polite'></div>";
      $$(".opt", body).forEach((b) => b.addEventListener("click", () => pick(b, qq)));
    }
    function pick(b, qq) {
      if (answered) return; answered = true;
      const k = parseInt(b.dataset.k, 10);
      const ok = k === qq.c;
      if (ok) score++;
      $$(".opt", body).forEach((x) => {
        x.disabled = true;
        const kk = parseInt(x.dataset.k, 10);
        if (kk === qq.c) x.classList.add("right");
        else if (x === b) x.classList.add("wrong");
      });
      $("#qfb").innerHTML = (ok ? "<b class='good'>Doğru.</b> " : "<b class='bad'>Yanlış.</b> ") + esc(qq.e) + "<br><button class='btn' id='qNext'>" + (i + 1 >= order.length ? "Sonucu gör" : "Sonraki") + "</button>";
      $("#qNext").addEventListener("click", () => { i++; show(); });
    }
    start();
  })();

  // ---------- flashcards ----------
  (function flash() {
    const card = $("#flash");
    let deck = GLOSSARY.map((_, k) => k), pos = 0, flipped = false;
    function render() {
      const g = GLOSSARY[deck[pos]];
      card.classList.toggle("flipped", flipped);
      card.innerHTML = flipped
        ? "<small class='muted'>" + esc(g[0]) + " · " + (pos + 1) + "/" + deck.length + "</small><div class='ft'>" + esc(g[2]) + "</div><div class='fd'>" + esc(g[3]) + "</div>"
        : "<small class='muted'>" + esc(g[0]) + " · " + (pos + 1) + "/" + deck.length + "</small><div class='ft'>" + esc(g[1]) + "</div><div class='fd muted'>Türkçesi ne? Kartı çevirin.</div>";
    }
    function flip() { flipped = !flipped; render(); }
    $("#flashFlip").addEventListener("click", flip);
    card.addEventListener("click", flip);
    card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); } });
    $("#flashNext").addEventListener("click", () => { pos = (pos + 1) % deck.length; flipped = false; render(); });
    $("#flashPrev").addEventListener("click", () => { pos = (pos - 1 + deck.length) % deck.length; flipped = false; render(); });
    $("#flashShuffle").addEventListener("click", () => {
      for (let k = deck.length - 1; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1)); [deck[k], deck[j]] = [deck[j], deck[k]]; }
      pos = 0; flipped = false; render();
    });
    render();
  })();

  // ---------- diğer ----------
  $("#toTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // ---------- walkthrough ----------
  (function walkthrough() {
    const host = $("#walkChapters");
    if (!host || typeof WALK === "undefined") return;
    const list = (arr, tag) => arr && arr.length ? "<" + (tag || "ul") + ">" + arr.map((x) => "<li>" + x + "</li>").join("") + "</" + (tag || "ul") + ">" : "";
    const sec = (title, arr, tag) => arr && arr.length ? '<details class="spoiler"><summary>' + title + "</summary>" + list(arr, tag) + "</details>" : "";
    $("#walkGeneral").innerHTML = WALK_GENERAL.map((x) => "<li>" + x + "</li>").join("");
    host.innerHTML = WALK.map((c) =>
      '<article class="card chap" id="' + c.id + '" data-s="walkthrough ' + esc(c.tr + " " + c.en) + '">' +
        '<div class="chead"><h3>' + c.tr + ' <span class="en">' + c.en + "</span></h3>" +
        '<label><input type="checkbox" data-ch="' + c.id + '"> Bitirdim</label></div>' +
        "<p>" + c.gist + "</p>" +
        '<div class="warnbox"><b>⚠ Çıkmadan önce</b>' + list(c.warn) + "</div>" +
        sec("Adım adım (spoiler)", c.steps, "ol") +
        sec("Seçimler &amp; sonuçları (spoiler)", c.choices) +
        sec("Yoldaşlar (spoiler)", c.companions) +
        sec("Boss’lar (spoiler)", c.bosses) +
        sec("Kaçırılabilirler (spoiler)", c.missable) +
        sec("İpuçları", c.tips) +
      "</article>").join("");
    $("#walkRoute").innerHTML = WALK.map((c, i) => '<a href="#' + c.id + '" data-ch="' + c.id + '">' + (i === 0 ? "Prolog" : "Bölüm " + i) + "</a>").join("");
    $$("#walkRoute a").forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault();
      const el = document.getElementById(a.dataset.ch);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }));

    let done = store.get("walk-done", {});
    function paint() {
      let n = 0;
      WALK.forEach((c) => {
        const on = !!done[c.id];
        if (on) n++;
        const art = document.getElementById(c.id);
        art.classList.toggle("done", on);
        $('input[data-ch="' + c.id + '"]', art).checked = on;
        $('#walkRoute a[data-ch="' + c.id + '"]').classList.toggle("done", on);
      });
      $("#walkProg").style.width = (n / WALK.length * 100) + "%";
      $("#walkCount").textContent = n + " / " + WALK.length + " bölüm tamam";
    }
    host.addEventListener("change", (e) => {
      const id = e.target && e.target.dataset && e.target.dataset.ch;
      if (!id) return;
      if (e.target.checked) done[id] = true; else delete done[id];
      store.set("walk-done", done);
      paint();
    });
    $("#walkReset").addEventListener("click", () => {
      if (!window.confirm("Walkthrough ilerlemesi sıfırlansın mı?")) return;
      done = {}; store.set("walk-done", done); paint();
    });
    const sp = $("#walkSpoilers");
    sp.addEventListener("click", () => {
      const open = sp.getAttribute("aria-pressed") !== "true";
      sp.setAttribute("aria-pressed", String(open));
      sp.textContent = open ? "Tüm spoiler’ları kapat" : "Tüm spoiler’ları aç";
      $$("#walkChapters details.spoiler").forEach((d) => { d.open = open; });
    });
    paint();
  })();

  window.addEventListener("hashchange", () => { const id = location.hash.slice(1); if (id) { clearSearch(); showPanel(id, false); } });
  showPanel(location.hash.slice(1) || store.get("tab", "start"), false);
  window.scrollTo(0, 0);
})();
