# muratoney.github.io

Personal portfolio of Murat Oney: software engineer and founder of
Distill Software LLC ([studydistill.com](https://studydistill.com)).

Live at [muratoney.github.io](https://muratoney.github.io/).

## Stack

Hand-built static site: plain HTML, CSS, and a little vanilla JavaScript.
No framework, no build step, no trackers. GitHub Pages serves the `main`
branch root directly.

- `index.html` — the whole site (single page)
- `styles.css` — paper-and-ink theme shared with Distill's brand
- `script.js` — nav state, mobile menu, scroll reveals
- `resume.pdf` — current resume
- `public/images/photography/` — photo archive from the previous site,
  kept in the repo but not linked from the current page

## Local development

Open `index.html` in a browser, or serve the folder:

```
python -m http.server 8000
```

The photography archive is excluded from the working tree with git
sparse-checkout to keep local clones light; the files still exist in the
repository.
