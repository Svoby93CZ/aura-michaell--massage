# 🗺️ Sitemap.xml - Průvodce instalací a používáním

## ✅ Co bylo vytvořeno:

### 1. **sitemap.xml** 
XML soubor se seznamem všech stránek vašeho webu

### 2. **robots.txt** 
Aktualizován s odkazem na sitemap

---

## 📝 **CO JE SITEMAP.XML?**

**Sitemap.xml** je soubor, který obsahuje **kompletní seznam všech stránek** vašeho webu.

### 🎯 **K čemu slouží:**
- 📍 Říká Googlu: "Tady najdeš všechny moje stránky"
- ⚡ **Rychlejší indexování** - Google najde stránky okamžitě
- 🎯 **Lepší SEO** - žádná stránka se neztratí
- 📊 **Priority** - říká, které stránky jsou nejdůležitější
- 📅 **Frekvence změn** - kdy Google má stránky kontrolovat

### 📈 **Výhody:**
```
✅ Google indexuje nové stránky rychleji
✅ Všechny stránky budou ve vyhledávání
✅ Lepší pozice ve vyhledávání
✅ Kontrola nad tím, co Google vidí
```

---

## ⚠️ **DŮLEŽITÉ - PŘED NAHRÁNÍM NA SERVER:**

### ❗ Změňte URL na vaši skutečnou doménu!

**V souboru `sitemap.xml` najděte a změňte:**

```xml
<!-- PŘED (VZOR) -->
<loc>https://aura-michaell-massage.cz/</loc>

<!-- PO (VAŠE DOMÉNA) -->
<loc>https://vase-skutecna-domena.cz/</loc>
```

**Kde změnit:** Změňte na **VŠECH 4 místech** v sitemap.xml

---

## 📤 **INSTALACE (3 kroky):**

### Krok 1: Upravte doménu ✏️
1. Otevřete `sitemap.xml`
2. Najděte `aura-michaell-massage.cz`
3. Nahraďte **VŠEMI VÝSKYTY** vaší skutečnou doménou
4. Uložte soubor

### Krok 2: Nahrajte na server 📤
Nahrajte tyto 2 soubory do **kořenové složky** (tam kde je index.html):
```
✅ sitemap.xml
✅ robots.txt (aktualizovaný)
```

### Krok 3: Ověřte instalaci ✅
Otevřete prohlížeč a zkontrolujte:
- `https://vase-domena.cz/sitemap.xml` ✅ měli byste vidět XML
- `https://vase-domena.cz/robots.txt` ✅ měli byste vidět Sitemap řádek

---

## 🔍 **REGISTRACE DO GOOGLE SEARCH CONSOLE:**

### Proč to udělat:
- 📊 Vidíte statistiky vyhledávání
- 🔍 Kolik lidí vás našlo přes Google
- ⚠️ Upozornění na chyby
- 📈 SEO doporučení

### Postup:

#### 1. Registrace (5 minut)
1. Jděte na: https://search.google.com/search-console
2. Klikněte "Začít"
3. Přihlaste se Google účtem
4. Vyberte "Doména" nebo "Prefix URL"
5. Zadejte: `https://vase-domena.cz`

#### 2. Ověření vlastnictví
Google nabídne několik možností:

**Možnost A: HTML soubor** (NEJJEDNODUŠŠÍ)
1. Stáhněte soubor od Google (např. `google12345.html`)
2. Nahrajte do kořenové složky webu
3. Klikněte "Ověřit"

**Možnost B: HTML tag**
1. Google vám dá kód: `<meta name="google-site-verification" content="...">`
2. Vložte ho do `<head>` sekce index.html
3. Nahrajte na server
4. Klikněte "Ověřit"

**Možnost C: DNS záznam**
1. Přidejte TXT záznam do DNS
2. Počkejte 24-48 hodin na propagaci
3. Klikněte "Ověřit"

#### 3. Přidání sitemap (2 minuty)
Po ověření:
1. V Search Console klikněte "Sitemapy" (levý panel)
2. Klikněte "Přidat novou sitemapu"
3. Zadejte: `sitemap.xml` (nebo celou URL)
4. Klikněte "Odeslat"

**Výsledek:**
```
✅ Sitemap odeslána
✅ Google začne indexovat během 24-48 hodin
✅ Statistiky se objeví za týden
```

---

