# Vanilla JS Todo App

[![Deploy](https://img.shields.io/github/actions/workflow/status/itkrivoshei/vanilla-js-todo-app/deploy.yml?branch=main&style=flat-square&label=deploy)](https://github.com/itkrivoshei/vanilla-js-todo-app/actions/workflows/deploy.yml)
[![License: GPL-3.0](https://img.shields.io/badge/license-GPL--3.0-blue?style=flat-square)](./LICENSE)

A small static todo app built with HTML, CSS, and vanilla JavaScript with browser `localStorage` persistence.

## Tech stack

- HTML
- CSS
- Vanilla JavaScript
- LocalStorage API
- GitHub Actions
- GitHub Pages

## Scope

- Add, complete, delete, and filter todo items
- Clear completed items
- Persist data in the browser
- Run without a framework or build step
- Deploy as a static site through GitHub Pages

## Live demo

```text
https://itkrivoshei.github.io/vanilla-js-todo-app/
```

## Getting started

Clone the repository:

```bash
git clone https://github.com/itkrivoshei/vanilla-js-todo-app.git
cd vanilla-js-todo-app
```

No dependency installation is required for the app itself.

## Commands

| Command | Description |
| --- | --- |
| `npm run check` | Verify required static files and local asset references. |
| `npm start` | Serve the app locally on port `4173` with Python's static server. |

Open after starting the local server:

```text
http://localhost:4173
```

There is no build command. The repository is deployed as static files.

## Project structure

```text
.
├── .github/workflows/deploy.yml
├── scripts/check-static-files.js
├── src
│   ├── scripts/app.js
│   └── styles/main.css
├── index.html
├── package.json
├── LICENSE
└── README.md
```

## Deployment

GitHub Actions validates the static files, prepares a small Pages artifact, and deploys it to GitHub Pages on pushes to `main`.

Required GitHub Pages setting:

```text
Settings → Pages → Source → GitHub Actions
```

## License

This project is licensed under the [GPL-3.0 License](./LICENSE).
