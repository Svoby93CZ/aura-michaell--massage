# ✅ SSL Certifikát - Kontrolní seznam

## 🎯 OKAMŽITĚ PO NAHRÁNÍ .htaccess

### 1. Test základní funkčnosti (1 minuta)
- [ ] Otevřete: `http://vase-domena.cz` (bez https)
- [ ] ✅ Mělo by automaticky přesměrovat na `https://vase-domena.cz`
- [ ] ✅ Vidíte zelený zámek 🔒 v adresním řádku
- [ ] ✅ Web se normálně zobrazuje

### 2. Test všech stránek (2 minuty)
- [ ] ✅ https://vase-domena.cz/ (hlavní stránka)
- [ ] ✅ https://vase-domena.cz/msginfo.html (služby)
- [ ] ✅ https://vase-domena.cz/privacy-policy.html (GDPR)
- [ ] ✅ Všechny obrázky se načítají správně
- [ ] ✅ Galerie funguje (lightbox)
- [ ] ✅ Všechny odkazy fungují

### 3. Test externích služeb (3 minuty)
- [ ] ✅ Google Analytics funguje (zkontrolujte Real-time)
- [ ] ✅ Reservio widget funguje (tlačítko rezervace)
- [ ] ✅ Google recenze se zobrazují
- [ ] ✅ Google mapa funguje
- [ ] ✅ Fonty z Google Fonts se načítají

---

## 🔬 PROFESIONÁLNÍ TESTY (5-10 minut)

### Test 1: SSL Labs (⭐ NEJDŮLEŽITĚJŠÍ!)
**URL:** https://www.ssllabs.com/ssltest/

