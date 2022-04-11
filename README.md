# Fixed header

Simple script to toggle classes after scrolled some pixels. Perfect to for fixed headers.

## Installation

### Install from node

You can install `fixed-header` using the [npm](https://www.npmjs.com/) package manager with ...

```sh
npm install @louis-internet/fixed-header
```

or if you prefer [Yarn](https://yarnpkg.com/) with ...

```sh
yarn add @louis-internet/fixed-header
```

### Include Javascript files

```html
<!-- From CDN -->
<script src="https://cdn.jsdelivr.net/npm/@louis-internet/fixed-header@X.X.X/dist/fixed-header.polyfilled.js"></script>

<!-- Downlaod from Github -->
<script src="dist/fixed-header.polyfilled.js"></script>
```

## Usage

To use the Library simply call it an give it as first param the selector

```html
<body>
  <header class="js-header">...</header>
</body>
```

```javascript
fixedHeader('.js-header', {
  activeClass: 'toggle-class',
  offset: 50,
})
```

You can also set some options

### Options

#### activeClass

_Default: 'is-fixed'_
_Type: String_

#### offset

After this scroll offset the class whould be triggert

_Default: 0_
_Type: Integer_

#### fixedHeight

If the target class is sticky and changes the height, padding, or something similar, you can get flickering. With this option, you can prevent this from happening.

_Default: false_
_Type: Boolean_

#### related

Toggle classes on additional Dom Nodes

_Default: []_
_Type: Array_

```javascript
fixedHeader('js-header', {
  related: [
    {
      obj: 'html',
      activeClass: 'header--is-fixed',
    },
  ],
})
```
