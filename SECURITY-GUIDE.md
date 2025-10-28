# 🔒 Bezpečnostní příručka - Aura Michaell Massage

## ✅ IMPLEMENTOVÁNO (28. října 2025)

### 1. **Security Headers v HTML**
Přidány do všech 3 HTML stránek:
- ✅ `X-Content-Type-Options: nosniff` - Ochrana proti MIME type sniffing
- ✅ `X-Frame-Options: SAMEORIGIN` - Ochrana proti clickjacking
- ✅ `X-XSS-Protection: 1; mode=block` - Ochrana proti XSS útokům
- ✅ `Referrer-Policy` - Kontrola sdílení URL informací

### 2. **.htaccess soubor**
Vytvořen kompletní `.htaccess` s:
- ✅ Rozšířené HTTP security headers
- ✅ Content Security Policy (CSP)
- ✅ Ochrana citlivých souborů (.git, .env, .log, .bak)
- ✅ GZIP komprese (rychlejší načítání)
- ✅ Browser caching (zrychlení opakovaných návštěv)
- ✅ Zakázání directory listing (nelze procházet složky)
- ✅ Ochrana proti hotlinking (krádež obrázků)
- ✅ Blokování škodlivých botů
- ✅ Limit velikosti požadavků (ochrana DDoS)

---

## 🚨 KRITICKÉ - CO MUSÍTE UDĚLAT HNED

### 1. SSL/TLS Certifikát (HTTPS) ⭐⭐⭐⭐⭐
**Status:** 🔴 **CHYBÍ - OKAMŽITĚ VYŘEŠIT!**

**Proč je to důležité:**
- 🔒 Šifrovaná komunikace
- 🔍 Google preferuje HTTPS (lepší SEO)
- ✅ Důvěra návštěvníků (zelený zámek)
- 💳 Bezpečnost online plateb
- 📱 Nutné pro PWA a moderní funkce

**Jak získat SSL certifikát ZDARMA:**

#### Možnost A: Přes hosting (NEJJEDNODUŠŠÍ)
1. Přihlaste se do administrace hostingu
2. Hledejte sekci "SSL" nebo "Certifikáty"
3. Klikněte na "Let's Encrypt" nebo "Získat SSL"
4. Počkejte 5-10 minut na aktivaci

#### Možnost B: Cloudflare (BONUS: CDN zdarma)
1. Zaregistrujte se na https://cloudflare.com (zdarma)
2. Přidejte svou doménu
3. Změňte DNS servery (Cloudflare vám řekne jak)
4. Zapněte SSL v Cloudflare dashboardu
5. **BONUS:** Dostanete CDN, DDoS ochranu, analytics

**Po aktivaci SSL:**
Odkomentujte v `.htaccess` tyto řádky:
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

Header always set Strict-Transport-Security "max-age=31536000"
```

---

## 📋 TÝDENNÍ KONTROLA (5 minut)

### Co kontrolovat každý týden:
- [ ] Web je dostupný a běží normálně
- [ ] Google Analytics - žádný podezřelý provoz
- [ ] Email - žádné spam/phishing zprávy klientům
- [ ] Rychlý test funkcí (rezervace, galerie, odkazy)

### Nástroje pro monitoring:
1. **UptimeRobot** (zdarma)
   - https://uptimerobot.com
   - Pošle email, když web spadne

2. **Google Search Console**
   - https://search.google.com/search-console
   - Upozornění na SEO problémy

---

## 🔄 MĚSÍČNÍ ÚDRŽBA (15 minut)

### Záloha webu
**Frekvence:** Minimálně 1x měsíčně (ideálně týdně)

**Co zálohovat:**
```
✅ Všechny HTML soubory (index.html, msginfo.html, atd.)
✅ style.css, main.js
✅ Složky: galerie/, masaze/, Poukazy/
✅ .htaccess
✅ Obrázky: logo.png, prostor.jpg, atd.
```

**Kam ukládat zálohy:**
- ☁️ Google Drive
- 💾 Lokální disk
- 🖥️ Externí disk
- 📧 Email (menší soubory)

**Jak zazipovat (Windows):**
1. Pravý klik na složku `Masáže`
2. Odeslat do → Komprimovaná složka
3. Pojmenujte: `masaze-backup-2025-10-28.zip`
4. Nahrajte na Google Drive

### Bezpečnostní sken
1. Navštivte: https://sitecheck.sucuri.net
2. Zadejte: `aura-michaell-massage.cz`
3. Zkontrolujte výsledky
4. Pokud najde malware → kontaktujte hosting IHNED

---

## 🎯 DOPORUČENÍ (Nice to have)

### 1. Optimalizace obrázků (zrychlení webu)
**Nástroje:**
- TinyPNG: https://tinypng.com (online)
- Squoosh: https://squoosh.app (Google)

**Postup:**
1. Nahrajte obrázek
2. Stáhněte komprimovanou verzi
3. Nahraďte původní soubor
4. **Ušetříte:** 50-70% velikosti bez ztráty kvality

### 2. robots.txt soubor
Vytvořte soubor `robots.txt` v kořenové složce:
```
User-agent: *
Allow: /
Disallow: /tools/

