---
title: Contributing
---

## Development

We welcome you to join the development of `@blankapp/ui`. This document will help you through the process.

### Before You Start

Please follow the coding style:

- Follow [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).
- Use soft-tabs with a two space indent.

### Workflow

1. Fork [blankapp/ui](https://github.com/blankapp/ui)
2. Clone the repository to your computer and install dependencies.

    {% code %}
    $ git clone https://github.com/<username>/ui.git
    $ cd ui
    $ yarn install
    {% endcode %}

3. Create a feature branch.

    {% code %}
    $ git flow feature start <your feature>
    {% endcode %}

4. Start hacking.
5. Push the branch:

    {% code %}
    $ git flow feature publish <your feature>
    {% endcode %}

6. Create a pull request and describe the change.

### Notice

- Don't modify version number in `package.json`.
- Your pull request will only get merged when tests passed. Don't forget to run tests before submission.

    {% code %}
    $ yarn test && yarn lint
    {% endcode %}

## Updating Documentation

The `@blankapp/ui` documentation is open source and you can find the source code on `/ui/docs`.

### Workflow

1. Install [Hexo](https://hexo.io).
2. Change directory to `docs`, and install dependencies.

    {% code %}
    $ cd docs
    $ yarn install
    {% endcode %}

3. Start editing the documentation. You can start the server for live previewing.

    {% code %}
    $ hexo server
    {% endcode %}

4. Push the branch.
5. Create a pull request and describe the change.

### Translating

1. Add a new language folder in `source` folder. (All lower case)
2. Copy Markdown and template files in `source` folder to the new language folder.
3. Add the new language to `source/_data/language.yml`.
4. Copy `en.yml` in `themes/navy/languages` and rename to the language name (all lower case).

## Reporting Issues

When you encounter some problems when using, you can find the solutions in [Troubleshooting](troubleshooting.html) or ask me on [GitHub](https://github.com/hexojs/hexo/issues) or [Gitter](https://gitter.im/blankapp/ui). If you can't find the answer, please report it on GitHub.
