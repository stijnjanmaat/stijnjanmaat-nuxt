# stijnjanmaat.nl on Nuxt 3 Beta 

We recommend to look at the [Nuxt 3 documentation](https://v3.nuxtjs.org).

## Setup

Make sure to install the dependencies

```bash
yarn install
```

Create `.env` based on `.env.example`. 

[Mailgun](https://www.mailgun.com/) credentials are required to deliver mail sent from the contact form.

## Development

Start the development server on http://localhost:3344

```bash
yarn dev -o
```

Convenient push and deploy to Heroku:

```bash
make push
```

### Build & test

Build and test in one command:

```bash
make build-test
```

## Production

Build the application for production:

```bash
yarn build
```
