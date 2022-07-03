## Add site fonts:

- go to [google fonts](https://fonts.google.com/) and search the desired font (for example `Rubik`)
- download the font family
- select from the zip folder the desired font size files
- convert these files on [font convertor](https://cloudconvert.com/woff-converter) to `woff` and `woff2` format
- add these formated files to the project in path `public/fonts`
- add to `globals.scss` file the css definition of fonts:

  ```scss
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/Rubik-Regular.woff2') format('woff2'), url('/fonts/Rubik-Regular.woff')
        format('woff');
  }

  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('/fonts/Rubik-Medium.woff2') format('woff2'), url('/fonts/Rubik-Medium.woff')
        format('woff');
  }
  ```

  according to the desired font size files, `@font-face` for every font size file.

- then add to `_base.scss` to `body` the font definition, for example: `font-family: 'Rubik';`
