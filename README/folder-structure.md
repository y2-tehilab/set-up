## <ins>Recommended</ins> NextJS folder structure

```
- components
    - stand-alone-and-global-component
- features
    - feature-name
        - components-folders-in-feature
        - feature-name.js
        - feature-name.module.js
- pages
- public
    - fonts
        - all fonts files
    - images
        - all images
- styles
    - _base.scss: all the base css definitions
    - _fonts.scss: the fonts css definitions
    - _global-classes.scss: all global class for the project
    - optional - _variables.scss: all the css variables like colors etc. -
        in order to use this file add:
        `sassOptions: {prependData: `@import './styles/_variables.scss';`, } `
        to 'next.config.js'
    - globals.scss: imports for the scss files
- services
    - store
    - api // uses api-client lib
    - helpers.js
    - ... // other-stand-alone services
```
