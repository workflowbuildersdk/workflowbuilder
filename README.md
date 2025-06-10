# Workflow Builder

## Table of Contents

<ol>
  <li>
    <a href="#about-the-project">About The Project</a>
    <ul>
      <li><a href="#technical-overview">Technical Overview</a></li>
    </ul>
  </li>
  <li>
    <a href="#getting-started">Getting started</a>
    <ul>
      <li><a href="#prerequisites">Prerequisites</a></li>
      <li><a href="#installation">Installation</a></li>
    </ul>
  </li>
  <li>
    <a href="#decision-logs">Decision Logs</a>
  </li>
</ol>

## <a name="about-the-project">About The Project</a>

Monorepo of [Workflow Builder](https://www.workflowbuilder.io/) - a white-label template tailored for development of workflow based apps.

### <a name="technical-overview">Technical Overview</a>

Using `pnpm workspaces` Workflow Builder is split into packages placed in `apps/` directory:

- [`frontend`](./apps/frontend/README.md) - React app containing the core functionality of Workflow Builder
- [`frontend-e2e`](./apps/frontend-e2e/README.md) - E2E tests for the frontend
- [`types`](./apps/types/README.md) - Shared Typescript definitions for the project
- [`icons`](./apps/icons/README.md) - Lazy-loadable, extensible icons

## <a name="getting-started">Getting Started</a>

### <a name="prerequisites">Prerequisites</a>

You'll need `node` and `pnpm` with proper versions set in the root `package.json` and `.npmrc` file.

### <a name="installation">Installation</a>

1. Clone the repo
2. Install packages from the root directory
   `pnpm i`
3. To start the app, run
   `pnpm dev`

## <a name="decision-logs">Decision Logs</a>

To document technical choices and provide an overview of reasoning behind them, the repo contains `*.decision-log.md` files that live along the code and packages their related to. See individual decision logs for more details:

- [Using Web Components for Framework-Agnostic Integration](./apps/frontend/src/web-component-wrapper.decision-log.md)
- [Dynamic form generation for properties sidebar](./apps/frontend/src/app/features/json-form/form-generation.decision-log.md)
- [Lazy loaded SVG icon mechanism 04-03-2025](./apps/icons/lazy-loaded-icons-04-03-2025.decision-log.md)
- [Lazy loaded SVG icon mechanism 08-04-2025](./apps/icons/lazy-loaded-icons-08-04-2025.decision-log.md)
- [Translation system](./apps/frontend/src/app/i18n/i18next.decision-log.md)
- [Selection State Management](./apps/frontend/src/app/features/properties-bar/selection.decison-log.md)

## <a name="links">Links</a>

- [Product landing page](https://www.workflowbuilder.io/)
- [Publicly available web app](https://app.workflowbuilder.io/)