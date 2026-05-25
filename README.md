# Vanilla JS Todo App

[![Static CI](https://img.shields.io/github/actions/workflow/status/itkrivoshei/vanilla-js-todo-app/ci.yml?branch=main&style=flat-square&label=ci)](https://github.com/itkrivoshei/vanilla-js-todo-app/actions/workflows/ci.yml)
[![Deploy](https://img.shields.io/github/actions/workflow/status/itkrivoshei/vanilla-js-todo-app/deploy.yml?branch=main&style=flat-square&label=deploy)](https://github.com/itkrivoshei/vanilla-js-todo-app/actions/workflows/deploy.yml)
[![License: GPL-3.0](https://img.shields.io/badge/license-GPL--3.0-blue?style=flat-square)](LICENSE)

A small static todo app built with HTML, CSS, and vanilla JavaScript.

Live demo: [itkrivoshei.github.io/vanilla-js-todo-app](https://itkrivoshei.github.io/vanilla-js-todo-app/)

## Features

- Add, complete, delete, and filter todo items
- Clear completed items
- Persist todos in browser `localStorage`
- Run as a static site without a framework
- Validate static files, linting, formatting, and Pages artifact generation in CI

## Tech Stack

| Area | Tools |
|---|---|
| UI | HTML, CSS, vanilla JavaScript |
| Storage | Browser `localStorage` |
| Linting / formatting | ESLint, Prettier |
| CI/CD | GitHub Actions, GitHub Pages |
| Dependency updates | Dependabot |

## Install

```bash
git clone git@github.com:itkrivoshei/vanilla-js-todo-app.git
cd vanilla-js-todo-app
npm ci
```

## Run

```bash
npm start
```

Open:

```text
http://localhost:4173
```

## Verify

Run all local checks:

```bash
npm run verify
```

Useful commands:

| Command | Description |
|---|---|
| `npm run check` | Validate required static files and asset references |
| `npm run lint` | Run ESLint |
| `npm run format:check` | Check formatting with Prettier |
| `npm run build` | Generate the GitHub Pages artifact in `.site/` |
| `npm start` | Serve the app locally |

## CI/CD

`Static CI` runs on pushes and pull requests to `main`. It validates dependency installation, static file references, ESLint, Prettier, and Pages artifact generation.

`Deploy to GitHub Pages` runs on pushes to `main` and publishes the generated `.site/` artifact. Dependabot checks npm and GitHub Actions dependencies weekly and is auto-merged after successful CI.

## Project Files

| File | Purpose |
|---|---|
| [`index.html`](index.html) | Static app entry point |
| [`src/scripts/app.js`](src/scripts/app.js) | Todo logic and `localStorage` persistence |
| [`src/styles/main.css`](src/styles/main.css) | App styles |
| [`scripts/check-static-files.js`](scripts/check-static-files.js) | Static file validation |
| [`scripts/build-pages-artifact.js`](scripts/build-pages-artifact.js) | GitHub Pages artifact builder |
| [`eslint.config.mjs`](eslint.config.mjs) | ESLint flat config |
| [`package.json`](package.json) | npm scripts and dev tooling |
| [`.github/workflows/ci.yml`](.github/workflows/ci.yml) | Static CI workflow |
| [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) | GitHub Pages deployment workflow |
| [`.github/dependabot.yml`](.github/dependabot.yml) | Weekly dependency updates |
| [`LICENSE`](LICENSE) | GPL-3.0 license |

## License

This project is licensed under the [GPL-3.0 License](LICENSE).
