# Technische Uebersicht - FeToMa Webseite

Dieses Dokument beschreibt den aktuellen Stand des React/Vite-Prototyps fuer die neue FeToMa Veranstaltungstechnik Webseite.

## Verwendete Technologien

- **React**: Grundlage fuer die UI. Die Seite ist aus funktionalen React Components aufgebaut.
- **Vite**: Entwicklungsserver und Build-Tool. Vite sorgt fuer schnelle lokale Entwicklung und erstellt den Produktionsbuild.
- **React Router**: Routing-Grundlage der App. Aktuell zeigt die App einen One-Pager, ist aber bereits fuer weitere Seiten vorbereitet.
- **TailwindCSS v4**: Styling-System fuer Layout, Farben, Abstaende, responsive Breakpoints und moderne UI-Zustaende.
- **@tailwindcss/vite**: Offizielle Tailwind-Integration fuer Vite.
- **Framer Motion**: Animationen fuer Hero, Sektionen, Karten und Mobile-Menue.
- **Lucide React**: Icon-Bibliothek fuer Navigation, Buttons, Checklisten, Sterne und CTA-Elemente.

## Was umgesetzt wurde

Die bisherige Vite-Starterseite wurde durch einen professionellen One-Pager-Prototyp ersetzt. Ziel war eine moderne, dunkle Eventtechnik-Webseite mit hochwertiger visueller Wirkung.

Umgesetzt sind:

- Sticky Navbar mit transparentem Glassmorphism-Look
- responsive Mobile-Burger-Menue
- fullscreen Hero Section mit Event-Hintergrundbild
- grosse Headline, Subheadline und zwei CTA Buttons
- Leistungsbereich fuer Eventtechnik, Lichttechnik, Soundtechnik, Partyzelte, Dekoration und Hochzeitsausstattung
- Equipment-/Mietsortiment als moderne Uebersicht
- Dekorationsauszug mit Beispielpreisen
- Galerie mit hochwertigen Eventbildern
- Ablaufsektion fuer den Anfrageprozess
- Kundenfeedback Cards
- grosse Abschluss-CTA mit WhatsApp- und Telefonbutton
- globale Dark-Theme-Basis mit Schwarz/Anthrazit, Cyan- und Violett-Akzenten
- SEO-Basis im HTML-Dokument

Die Inhalte orientieren sich an der Projektdefinition und der bestehenden Beispielseite von FeToMa. Die neue Seite ist keine 1:1-Kopie, sondern ein moderner Prototyp mit besserer Struktur und hochwertigerer Darstellung.

## App-Struktur

Die wichtigsten Dateien und Ordner sind:

~~~text
src/
  App.jsx
  main.jsx
  index.css
  components/
    Navbar.jsx
    SectionHeader.jsx
  data/
    landingContent.js
  layouts/
    MainLayout.jsx
  pages/
    Home.jsx
  assets/
~~~

### src/main.jsx

Startpunkt der React-App. Hier wird React in den DOM eingebunden und der BrowserRouter aktiviert.

### src/App.jsx

Definiert die Routen der App. Aktuell wird fuer / und alle unbekannten Routen die Home-Seite gerendert, damit der Prototyp immer den One-Pager zeigt.

### src/layouts/MainLayout.jsx

Gemeinsames Layout fuer die App. Es enthaelt die globale Navbar und den Inhaltsbereich.

### src/components/Navbar.jsx

Sticky Navigation mit Desktop-Menue und mobilem Burger-Menue. Die Links springen aktuell zu Sektionen innerhalb des One-Pagers.

### src/components/SectionHeader.jsx

Wiederverwendbare Komponente fuer Abschnittsueberschriften mit Eyebrow, Titel und Beschreibung.

### src/pages/Home.jsx

Die komplette Frontpage. Hier werden Hero, Leistungen, Equipment, Galerie, Ablauf, Reviews und CTA zusammengesetzt.

### src/data/landingContent.js

Strukturierte Inhalte fuer Leistungen, Equipment, Dekoration, Galerie, Prozessschritte und Bewertungen. Dadurch bleibt die Home-Komponente lesbarer und Inhalte koennen spaeter leichter angepasst werden.

### src/index.css

Globales Styling. Hier wird Tailwind importiert und die globale Dark-Theme-Basis gesetzt.

## App lokal starten

Voraussetzung: Node.js und npm muessen installiert sein.

1. In den Projektordner wechseln:

~~~bash
cd /home/daniboy/dev/codex_world/Fetoma_VT/fetoma-site
~~~

2. Dependencies installieren, falls noch nicht vorhanden:

~~~bash
npm install
~~~

3. Entwicklungsserver starten:

~~~bash
npm run dev
~~~

4. Die App im Browser oeffnen:

~~~text
http://localhost:5173/
~~~

Wenn Port 5173 belegt ist, zeigt Vite automatisch einen anderen lokalen Port im Terminal an.

## Build und Qualitaetspruefung

Produktionsbuild erstellen:

~~~bash
npm run build
~~~

Linting ausfuehren:

~~~bash
npm run lint
~~~

Beide Befehle wurden nach der Umsetzung erfolgreich ausgefuehrt.

## Hinweise fuer spaetere Anpassungen

- Die WhatsApp- und Telefonnummer in src/pages/Home.jsx sind aktuell Platzhalter und sollten durch echte Kontaktdaten ersetzt werden.
- Die verwendeten Bilder sind externe hochwertige Platzhalterbilder. Spaeter koennen echte FeToMa-Bilder in src/assets/ abgelegt und eingebunden werden.
- Die Struktur ist bereits fuer weitere Seiten vorbereitet, obwohl der aktuelle Stand bewusst als One-Pager-Prototyp umgesetzt ist.