## 📊 **REGISTRACE DO DALŠÍCH VYHLEDÁVAČŮ:**

### 1. Bing Webmaster Tools (doporučeno)
**URL:** https://www.bing.com/webmasters

**Proč:**
- 2. největší vyhledávač
- Používá ho Microsoft Edge
- 20-30% českých uživatelů

**Postup:**
1. Přihlaste se Microsoft účtem
2. "Add a site" → zadejte URL
3. Ověřte vlastnictví (stejně jako Google)
4. Přidejte sitemap v sekci "Sitemaps"

### 2. Seznam.cz (pro Česko důležité!)
**URL:** https://search.seznam.cz/pridej-stranku

**Proč:**
- #1 vyhledávač v ČR (30-40% trh)
- Hlavně starší generace
- Lokální vyhledávání

**Postup:**
1. Vyplňte formulář přidání webu
2. Seznam automaticky najde váš robots.txt a sitemap

### 3. Yandex (volitelné)
**URL:** https://webmaster.yandex.com

**Proč:**
- Ruský vyhledávač
- Pokud máte ruské návštěvníky

---

## 🔄 **AKTUALIZACE SITEMAP:**

### Kdy aktualizovat:
- ✅ Přidáte novou stránku
- ✅ Smažete stránku
- ✅ Změníte URL stránky
- ✅ Velké změny v obsahu

### Jak aktualizovat:

#### 1. Upravte sitemap.xml
```xml
<!-- Přidejte novou stránku -->
<url>
  <loc>https://vase-domena.cz/nova-stranka.html</loc>
  <lastmod>2025-11-15</lastmod>  <!-- dnešní datum -->
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

#### 2. Změňte datum u upravených stránek
```xml
<!-- PŘED -->
<lastmod>2025-10-28</lastmod>

<!-- PO (dnešní datum) -->
<lastmod>2025-11-15</lastmod>
```

#### 3. Nahrajte na server
Přepište starý sitemap.xml novým

#### 4. Informujte Google (volitelné)
V Search Console:
1. Sitemapy → klikněte na vaši sitemap
2. "Znovu odeslat sitemapu"

**NEBO** ping:
```
https://www.google.com/ping?sitemap=https://vase-domena.cz/sitemap.xml
```
(Otevřete tuto URL v prohlížeči)

---

## 🧪 **TESTOVÁNÍ A VALIDACE:**

### Test 1: Základní dostupnost
```
✅ https://vase-domena.cz/sitemap.xml
   Měli byste vidět XML soubor
```

### Test 2: Validace XML
**URL:** https://www.xml-sitemaps.com/validate-xml-sitemap.html

**Postup:**
1. Zadejte URL sitemap
2. Klikněte "Validate"
3. Měli byste dostat: ✅ "Valid sitemap"

### Test 3: Google Rich Results Test
**URL:** https://search.google.com/test/rich-results

**Postup:**
1. Zadejte URL vaší stránky
2. Google zkontroluje strukturu
3. Doporučení pro vylepšení

### Test 4: Screaming Frog (pokročilé)
**URL:** https://www.screamingfrogseoseo.com/seo-spider/

**Použití:**
- Stáhněte (zdarma do 500 URL)
- Naskenuje celý web
- Najde všechny stránky
- Porovná s vaší sitemap
- Najde chybějící stránky

---

## 📈 **SLEDOVÁNÍ VÝSLEDKŮ:**

### Google Search Console - Co sledovat:

#### 1. Výkon (Performance)
```
📊 Zobrazení - kolikrát se objevil váš web
👆 Kliknutí - kolikrát lidé klikli
📍 Pozice - průměrná pozice ve vyhledávání
🔍 Dotazy - co lidé hledali
```

#### 2. Pokrytí (Coverage)
```
✅ Platné stránky - úspěšně indexované
⚠️  Chyby - co nejde indexovat
📝 Varování - potenciální problémy
❌ Vyloučené - záměrně neindexované
```

#### 3. Sitemapy
```
📄 Odeslané URL - kolik stránek jste poslali
✅ Indexované - kolik Google našel
⏱️  Čas odeslání - kdy aktualizováno
```

### Očekávané výsledky:

**Týden 1:**
```
- Google začne procházet web
- Sitemap status: "Úspěšně"
- 0-50% stránek indexováno
```

**Týden 2-4:**
```
- 80-100% stránek indexováno
- První statistiky vyhledávání
- První klíčová slova
```

**Měsíc 2+:**
```
- Pravidelný provoz
- Rostoucí počet zobrazení
- Lepší pozice klíčových slov
```

---

## 🎯 **PRIORITY V SITEMAP:**

### Co znamenají čísla:

```
1.0 = Nejvyšší priorita
      → Hlavní stránka
      → Nejdůležitější servisní stránky

