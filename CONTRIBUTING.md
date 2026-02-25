# Contributing Guidelines

This repository contains the official production website for Sturrock's HVAC Solutions.

This project follows a disciplined issue → branch → PR → merge workflow.

---

## Branch Strategy

- `main` → Production branch (protected)
- All work must occur in feature branches

Branch naming:

- `feature/<slug>`
- `fix/<slug>`
- `refactor/<slug>`
- `chore/<slug>`

Examples:

feature/trusted-brands-refactor  
fix/modal-scroll-lock  
refactor/gradient-divider-component  

No direct commits to `main`.

---

## Workflow

1. Create a GitHub Issue
2. Create a branch from `main`
3. Implement changes
4. Open Pull Request
5. Reference the Issue in the PR (`Closes #<issue-number>`)
6. Ensure CI passes
7. Merge to `main`

Production deployment is triggered via CI.

---

## Commit Message Standard

Use conventional-style commits:

- `feat: add dynamic service type dropdown`
- `fix: correct modal CTA routing`
- `refactor: extract GradientDivider component`
- `chore: update dependencies`
- `docs: update roadmap`

Keep commits atomic and descriptive.

---

## Versioning

Semantic versioning:

- MAJOR → structural or architectural changes
- MINOR → feature additions
- PATCH → bug fixes or refinements

Example:
v1.2.0

Version bumps occur at milestone completion.

---

## Deployment Policy

- No manual production deploys from local machines
- All production deploys occur via CI
- `main` must remain deployable at all times

---

## Code Standards

- TypeScript strict mode
- No `any` types without justification
- Reusable components preferred over duplication
- Follow existing Tailwind design system

---

© Sturrock's HVAC Solutions