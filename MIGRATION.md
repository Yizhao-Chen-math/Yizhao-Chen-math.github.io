# al-folio v1.2 migration

This branch migrates the site from the copied pre-v1 template to the v1.2
starter and its independently versioned plugins.

- Original site commit: `14f671b94d60cb5e60c051683a2c4307d433b33b`.
- Starter release: `alshedivat/al-folio@v1.2`, commit
  `b95d6d61a1b0663529094b1b5f4fbe8aa41f8a04`.
- Main runtime: `al_folio_core 1.0.15`; dependency versions are recorded in
  `Gemfile` and `Gemfile.lock`.

## Preserved content and URLs

The 27 posts, five entries in the singular `teaching` collection, bibliography,
home page, publications route, personal images and PDFs remain in this repository.
Blog pagination stays at ten posts per page. The regression fixture
`test/site-routes.json` records 62 HTML/PDF paths from the pre-migration deployed
`gh-pages` commit `a7060ad212d748f60577833d25faa42e422c60d1`.

The teaching page uses site-owned responsive cards and preserves reverse date
ordering, optional categories and the existing `/teaching/` URLs. There is no
dependency on the starter's sample `_teachings` collection or calendar.

Template social-search links were replaced with the public email already on the
home page and this repository's GitHub username.

The CV now uses RenderCV YAML. Personal facts already present in the previous CV
and home page were carried over; unmodified Einstein example entries were omitted.
The CV remains outside the navigation. No CV PDF is generated automatically.

Two old link problems found during verification were repaired: the blog index
no longer links to configured tags/categories that have no posts, and the second
bibliographic entry in the convergence-theory post no longer becomes a malformed
Markdown reference destination. Post filenames, titles and URL paths are unchanged.

## Runtime and local customizations

Old copied layouts, includes, Sass, JavaScript, icon fonts and local helper plugins
are replaced by the gems. Personal image/PDF files are retained. No example posts,
projects or courses from the new starter were imported.

Intentional site-owned files:

- `_includes/teaching_cards.liquid`: teaching cards for `site.teaching`.
- `_sass/_site.scss`: compact blockquotes, icon-only search button and card styling.
- `assets/css/main.scss`: the core gem's Sass entry plus `@use "site"`.

The Sass entry is the sole override of a plugin-owned file and is acknowledged in
`.al-folio-overrides.yml`. Core Sass modules continue to load from the installed
theme. Bootstrap compatibility was used during migration and then disabled after
the custom teaching page was converted; its collapse CSS otherwise hid the v1
desktop navigation.

## Validation

With Ruby 3.3.13, Bundler 4.0.6, Node 22 and Python available:

```bash
bundle install
npm ci
python3 -m pip install -r requirements.txt
bundle exec al-folio upgrade audit
bundle exec al-folio upgrade overrides audit
JEKYLL_ENV=production bundle exec jekyll build
npx purgecss -c purgecss.config.js
bundle exec ruby test/check_site.rb
```

The check verifies the published route fixture, generated internal links and
runtime assets, canonical URLs, teaching card count/order, CV rendering and the
presence of MathJax. Browser checks also cover navigation, search, dark mode,
Chinese text, the sidebar contents list and actual MathJax rendering.

The upstream upgrade auditor reports 43 non-blocking `legacy_jquery_usage`
warnings. Each points to mathematical `$(` notation in existing Markdown, not
JavaScript. All were reviewed; no mathematical content was rewritten to silence
them. Blocking findings: zero. Unacknowledged overrides: zero.

The initial GitHub run found that Ubuntu 26.04 no longer offers Ruby 3.3.5.
The workflow and Docker runtime use the supported 3.3.13 patch release instead.

## Branch validation and publishing

The deployment workflow builds pushes to `main` and `update/v1.2`, and pull
requests targeting `main`. It runs both audits and the route/link regression
check, then saves the generated site and upgrade report as an Actions artifact.
Root-level PDF changes trigger the workflow as well.

Only a non-pull-request run on `main` can publish to `gh-pages`. Pushing this
migration branch does not publish the website. Template Docker-image publishing
workflows have been removed; the local Docker development files remain.

## Future updates

1. Review the new starter release notes and relevant plugin release notes.
2. Update exact gem pins in `Gemfile`; keep plugin activation in `_config.yml`
   consistent with dependencies. `bundle update` alone does not change exact pins.
3. Install/update the selected dependencies and commit the resulting lockfile.
4. Run both upgrade audits. If an override has drifted, review
   `bundle exec al-folio upgrade overrides diff assets/css/main.scss` before
   accepting it again. Do not accept changed upstream content without review.
5. Build, run the site regression check and preview the affected pages.
6. Merge the tested branch into `main` when ready to publish.

Use the [v1.2 installation guide](https://github.com/alshedivat/al-folio/blob/v1.2/docs/INSTALL.md)
and [customization guide](https://github.com/alshedivat/al-folio/blob/v1.2/docs/CUSTOMIZE.md)
for current instructions. The old root-level template guides predate this migration.
