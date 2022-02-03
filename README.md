# z1-frontend-developer

[Z1.digital](https://z1.digital/) technical test.

## Description

This project follows the rules given by z1 test:
- No dependencies
- Prettier and ESLint
- conventional commits (commintlint with husky)
- Typescript
- Styled-components
- Unit tests

In addition, a test focused in the main component `ScanView` is also included.

## How does this works?

Once runned the app, it will display the main screen (`ScanView`) where you can press `Take Picture` button to load the camera modal. This modal simulates the camera  behaviour, trying every 2 seconds to auto take a picture of a mocked id document image, and confirm with the API that it's valid. This process will be repeated up to get a valid request.

If the image is valid after 2 seconds, it will close automatically the modal, showing the imagen in the main view.
If the image is not valid and the user press the `Cancel` button, the modal will close, giving the the user the possibility to `Retake picture`.


## Project structure

- *api*: Api request shortcuts.
- *assets*: Resources.
- *components*: Reusable components.
- *containers*: Views and components linked to the project model.
- *model*: Project models.
- *styles*: Global styles configurations.
- *utils*: Helper functions.

## How to run this project?

```bash
yarn install && yarn start
```

## How to run tests?

```bash
yarn test
```

If ask any options, type `a`.

## How to build?

```bash
yarn build
```
