<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description
This application was created to review the basic concepts of Nest with TypeScript. The following skills were covered:
- Module creation.
- Dependency injection.
- Creation of DTOs and validations.
- Dependency injection between modules.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Available routes within the application:
- Cars
    - / -> Get
    - /{id} -> Get
    - / -> Post
    - /{id} -> Patch
    - /{id} -> Delete
- Brands
    - / -> Get
    - /{id} -> Get
    - / -> Post
    - /{id} -> Patch
    - /{id} -> Delete
- Seed
    - / -> Get

