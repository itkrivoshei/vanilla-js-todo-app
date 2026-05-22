# Vanilla JS Todo App

A lightweight todo application built with HTML, CSS, and vanilla JavaScript.

The app keeps a focused scope: add tasks, mark them as completed, delete them, filter the list, and keep data saved in the browser with `localStorage`. It uses a simple static structure, accessible markup, responsive styling, and automated deployment with GitHub Actions.

## Live Demo

```text
https://itkrivoshei.github.io/vanilla-js-todo-app/
```

## Features

- Add new todo items
- Mark todos as completed or active
- Delete individual todos
- Filter by all, active, or completed items
- Clear all completed items
- Persist todos in the browser with `localStorage`
- Responsive layout for desktop and mobile screens
- Accessible form labels, semantic HTML, keyboard focus states, and live task count updates
- Static deployment to GitHub Pages with GitHub Actions

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
├── .github
│   └── workflows
│       └── deploy.yml
├── src
│   ├── scripts
│   │   └── app.js
│   └── styles
│       └── main.css
├── index.html
├── LICENSE
└── README.md
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/itkrivoshei/vanilla-js-todo-app.git
cd vanilla-js-todo-app
```

Open `index.html` directly in a browser, or serve the project locally:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

## Deployment

The project is deployed as a static site with GitHub Actions.

The workflow validates the required source files, uploads the repository as a GitHub Pages artifact, and deploys it after every push to `main`.

GitHub Pages should use this source:

```text
Settings → Pages → Source → GitHub Actions
```

## Notes

This project intentionally does not use a framework or build step. The goal is to keep the app small, readable, and easy to run while still using a clean source structure and automated deployment.

## License

This project is licensed under the GPL-3.0 License. See the `LICENSE` file for details.
