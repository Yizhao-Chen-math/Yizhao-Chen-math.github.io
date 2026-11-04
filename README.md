# Yizhao Chen's personal website

Source for <https://Yizhao-Chen-math.github.io>, built with Jekyll and the
[al-folio v1.2 starter](https://github.com/alshedivat/al-folio/releases/tag/v1.2).
The theme runtime is supplied by versioned gems, rather than copied theme files.

## Content

- `_pages/`: home, blog index, publications, teaching and other pages.
- `_posts/`: blog posts; existing filenames preserve their public URLs.
- `_teaching/`: course pages and lecture-note index (singular collection name).
- `_bibliography/papers.bib`: publications.
- `_data/cv.yml`: RenderCV-format CV data.
- `assets/pdf/` and `assets/img/`: downloads and images.
- `_config.yml`: site settings and plugin activation.

## Local preview

Docker provides the local Ruby/Python environment:

```bash
docker compose up --build
```

Open <http://localhost:8080/>. For a native environment, use Ruby 3.3.13 and
Bundler 4.0.6, install `Gemfile` and `requirements.txt`, then run
`bundle exec jekyll serve`.

## Updates and publishing

See [MIGRATION.md](MIGRATION.md) for the migration record, exact validation
commands and future update procedure. Both `Gemfile` and `_config.yml` must be
updated when plugin dependencies change.

GitHub Actions builds the `update/v1.2` branch for review and uploads a site
artifact. Only runs on `main` publish the website to `gh-pages`.

The customized blockquote/search styling lives in `_sass/_site.scss`.
The reviewed Sass-entry override is tracked in `.al-folio-overrides.yml`.
