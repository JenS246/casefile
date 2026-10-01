# CASEFILE

CASEFILE is a browser-based typing game for paralegal students in a Civil Litigation course. Students type through realistic short documents, follow a case from intake to closing, and pause for occasional checks of names, dates, amounts, and inconsistencies.

## How it works

- Choose one of four fictional civil matters or let the game select one at random.
- Each playthrough generates a coherent set of facts before the first document opens.
- Type each document. Errors remain visible until corrected.
- Complete two or three short File Checks during the matter.
- Replay the same matter to receive a new but internally consistent fact pattern.

The app stores no personal data, uses no backend, and has no third-party runtime dependencies.

## Run locally

From this directory:

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## Files

- `index.html`: document shell and metadata
- `styles.css`: responsive visual system with light and dark color schemes
- `app.js`: case data, fact generation, typing engine, File Checks, and results

## Deployment

This is a static site and can be hosted on GitHub Pages. The included workflow publishes the repository root on every push to `main`.

Once Pages is enabled for GitHub Actions, the public URL is:

`https://jens246.github.io/casefile/`