Sitemap: https://aura-michaell-massage.cz/sitemap.xml
```

### 3. Favicon pro všechny zařízení
Přidejte do `<head>` (všechny stránky):
```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
```

---

## 🚨 CO DĚLAT PŘI HACKNUTÍ

### 1. OKAMŽITĚ (první hodina)
1. ⛔ Deaktivujte web (přejmenujte index.html na index-old.html)
2. 🔑 Změňte VŠECHNA hesla:
   - Hosting
   - FTP
   - Email
   - Reservio
3. 📞 Kontaktujte hosting technickou podporu

### 2. ANALÝZA (do 24 hodin)
1. Stáhněte log soubory ze serveru
2. Zkontrolujte, které soubory byly změněny
3. Identifikujte typ útoku

### 3. OBNOVA (do 48 hodin)
1. Smažte VŠECHNY soubory na serveru
2. Obnovte ze zálohy
3. Změňte hesla znovu (jiná než předtím)
4. Implementujte dodatečné zabezpečení
5. Monitorujte intenzivně další týden

---

## 📊 TESTOVÁNÍ BEZPEČNOSTI

### Online nástroje (ZDARMA):
1. **Security Headers:** https://securityheaders.com
   - Zkontroluje HTTP hlavičky
   - Hodnocení A až F

2. **SSL Test:** https://www.ssllabs.com/ssltest/
   - Po aktivaci SSL certifikátu
   - Hodnocení kvality SSL

3. **PageSpeed Insights:** https://pagespeed.web.dev
   - Rychlost webu
   - SEO doporučení

4. **GTmetrix:** https://gtmetrix.com
   - Komplexní analýza rychlosti
   - Vodopádový graf načítání

---

## 📞 KONTAKTY V NOUZI

### Technická podpora
- 🏢 **Hosting provider:** (váš poskytovatel)
- 🌐 **Doména registrátor:** (registrátor domény)

### Bezpečnostní služby
- 🛡️ **Sucuri:** https://sucuri.net
- ☁️ **Cloudflare:** https://cloudflare.com
- 🔒 **Let's Encrypt:** https://letsencrypt.org

### Reportování útoků
- 🔍 **Google Safe Browsing:** https://safebrowsing.google.com
- 🇨🇿 **CSIRT.CZ:** https://csirt.cz (česká incident response)

---

## ✅ CHECKLIST PŘED NAHRÁNÍM NA SERVER

### Před každým uploadem zkontrolujte:
- [ ] Všechny změny jsou otestované lokálně
- [ ] Záloha aktuální verze vytvořena
- [ ] .htaccess soubor je připraven
- [ ] Security headers jsou v HTML souborech
- [ ] Žádné testovací/debug kódy v souborech
- [ ] Obrázky jsou optimalizované
- [ ] Odkazy fungují (není tam "localhost")

---

## 📚 VZDĚLÁVACÍ MATERIÁLY

### Pro začátečníky:
- 🎓 **Web Security Basics:** https://web.dev/secure/
- 🔒 **HTTPS vysvětleno:** https://howhttps.works
- 🛡️ **OWASP Top 10:** https://owasp.org/www-project-top-ten/

### Pro pokročilé:
- 💻 **MDN Web Security:** https://developer.mozilla.org/en-US/docs/Web/Security
- 🔐 **Content Security Policy:** https://content-security-policy.com

---

## 📈 MĚŘITELNÉ CÍLE

### Do 1 týdne:
- ✅ SSL certifikát aktivován
- ✅ .htaccess nahrán na server
- ✅ První záloha vytvořena
- ✅ UptimeRobot nastaven

### Do 1 měsíce:
- ✅ Security Headers test (hodnocení A)
- ✅ SSL Test (hodnocení A)
- ✅ Pravidelné zálohy automatizované
- ✅ Všechny obrázky optimalizované

### Do 3 měsíců:
- ✅ Cloudflare CDN aktivní
- ✅ robots.txt a sitemap.xml
- ✅ Monitoring a alerting funkční
- ✅ Pravidelná bezpečnostní rutina zavedena

---

**📅 Vytvořeno:** 28. října 2025  
**👤 Odpovědná osoba:** Michaela Svobodová  
**📧 Kontakt:** aura.michaell@seznam.cz  
**📱 Telefon:** +420 727 836 338  
**📄 Verze:** 1.0

---

**💡 TIP:** Vytiskněte si tento checklist a mějte ho u počítače!