**Postup:**
1. Zadejte vaši doménu (bez https://)
2. Klikněte "Submit"
3. Počkejte 2-3 minuty

**Očekávaný výsledek:**
```
Overall Rating: A nebo A+
Certificate: 100/100
Protocol Support: 95-100/100
Key Exchange: 90-100/100
Cipher Strength: 90/90
```

**Pokud dostanete B nebo horší:**
- Kontaktujte hosting support
- Pravděpodobně potřebují aktualizovat TLS verzi

---

### Test 2: Security Headers
**URL:** https://securityheaders.com

**Postup:**
1. Zadejte: https://vase-domena.cz
2. Klikněte "Scan"

**Očekávaný výsledek:**
```
Grade: A
✅ X-Frame-Options
✅ X-Content-Type-Options
✅ X-XSS-Protection
✅ Strict-Transport-Security
✅ Content-Security-Policy
✅ Referrer-Policy
```

---

### Test 3: Mixed Content (Smíšený obsah)
**Co to je:** HTTP obsah na HTTPS stránce (bezpečnostní problém!)

**Jak testovat:**
1. Otevřete web na HTTPS
2. Stiskněte F12 (Developer Tools)
3. Jděte na záložku "Console"
4. Hledejte červené chyby typu: "Mixed Content"

**Co dělat při chybě:**
```
❌ ŠPATNĚ: <img src="http://example.com/obr.jpg">
✅ DOBŘE:  <img src="https://example.com/obr.jpg">
✅ DOBŘE:  <img src="obr.jpg"> (relativní cesta)
```

---

### Test 4: Google Search Console
**URL:** https://search.google.com/search-console

**Postup:**
1. Přihlaste se
2. Přidejte HTTPS verzi: `https://vase-domena.cz`
3. Ověřte vlastnictví (Google vás provede)
4. Nastavte HTTPS jako preferovanou verzi

---

### Test 5: PageSpeed Insights
**URL:** https://pagespeed.web.dev

**Postup:**
1. Zadejte: https://vase-domena.cz
2. Počkejte na analýzu

**Očekávaný výsledek:**
```
Performance: 80+ bodů
Accessibility: 90+ bodů
Best Practices: 90+ bodů
SEO: 90+ bodů
```

---

## 🐛 ŘEŠENÍ PROBLÉMŮ

### Problém: "Připojení není zabezpečené"
**Příčina:** SSL certifikát není správně nainstalován

**Řešení:**
1. Počkejte 10-15 minut (propagace)
2. Vymažte cache prohlížeče (Ctrl+Shift+Del)
3. Zkuste jiný prohlížeč
4. Pokud problém přetrvává → kontaktujte hosting

---

### Problém: "Mixed Content" warning
**Příčina:** Některé obrázky/skripty jsou z HTTP

**Řešení:**
1. Otevřete Developer Tools (F12)
2. Najděte HTTP odkazy v Console
3. Změňte je na HTTPS nebo relativní cesty

**Příklad:**
```html
<!-- PŘED -->
<img src="http://vase-domena.cz/logo.png">

<!-- PO -->
<img src="logo.png">
```

---

### Problém: Nekonečné přesměrování
**Příčina:** Konflikt mezi Cloudflare a .htaccess

**Řešení (pokud používáte Cloudflare):**
V `.htaccess` změňte:
```apache
# PŮVODNÍ
RewriteCond %{HTTPS} off

# ZMĚŇTE NA
RewriteCond %{HTTP:X-Forwarded-Proto} !https
RewriteCond %{HTTPS} off
```

---

### Problém: Google Analytics přestal fungovat
**Příčina:** Analytics měří jako nový web

**Řešení:**
1. Jděte do Google Analytics
2. Nastavení → Property Settings
3. Změňte URL na HTTPS
4. Počkejte 24 hodin na update

---

## 📊 MONITORING PO AKTIVACI

### Den 1-7: Intenzivní monitoring
**Každý den kontrolujte:**
- [ ] Web je dostupný
- [ ] Google Analytics ukazuje návštěvníky
- [ ] Žádné chyby v Google Search Console
- [ ] Email upozornění od UptimeRobot (pokud máte)

### Týden 2-4: Standardní monitoring
**Každé 3 dny:**
- [ ] Rychlý test všech stránek
- [ ] Kontrola Analytics

### Měsíc 2+: Pravidelná údržba
**1x týdně:**
- [ ] Základní test funkčnosti
- [ ] Kontrola expirace certifikátu (automaticky se obnovuje)

---

## 🎓 CO DĚLAT DÁLE

### 1. Aktualizace Google
- [ ] Google Search Console - přidejte HTTPS verzi
- [ ] Google My Business - aktualizujte URL (pokud máte)
- [ ] Google Analytics - změňte URL na HTTPS

### 2. Aktualizace social media
- [ ] Facebook profil - aktualizujte URL
- [ ] Instagram bio - aktualizujte URL
- [ ] Další platformy kde máte odkaz

### 3. Informujte klienty
- [ ] Email zákazníkům o nové HTTPS adrese
- [ ] Aktualizujte vizitky (pokud je na nich web)
- [ ] Aktualizujte letáky/materiály

### 4. SEO optimalizace
- [ ] Vytvořte sitemap.xml
- [ ] Přidejte sitemap do Search Console
- [ ] Zkontrolujte robots.txt

---

## 🏆 GRATULACE!

Pokud jste prošli všemi testy s výsledky A nebo A+, váš web má:

✅ **Profesionální úroveň zabezpečení**
✅ **Důvěru návštěvníků**
✅ **Lepší SEO ranking**
✅ **Ochranu dat klientů**

---

## 📞 Pomoc a podpora

**Technické problémy:**
- Hosting support (technická podpora vašeho hostingu)

**SSL specifické:**
- Let's Encrypt Community: https://community.letsencrypt.org
- SSL Labs FAQ: https://github.com/ssllabs/research/wiki/SSL-Server-Rating-Guide

**Obecná bezpečnost:**
- OWASP: https://owasp.org
- Mozilla Observatory: https://observatory.mozilla.org

---

**Vytvořeno:** 28. října 2025  
**Status:** SSL AKTIVNÍ ✅  
**Další kontrola:** Za týden (4. listopadu 2025)
