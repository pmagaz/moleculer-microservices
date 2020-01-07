# Moleculer Microservices and Typescript 

This repository is an example of Microservices using [Moleculer](https://moleculer.services/), [Nats](https://nats.io/) messaging system and [Typescript](https://www.typescriptlang.org/).

## Table of contents

1. [Installation](#installation)
2. [Configuration](#configuration)
3. [Launching Server](#launching)
5. [Architecture](#architecture)

## Installation

Clone this repo and run

```
$ npm install OR yarn install
```

## Configuration

Configuration is located in .env folder. This file is passed to Moleculer runner on server start. Check [Broker](https://moleculer.services/docs/0.13/broker.html) documentacion for all configuration options.

## Launching

First of all you have to launch the server with the following command:

```
$ yarn start
```

This will launch all Microservices located in src/services in `http://localhost:8000/` (APIGATEWAY_PORT) and Nats server in `http://localhost:422` ( TRANSPORTER_OPTIONS_URL ). Check [Transporters](https://moleculer.services/docs/0.12/transporters.html) for further reference.

Api Gateway path is`/api/`, so you can access all examples using `http://localhost:8000/api/microserviceName`. 


## Architecture

### Server ( `src/services` )

- `apiGateway.ts` Api Gateway Microservice.

- `helloWorld.service.ts` Hello World Microservice.

- `posts.service.ts` Posts Microservice.


### Env ( `src/env` )

- `.env.dev` .Env configuration file for development.

## License

MIT