# FeToMa – fertige statische Website

## Hosten

Den **gesamten Inhalt von `dist/`** in das Webverzeichnis des Hosters hochladen.
Die dortige `index.html` muss direkt im Webverzeichnis liegen.

Bei einem Hosting-Dienst mit Projekteinstellungen:
- Veröffentlichungsverzeichnis: `dist`
- Build-Befehl: keiner
- Framework: keines / statische Website

Kein Node.js, npm, Python oder Build-Schritt ist auf dem Webserver erforderlich.
Die Website ist für eine eigene Domain bzw. deren Stammverzeichnis vorgesehen,
nicht für ein Unterverzeichnis wie `/meine-seite/`.

## Lokal ansehen

Vom Projektordner aus:

```sh
python3 -m http.server 5173 --bind 127.0.0.1 --directory dist
```

Danach http://localhost:5173 öffnen.

## Bearbeiten

Die Dateien in `dist/` sind jetzt die maßgeblichen, direkt bearbeitbaren Dateien:
- `index.html`: Startseite
- `eventtechnik/index.html`, `dekoration/index.html`, `kontakt/index.html`
- `widerruf/index.html`
- `assets/site.css`: ergänzende Gestaltung
- `assets/site.js`: Navigation und WhatsApp-Anfrage
- `assets/fonts/` und die `*_files/`-Ordner: benötigte Originalschriften, Bilder und CSS

Die ursprünglichen Browserexporte, doppelte Dateien und Build-Werkzeuge wurden entfernt.
Die verbliebenen Bildgrößen werden in den responsiven Bildern verwendet.

## Bestehende Einschränkungen

- Das Kontaktformular öffnet einen WhatsApp-Entwurf; der Nutzer sendet selbst ab.
- Der tatsächliche Widerruf erfolgt über einen Link zum Originalformular.
- Impressum, Datenschutz und Cookie-Einstellungen verweisen weiterhin auf die
  Originalwebsite, da dafür keine lokalen Exporte vorliegen.
- Die HTML-Dateien enthalten weiterhin `noindex, nofollow`. Wenn die neue
  Website in Suchmaschinen erscheinen soll, muss diese Meta-Angabe angepasst werden.
- Die Darstellung wurde nicht visuell im Browser geprüft.

Es wurde nichts veröffentlicht.
