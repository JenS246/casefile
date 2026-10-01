# CASEFILE

CASEFILE is a browser-based typing game for paralegal students in a Civil Litigation course. Students type through realistic short documents, follow a case from intake to closing, and pause for occasional checks of names, dates, amounts, and inconsistencies.

## How it works

- Choose one of four fictional civil matters or let the game select one at random.
- Each playthrough generates a coherent set of facts before the first document opens.
- Type each document. Session accuracy and active typing time update continuously.
- On phones and tablets, tap the document text to open the on-screen keyboard.
- End a practice session at any point and keep a valid session result.
- End-of-session results include accuracy, standard five-character WPM, characters typed, and active typing time.
- Continue a partially typed document later from the next unfinished paragraph; progress is stored only in that browser.
- Press Tab and then Enter while typing to restart the current session.
- Complete two or three short File Checks during the matter.
- Replay the same matter to receive a new but internally consistent fact pattern.

The app stores document progress locally in the browser, uses no backend, and has no third-party runtime dependencies.

## Run locally

From this directory:

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## Files

- `index.html`: document shell and metadata
- `styles.css`: responsive visual system with light and dark color schemes
- `app.js`: case data, fact generation, typing engine, local progress, File Checks, and session/document results

## Deployment

This is a static site and can be hosted on GitHub Pages. The included workflow publishes the repository root on every push to `main`.

Once Pages is enabled for GitHub Actions, the public URL is:

`https://jens246.github.io/casefile/`
