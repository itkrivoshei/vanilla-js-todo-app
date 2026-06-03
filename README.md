<div align="center">

# Vanilla JS Todo App

Zero-framework todo list with `localStorage` persistence, static validation, and GitHub Pages deployment.

[![Live app](https://img.shields.io/badge/live-app-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white&labelColor=0f172a)](https://itkrivoshei.github.io/vanilla-js-todo-app/)
[![CI](https://img.shields.io/github/actions/workflow/status/itkrivoshei/vanilla-js-todo-app/ci.yml?branch=main&style=for-the-badge&label=ci&logo=githubactions&logoColor=white&labelColor=0f172a)](https://github.com/itkrivoshei/vanilla-js-todo-app/actions/workflows/ci.yml)
[![Deploy](https://img.shields.io/github/actions/workflow/status/itkrivoshei/vanilla-js-todo-app/deploy.yml?branch=main&style=for-the-badge&label=deploy&logo=githubactions&logoColor=white&labelColor=0f172a)](https://github.com/itkrivoshei/vanilla-js-todo-app/actions/workflows/deploy.yml)
[![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-f7df1e?style=for-the-badge&logo=javascript&logoColor=000&labelColor=0f172a)](src/scripts/app.js)
[![License](https://img.shields.io/github/license/itkrivoshei/vanilla-js-todo-app?style=for-the-badge&labelColor=0f172a)](LICENSE)

</div>

## Overview

A static JavaScript todo application focused on simple browser state management, local persistence, validation, and automated GitHub Pages delivery.

## Features

- Add, complete, delete, and filter tasks.
- Clear completed tasks.
- Persist tasks in browser `localStorage`.
- Animate item removal.
- Generate a static deployment artifact in `.site/`.
- Validate required static files before deployment.

## Tech Stack

| Area        | Tools                                                                        |
| ----------- | ---------------------------------------------------------------------------- |
| Language    | [Vanilla JavaScript](src/scripts/app.js)                                     |
| Styling     | [CSS](src/styles/main.css)                                                   |
| Markup      | [HTML](index.html)                                                           |
| Persistence | Browser `localStorage`                                                       |
| Checks      | ESLint, Prettier, static file validation                                     |
| Hosting     | [GitHub Pages](https://itkrivoshei.github.io/vanilla-js-todo-app/)           |
| Automation  | [GitHub Actions](https://github.com/itkrivoshei/vanilla-js-todo-app/actions) |

## Run Locally

```bash
git clone https://github.com/itkrivoshei/vanilla-js-todo-app.git
cd vanilla-js-todo-app
npm ci
npm start
```

Open `http://localhost:4173`.

## Project Structure

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

## Scripts

Scripts are defined in [`package.json`](package.json).

| Command                | Description                                     |
| ---------------------- | ----------------------------------------------- |
| `npm run check`        | Validate required files and asset references    |
| `npm run lint`         | Run ESLint                                      |
| `npm run lint:fix`     | Apply ESLint fixes                              |
| `npm run format`       | Format HTML, CSS, JS, workflows, and config     |
| `npm run format:check` | Check formatting                                |
| `npm run build`        | Generate `.site/` for GitHub Pages              |
| `npm run verify`       | Run check, lint, format-check, and build        |
| `npm start`            | Serve the repository with Python on port `4173` |

## Deployment

- [`.github/workflows/ci.yml`](.github/workflows/ci.yml) validates the app on pushes and pull requests to `main`.
- [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds `.site/` and publishes it to [GitHub Pages](https://itkrivoshei.github.io/vanilla-js-todo-app/) on pushes to `main`.

## License

[GPL-3.0](LICENSE)
