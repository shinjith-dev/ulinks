# Contributing

If you would like to contribute by adding links, creating category/directory or developing a new feature,
you can use this suggested workflow:

- Fork this repository;
- Create a new feature branch based on the `main` branch;
- Install dependencies by using `npm`
- Implement your changes and ensure there are no typos or errors.
- Commit your changes (see the [committing guidelines]).
- Submit a PR for review.

[committing guidelines]: #committing

### Committing

We are applying [conventional commits] here.
In short, that means a commit has to be one of the following types:

- **feat**: A new feature.
- **fix**: A bug/typo fix.
- **refactor**: A code change that neither fixes a bug nor adds a feature.
- **chore**: Changes to the build process or auxiliary tools and libraries

If you are unfamiliar with the usage of conventional commits,
the short version is to simply specify the type as a first word,
and follow it with a colon and a space, then start your message
from a lowercase letter, like this:

```
feat: add filter
```

You can also specify the scope of the commit in the parentheses after a type:

```
fix(databases): add new databases
```

[conventional commits]: https://www.conventionalcommits.org/en/v1.0.0/


Thank you for contributing! :heart: