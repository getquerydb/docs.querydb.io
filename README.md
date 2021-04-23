<p align="center">
  <a href="http://querydb.io/" target="_blank">
  <img src="https://docs.querydb.io/assets/logo.png" width="320" alt="QueryDB Logo" /></a>
</p>

## Description

This project is built on top of the [Angular CLI](https://github.com/angular/angular-cli). It uses the [Dgeni documentation generator](https://github.com/angular/dgeni) to compile source documentation in markdown format into the published format. The Repository contains [docs.querydb.io](https://docs.querydb.io) source code, the official QueryDB documentation.

## Installing

Install project dependencies and start a local server with the following terminal commands:

```bash
$ npm install
$ npm run start
```

Navigate to [`http://localhost:4200/`](http://localhost:4200/).

All pages are written in [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) and located in the `content` directory.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

To run build in _watch mode_, run `npm run build:watch`. Any content changes will be recompiled and rebuilt, and the content served at [`http://localhost:4200/`](http://localhost:4200/).

Use `npm run build:prod` for a production build.

## Support

QueryB is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them.

## Stay in touch

- Author - [Reynaldo Claros](https://twitter.com/rclaros_pe)
- Website - [https://querydb.io](https://querydb.io/)

## License

QueryDB is [MIT licensed](LICENSE).
