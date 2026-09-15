# Markdown-Note-taking-App
A RESTful Markdown note-taking application that allows users to create, upload, save, and view notes written in Markdown. The application processes Markdown content, checks the grammar of notes, stores Markdown files, and converts Markdown into HTML for rendering.

## Features

- Upload Markdown (`.md`) files.
- Save notes as Markdown text.
- Check the grammar of notes.
- List all saved notes.
- Retrieve individual notes.
- Convert Markdown content into HTML.
- Render Markdown notes as HTML.
- RESTful API architecture.
- Input validation and structured error handling.

## Tech Stack

### Backend

- Node.js
- Express.js
- REST API
- JavaScript

### Markdown Processing

- Markdown parser
- Markdown-to-HTML rendering library

### Other Tools

- Postman
- Git
- GitHub

## System Architecture

```text
                Client
                  |
                  | HTTP Request
                  v
          Node.js + Express.js
                  |
        +---------+---------+
        |         |         |
        v         v         v
    Grammar     Notes     Markdown
     Check     Storage    Renderer
        |         |         |
        +---------+---------+
                  |
                  v
             API Response
                  |
                  v
               Client
