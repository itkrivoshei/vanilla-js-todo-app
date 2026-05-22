# Vanilla JS Todo App

A lightweight todo application built with HTML, CSS, and vanilla JavaScript.

The project keeps the original simple idea: add tasks, mark them as completed, delete them, and persist the list in the browser with `localStorage`. It has been refreshed with a more modern interface, better accessibility, cleaner state management, and automated GitHub Pages deployment.

## Live Demo

```text
https://itkrivoshei.github.io/vanilla-js-todo-app/
```

## Features

- Add, complete, delete, and filter todos
- Clear completed tasks
- Local browser persistence with `localStorage`
- Responsive modern UI
- Accessible labels, focus states, and semantic structure
- No framework and no build step
- Automatic deployment to GitHub Pages with GitHub Actions

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- LocalStorage API
- GitHub Actions
- GitHub Pages

## Project Structure

```text
.
├── .github/workflows/deploy.yml
├── index.html
├── style.css
├── app.js
├── LICENSE
└── README.md
```

## Local Usage

Clone the repository:

```bash
git clone https://github.com/itkrivoshei/vanilla-js-todo-app.git
cd vanilla-js-todo-app
```

Open `index.html` in a browser, or use any static server:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

## Deployment

The project deploys automatically through GitHub Actions after every push to `main`.

Required GitHub Pages setting:

```text
Settings → Pages → Source → GitHub Actions
```

## Repository Status

This is a refreshed legacy portfolio project. The goal is to preserve the original small vanilla JavaScript concept while making the repository cleaner, more presentable, and easier to maintain.

## License

This project is licensed under the GPL-3.0 License. See the `LICENSE` file for details.
