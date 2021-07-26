# generator-jhipster-fx
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> JHipster module, Generate desktop application interface using JavaFX instead of JHipster as an Angular/web application

# Introduction

![JHipsterFX] (https://github.com/bhangun/generator-jhipster-fx/raw/master/screenshot.PNG)

This is a [JHipster](http://jhipster.github.io/) module, that is meant to be used in a JHipster application.

# Prerequisites

As this is a [JHipster](http://jhipster.github.io/) module, we expect you have JHipster and its related tools already installed:

- [Installing JHipster](https://jhipster.github.io/installation.html)

# Installation

## With Yarn

To install this module:

```bash
yarn global add generator-jhipster-fx
```

To update this module:

```bash
yarn global upgrade generator-jhipster-fx
```

## With NPM

To install this module:

```bash
npm install -g generator-jhipster-fx
```

To update this module:

```bash
npm update -g generator-jhipster-fx
```

Addon library installation:

```bash
sudo apt-get install openjfx
```

# Usage

```bash
---------STEP 1------------
$ cd yourJhipsterGatewayOrMonolithic
$ yo jhipster-fx 
<answer the question>
...

--------STEP 2-----------
$ cd yourGeneratedFxApps
$ mvn javafx:run
```

# Roadmap
* [ ] Adding entity
* [ ] Look & feel themes & CSS
* [ ] Gradle support
* [ ] FXML support
* [ ] JDK 9/10 support
* [ ] FXLauncher support


# License

Apache-2.0 © [bhangun hartani](http://bhangun.blogspot.com)


[npm-image]: https://img.shields.io/npm/v/generator-jhipster-fx.svg
[npm-url]: https://npmjs.org/package/generator-jhipster-fx
[travis-image]: https://travis-ci.org/bhangun/generator-jhipster-fx.svg?branch=master
[travis-url]: https://travis-ci.org/bhangun/generator-jhipster-fx
[daviddm-image]: https://david-dm.org/bhangun/generator-jhipster-fx.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/bhangun/generator-jhipster-fx
