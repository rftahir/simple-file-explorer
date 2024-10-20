# Explorer REST API

This is simple folder and file explorer API.

## Prerequisite

To run this application, you need to have the following installed on your local machine:

- NodeJs v18.19.0
- MySQL latest

## Installation

### 1. Copy Environment Variables

Create a .env file from the example configuration:

```bash
cp .env.example .env
```

### 2. Install Package

Install the necessary packages:

```bash
yarn
```

or

```bash
npm install
```

### 3. Run Migration & Seeder

```bash
npx prisma migrate dev
```

then run seeder using:

```bash
yarn seed
```

Or

```bash
npm run seed
```

## 4. Running Application

Start the application in development mode:

```bash
yarn dev
```

or

```bash
npm run dev
```
