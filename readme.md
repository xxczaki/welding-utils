# Welding Utils [![Build Status](https://travis-ci.org/xxczaki/welding-utils.svg?branch=master)](https://travis-ci.org/xxczaki/welding-utils) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

> Useful utilities related to welding 🛠️

## Highlights

- Simple API
- 0 dependencies
- Written in TypeScript

## Install

```
$ npm install welding-utils
```

## Usage

```js
const {heatInput} = require('welding-utils');

const options = {
    voltage: 200,
	amperage: 32,
	efficiencyFactor: 0.8,
	lenght: 20,
	time: 11
}

console.log(heatInput(options)); //=> 2.8160000000000003
```

## API

### heatInput(options)

**options**

Type: `Object`

```ts
interface Options {
	voltage: number;
	amperage: number;
	efficiencyFactor: number;
	lenght: number;
	time: number;
}
```

Returns equivalent carbon content (CET)

### ceq(elements)

**elements**

Type: `Object`

```ts
interface Elements {
	coal: number;
	manganese: number;
	chromium: number;
	molybdenum: number;
	vanadium: number;
	nickel: number;
	copper: number;
}
```

Returns equivalent carbon content (CET)

### cet(elements)

**elements**

Type: `Object`

```ts
interface Elements {
	coal: number;
	manganese: number;
	chromium: number;
	molybdenum: number;
	vanadium: number;
	nickel: number;
	copper: number;
}
```

Returns equivalent carbon content (CET)

### ceAws(elements)

**elements**

Type: `Object`

```ts
interface Elements {
	coal: number;
	manganese: number;
	chromium: number;
	molybdenum: number;
	vanadium: number;
	nickel: number;
	copper: number;
	silicon: number;
}
```

Returns equivalent carbon content (CE AWS)

### pcm(elements)

**elements**

Type: `Object`

```ts
interface Elements {
	coal: number;
	manganese: number;
	chromium: number;
	molybdenum: number;
	vanadium: number;
	nickel: number;
	copper: number;
	silicon: number;
	boron: number;
}
```

Returns critical metal parameter (PCM)

### pren(elements)

**elements**

Type: `Object`

```ts
interface Elements {
	chromium: number;
	molybdenum: number;
	nitrogen: number;
}
```

Returns pitting resistance equivalent number (PREN)

## License

MIT © [Antoni Kepinski](https://kepinski.me)
