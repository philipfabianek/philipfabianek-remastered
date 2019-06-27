# philipfabianek-remastered
2019 version of my portfolio site

## Requirements

Only NPM and Yarn have to be installed, making use of Yarn is suggested

## Tech stack

Next.js (React) with a few libraries and some utils

## File structure

* Pages inside `pages`
* Components inside `components`
* Static files (images) inside `static`
* Styles inside `styles`
* Utils (almost always pure functions) inside `utils`

### Structure remarks

You may've noticed the structure inside the `components` folder, it is very strict - there is always a folder with components, no more nested than that. The [`components/index.js`](components/index.js) file is only a luxury - only folder names have to be added and the file itself does rest of the exporting job.

The structure inside the `styles` folder is also quite simple,
`pages` contains page-specific styles while `components` contains styles related to the component (it should have the same name as the component, only not camelCased)

## Config files

The `.gitignore`, `next.config.js`, `now.json` and `package.json` config files are all very straightforward, you won't need to ever edit the `postcss.config.js` file.

## Scripts

* Development

```
yarn dev
```

* Build

```
yarn build
```
