# Michela D'Urso — Personal Site

Personal portfolio of Michela D'Urso, Product Designer & Builder based in Milan.

Static site, no build step. Deploy via GitHub Pages.

## Structure

```
.
├── index.html                  # Homepage — intro + selected work timeline
├── resume.html                 # Resume page
├── projects/
│   ├── ai-native-payroll.html
│   ├── longterm-care-startup.html
│   ├── dipendenti-in-cloud.html
│   ├── teamsystem-hr.html
│   ├── cnh-lms.html
│   ├── albertina.html
│   └── nicer.html
├── assets/
│   ├── css/style.css
│   ├── images/                 # (project images go here)
│   └── Michela_DUrso_CV_2026.pdf
└── README.md
```

## Local preview

Open `index.html` directly in a browser, or run a quick local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy on GitHub Pages

1. Push this folder to a GitHub repo (e.g. `michipepper.github.io` for a user site, or any repo name for a project site).
2. In repo Settings → Pages → set source to `main` branch, root folder.
3. Wait a minute, then visit `https://<your-username>.github.io/`.

## Editing

All content lives in plain HTML files. Edit them with any editor. Run `git commit && git push` to redeploy.
