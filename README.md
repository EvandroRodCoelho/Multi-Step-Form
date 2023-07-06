# Multi-Step-Form

## Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Installation](#installation)
- [Web Commands](#web-commands)
- [Backend Commands](#backend-commands)
- [Contribution](#contribution)

## Overview

The project consists of a login page, a multi-step registration page, a dashboard page to display user information, and options to log out or delete the account.

### Project Pages

- Login Page: Allows users to log in to the application.
- Registration Page: A multi-step registration page with the following steps:
  1. User Information: Users provide their personal information in this step.
  2. Address Information: Users can enter a ZIP code, which will integrate with the ViaCEP API to automatically populate the remaining address fields.
  3. Social Step: Users have the option to add LinkedIn and GitHub links.

- Dashboard Page: Displays user information and provides the option to log out or delete the account.
## Technologies

### Front-end

- React.js
- TypeScript
- React Router Dom
- Tailwind CSS
- React Hook Form
- Zod
- Testing Library
- Vite

### Back-end

- Node.js
- Fastify
- Zod
- Prisma ORM
- Vite

## Installation

1. Clone the repository: `git clone https://github.com/EvandroRodCoelho/Multi-Step-Form.git`
2. Navigate to the project directory: `cd web` and `cd server`
3. Install the dependencies: `npm install`



## Web Commands

- `dev`: Start the development server using Vite.
- `build`: Build the project using TypeScript and Vite.
- `lint`: Run ESLint on the `src` directory to check for linting issues.
- `preview`: Preview the built project using Vite.
- `host`: Start the Vite server with a custom host.

## Backend Commands

- `test`: Run tests using Vitest.
- `dev`: Start the development server using `tsx watch src/serve.ts`.
- `vercel-build`: Deploy migrations using Prisma with `npx prisma migrate deploy`.
- `build`: Build the project using `tsup` on the `src` directory.
- `start`: Start the server using `node dist/serve.js`.

## Contribution

Contributions are welcome! Feel free to open an issue or submit a pull request.
