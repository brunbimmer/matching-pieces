# Contributing to Matching Pieces

Thanks for helping improve Matching Pieces. Contributions that make the prototype clearer, more accessible, and more useful to collectors are welcome.

## Before you start

- Search existing issues and pull requests before proposing a change.
- Open an issue before starting a large feature or significant visual redesign so the approach can be discussed.
- Keep changes focused. Unrelated fixes should be submitted separately.

## Development

This project uses plain HTML, CSS, and JavaScript and has no dependency installation or build step.

1. Fork and clone the repository.
2. Create a branch from `main` with a descriptive name.
3. Start a local server with `python3 -m http.server 8000`.
4. Make and verify your changes in a modern browser.

## Quality expectations

- Preserve the responsive experience at mobile and desktop widths.
- Use semantic HTML and provide accessible names or alternative text where needed.
- Keep JavaScript small, readable, and dependency-free unless a dependency is discussed first.
- Test changed interactions with both a pointer and keyboard.
- Reuse the existing visual language and CSS conventions.
- Do not commit generated files, editor settings, or operating-system metadata.

## Pull requests

In your pull request:

- Explain the problem and the chosen solution.
- Link any related issue.
- Include screenshots for visible interface changes.
- Describe how you tested the change.
- Confirm that the work is your own or that you have permission to contribute it under the MIT License.

Maintainers may request changes to keep the project focused and consistent. By contributing, you agree that your contribution is licensed under the repository's MIT License.

## Reporting problems

Use GitHub Issues for reproducible bugs and focused feature requests. Include browser and operating-system details, clear reproduction steps, the expected result, and the actual result. Please do not use public issues to disclose sensitive security problems.
