# Drizzle-ORM-Postgres

challenge 1 - I fully commit in learn_in_public challenge for this month. This project includes drizzle which is relatively new database ORM that aims to solve many of the problems with existing ORMs by being more flexible and performant.

![Poster](screenshot/image.png)

## What is Drizzle ORM ?

Drizzle ORM is a lightweight, type-safe ORM (Object Relational Mapper) made mainly for TypeScript and JavaScript projects.

It lets you work with SQL databases (like PostgreSQL, MySQL, SQLite) using TypeScript while keeping full type safety.

✅ What it does:

- Connects your app to a database
- Lets you define database tables using TypeScript
- Helps you write type-safe queries
- Works great with Node.js, Next.js, Express, etc.

## What is drizzle-kit?

drizzle-kit is a CLI (Command Line Tool) used together with Drizzle ORM.

✅It helps you manage:

- Database migrations
- Schema generation
- SQL file generation
- Pushing schema changes to database

## Requirements

Make sure you have the following installed before starting:

- **Node.js** >= 22.x

- **Node.js** >= 22.x

```bash
    node --version
    v22.14.0
```

- **npm** >= 10.x

```bash
    npm --version
    10.9.2
```

## Getting Started

### 1. Clone the repo

```bash
    git clone https://github.com/ThanThar-collab/Drizzle-ORM-Postgres.git
    cd Drizzle-ORM-Postgres
```

### 2. Install dependencies

```bash
    npm install
```

### 3. Install Dependencies

```bash
    npm i drizzle-orm@0.45.1
```

```bash
    npm i drizzle-kit@0.31.9
```

install postgrel drivers

```bash
    npm i pg@8.19.0
```

## Drizzle CLI

```bash
    npx drizzle-kit generate
    npx drizzle-kit drop
    npx drizzle-kit push
    npx drizzle-kit studio
```

but in this project, just run:

- run main.ts

```bash
    npm run dev
```

- generate database in migrations folder

```bash
    npm run db:generate
```
