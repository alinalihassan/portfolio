# Alin Ali Hassan Portfolio
[![Build](https://img.shields.io/github/workflow/status/alinalihassan/portfolio/CI)](https://github.com/alinalihassan/portfolio/actions?event=push)
[![Release](https://img.shields.io/github/v/release/alinalihassan/portfolio)](https://github.com/alinalihassan/portfolio)
[![License](https://img.shields.io/github/license/alinalihassan/portfolio)](LICENSE)
[![Code Size](https://img.shields.io/github/languages/code-size/alinalihassan/portfolio)](https://github.com/alinalihassan/portfolio)

Credit to @jakeherp for the huge amount of work on his portfolio. I've decided to fork his repository to use it as a base of my portfolio to learn more about [Next.js](https://nextjs.org).

## 🛠️ Build

The project uses [NodeJS](https://nodejs.org) and [Yarn](https://yarnpkg.com).

```bash
git clone https://github.com/alinalihassan/portfolio
cd portfolio
yarn
```

## 🔬 Usage

To run the server locally, run:

```bash
yarn run dev
```

To build and run in production:

```bash
yarn build
yarn start
```

Or you can use the Dockerfile included:

```bash
docker build -t portfolio .
docker run portfolio
```

## 🚀 Deploy

Repository contains the [Terraform](https://www.terraform.io/) source used in deploying this to GCP. The existing GitHub Actions workflow takes care of deploy and updating the Terraform infrastructure. You can just replace the secrets used GitHub Actions with your own. Follow the documentation from each Github Action repository if one of the secrets' content is unclear.

```yaml
APP_NAME
GCLOUD_PROJECT_ID
GCLOUD_REGION
GCLOUD_REGISTRY_URL
GCLOUD_SERVICE_KEY
TF_API_TOKEN
```

## License

[MIT](LICENSE) © Alin Ali Hassan