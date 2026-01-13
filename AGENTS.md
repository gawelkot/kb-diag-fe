# Repository Guidelines

## Project Structure and Module Organization
- `src/app/`: Angular components, services, and feature modules (core UI lives here).
- `src/assets/`: Static assets (images, icons, data files).
- `src/environments/`: Environment configs for build targets.
- `src/styles.scss`: Global styles and theme imports.
- `angular.json`: Workspace and build configuration.

## Build, Test, and Development Commands
- `npm install`: Install dependencies.
- `npm run start`: Run the dev server (Angular CLI) at `http://localhost:4200`.
- `npm run build`: Build the production bundle into `dist/`.
- `npm run watch`: Rebuild on file changes using the development configuration.
- `npm run test`: Run unit tests with Karma and Jasmine.

## Coding Style and Naming Conventions
- TypeScript and Angular style: classes in `PascalCase`, methods/fields in `camelCase`.
- Indentation follows existing files (2 spaces) with semicolons.
- Match the local file style for quotes and spacing when editing.
- Prefer Angular CLI generators when creating new components/services:
  - `ng generate component feature-name`
  - `ng generate service shared/service-name`

## Testing Guidelines
- Frameworks: Jasmine + Karma.
- Test files live alongside code and use the `*.spec.ts` suffix (e.g., `src/app/app.component.spec.ts`).
- Aim to cover new components/services with unit tests; no coverage threshold is enforced yet.
- Run all tests with `npm run test` before opening a PR.

## Commit and Pull Request Guidelines
- Commit history is small and informal (e.g., "initial commit", "basic app ...").
- Use short, imperative commit messages that describe the change.
- PRs should include:
  - A clear description of what changed and why.
  - Linked issue or context (if available).
  - Screenshots for UI changes (before/after when relevant).

## Configuration Tips
- Environment-specific settings belong in `src/environments/`.
- PrimeNG/PrimeFlex are in use; prefer consistent component styling and utilities.