0.9 = Velmi vysoká priorita
      → Stránka služeb/ceníky
      → Kontaktní stránka

0.8 = Vysoká priorita
      → Podkategorie služeb
      → Blog články (hlavní)

0.5 = Střední priorita
      → GDPR/Privacy policy
      → Starší blog články

0.3 = Nízká priorita
      → Archiv
      → Stránky s malým významem
```

### Vaše aktuální nastavení:
```xml
1.0 → index.html (hlavní stránka)
0.9 → msginfo.html (služby a ceníky)
0.5 → privacy-policy.html (GDPR)
```

---

## 💡 **TIPY PRO LEPŠÍ SEO:**

### 1. Pravidelné aktualizace
```
✅ Aktualizujte datum v sitemap při změnách
✅ Google tak ví, kdy znovu procházet
✅ Lepší indexování aktuálního obsahu
```

### 2. Správná frekvence změn
```
daily   → Blog, aktuality (nemáte)
weekly  → Hlavní stránka (máte ✅)
monthly → Služby/ceníky (máte ✅)
yearly  → GDPR, kontakty (máte ✅)
```

### 3. Ne moc, ne málo stránek
```
✅ 3-10 stránek = ideální pro malý web
⚠️  100+ stránek = možná příliš mnoho
❌ 1 stránka = sitemap zbytečná
```

### 4. Strukturovaná data (budoucnost)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Aura Michaell Massage",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Šmilovského 663/1",
    "addressLocality": "Bruntál",
    "postalCode": "792 01"
  }
}
```
*Toto přidá extra informace pro Google*

---

## 🚀 **DALŠÍ KROKY:**

### Dnes:
1. ✏️  Změňte doménu v sitemap.xml
2. 📤 Nahrajte sitemap.xml a robots.txt
3. 🧪 Otevřete https://vase-domena.cz/sitemap.xml
4. ✅ Měli byste vidět XML

### Tento týden:
1. 📝 Zaregistrujte se do Google Search Console
2. 📊 Přidejte sitemap
3. 🔍 Zaregistrujte i do Seznam.cz

### Tento měsíc:
1. 📈 Sledujte statistiky v Search Console
2. 🔄 Aktualizujte sitemap při změnách
3. 📱 Sdílejte novou HTTPS verzi na soc. sítích

---

## 📞 **POMOC A PODPORA:**

### Oficiální dokumentace:
- 📖 Google Sitemap: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- 📖 Sitemap.org: https://www.sitemaps.org/protocol.html

### Online nástroje:
- 🛠️ XML Sitemap Generator: https://www.xml-sitemaps.com
- 🛠️ Sitemap Validator: https://www.xml-sitemaps.com/validate-xml-sitemap.html
- 🛠️ SEO Spider: https://www.screamingfrogseoseo.com

### České zdroje:
- 🇨🇿 Seznam nápověda: https://napoveda.seznam.cz
- 🇨🇿 Google Search Central: https://developers.google.com/search

---

## ✅ **CHECKLIST:**

### Před nahráním:
- [ ] Změněna doména v sitemap.xml (všechny výskyty)
- [ ] Aktualizován robots.txt (s odkazem na sitemap)
- [ ] Oba soubory připraveny k nahrání

### Po nahrání:
- [ ] Sitemap dostupná na URL
- [ ] Robots.txt dostupný na URL
- [ ] XML validní (bez chyb)

### Do týdne:
- [ ] Registrace Google Search Console
- [ ] Ověření vlastnictví webu
- [ ] Přidání sitemap do Console
- [ ] Registrace Seznam.cz

### Do měsíce:
- [ ] První statistiky v Console
- [ ] První stránky indexované
- [ ] Monitoring funkční

---

**Vytvořeno:** 28. října 2025  
**Status:** Připraveno k nasazení ✅  
**Další akce:** Změnit doménu a nahrát na server

---

**💡 TIP:** Po registraci do Search Console vám doporučuji nastavit emailové notifikace!
