<div align="center">

# Vanilla JS Todo App

Zero-framework todo list with localStorage persistence, static validation, and GitHub Pages deployment.

[![Live app](https://img.shields.io/badge/live-GitHub%20Pages-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white)](https://itkrivoshei.github.io/vanilla-js-todo-app/)
[![CI](https://img.shields.io/github/actions/workflow/status/itkrivoshei/vanilla-js-todo-app/ci.yml?branch=main&style=for-the-badge&label=ci&logo=githubactions&logoColor=white)](https://github.com/itkrivoshei/vanilla-js-todo-app/actions/workflows/ci.yml)
[![Deploy](https://img.shields.io/github/actions/workflow/status/itkrivoshei/vanilla-js-todo-app/deploy.yml?branch=main&style=for-the-badge&label=deploy&logo=githubactions&logoColor=white)](https://github.com/itkrivoshei/vanilla-js-todo-app/actions/workflows/deploy.yml)
[![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-f7df1e?style=for-the-badge&logo=javascript&logoColor=000)](src/scripts/app.js)
[![License](https://img.shields.io/badge/license-GPL--3.0-blue?style=for-the-badge)](LICENSE)

### [Open Live App ->](https://itkrivoshei.github.io/vanilla-js-todo-app/)

</div>

## Features

- Add, complete, delete, and filter tasks.
- Clear completed tasks.
- Persist data in browser `localStorage`.
- Animate item removal.
- Keep a static deployment artifact in `.site/`.
- Validate required static files before deployment.

## Run Locally

```bash
git clone https://github.com/itkrivoshei/vanilla-js-todo-app.git
cd vanilla-js-todo-app
npm ci
npm start
```

Open `http://localhost:4173`.

## Project Shape

```text
index.html
favicon.svg
src/
├── scripts/app.js
└── styles/main.css
scripts/
├── build-pages-artifact.js
└── check-static-files.js
```

## NPM Scripts

| Command | Description |
| --- | --- |
| `npm run check` | Validate required files and asset references |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Apply ESLint fixes |
| `npm run format` | Format HTML, CSS, JS, workflows, and config |
| `npm run format:check` | Check formatting |
| `npm run build` | Generate `.site/` for GitHub Pages |
| `npm run verify` | Run check, lint, format-check, and build |
| `npm start` | Serve the repository with Python on port `4173` |

## Deployment

`Static CI` validates the app on pushes and pull requests to `main`. `Deploy to GitHub Pages` runs on pushes to `main`, builds `.site/`, and publishes that artifact through GitHub Pages.

Live app: https://itkrivoshei.github.io/vanilla-js-todo-app/

## License

[GPL-3.0](LICENSE)
