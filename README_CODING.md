## Rychlý přehled pro úpravy kódu

Tento soubor shrnuje doporučené praktiky a rychlé kroky pro bezpečné a přehledné úpravy v tomto repozitáři.

### Stav úkolů

- [x] Přidat komentovaný TOC a sekční hlavičky do `style.css`.
- [ ] Přesunout inline styly z `msginfo.html` do pojmenovaných tříd ve `style.css`.
- [ ] Konsolidovat opakované hodnoty do CSS proměnných.
- [ ] Doplnit linting / formátování (např. Prettier, Stylelint).

- Struktura projektu
  - `msginfo.html` — stránka s přehledem služeb.
  - `style.css` — hlavní styl; obsahuje globální proměnné, layout a komponenty.

- Doporučené kroky před úpravou
  1. Vytvořte zálohu (git branch) pro změny: `git switch -c feat/ui-improvements`.
  2. Ověřte změny lokálně otevřením `msginfo.html` v prohlížeči.

- Rychlé zlepšení čitelnosti
  - Přesuňte opakující se inline styly z `msginfo.html` do `style.css` jako pojmenované třídy (např. `.card-media`, `.service-meta`).
  - Rozdělte `style.css` logicky (variables, base, components, layout, pages, responsive). Použijte komentované oddíly a krátké TOC nahoře souboru.

- Linting & formátování
  - Doporučeno nastavit editor tak, aby používal Prettier/Stylelint pro CSS. To zajistí jednotné odsazení a zápis selektorů.

- Jak přidat novou službu
  1. Do `msginfo.html` přidejte strukturu karty bez inline stylů: obrázek, `div.card-title`, `a.service-price-tag-link`.
  2. Aktualizujte `style.css` pokud je potřeba nový modul.

- Testování
  - Otevřete `msginfo.html` v prohlížeči, ověřte, že cenovky vedou do Reservio a obrázky nejsou klikatelné.

Krátký checklist před commitem:
- Spustit `git add -A && git commit -m "popis změn"`.
- Otevřít změny v prohlížeči.

Další kroky doporučené pro refaktor:
- Vytvořit malé CSS moduly (např. `components` část) a postupně extrahovat inline styly.
- Přidat `CONTRIBUTING.md` pokud bude víc přispěvatelů.
