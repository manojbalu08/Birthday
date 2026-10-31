# Happy Birthday, Ramya 💖

A birthday website for Ramya: an opening gift box, a heart made of 46 of her photos, a Tamil storybook, memories with kavithai, a love letter, a birthday surprise and a final message, with "Kalla Nikkiriye" playing in the background.

Plain HTML, CSS and JavaScript: no build step, no framework, no database.

## Run it

Open `index.html` in a browser, or serve the folder (needed for the music on some browsers):

```
python -m http.server 8000
```

then visit http://localhost:8000.

Jump straight to a step: `index.html#memories`, `#letter`, `#surprise`, `#final`. Add `?intro=0` to skip the opening.

## Folders

```
index.html              the page
css/style.css           all styles (plum & gold theme)
js/main.js              all behaviour; the words and photo lists are at the top
assets/
  images/ramya/         her photos (full size) + thumbs/ (lighter copies for the cards)
  images/mosaic/        the 46 photos of the home heart + big/ (sharp copies shown on tap/hover)
  images/memories/      final-photo.jpg, hands.jpg
  music/                kalla-nikkiriye.mp3
```

## Change the words or photos

Edit the `MEMORIES`, `STORY`, `LETTER`, `SURPRISE` and `FINAL` blocks at the top of `js/main.js`.

## Hosting

It is a static site, so any static host works: GitHub Pages (Settings → Pages → Deploy from branch → `main` / root), Netlify or Cloudflare Pages.
