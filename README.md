# AI Summary for George Eliot Works.

## 1. Initial Project Source

- This project was initialized by CYux, his GitHub Page: https://github.com/CYux
- Initial GitHub Repository: https://github.com/CYux/GEreader
- Built by [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## 2. Installation on local machine

  ```console
  yarn
  yarn start
  ```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## 3.  Build

  - Yarn: 

  ```console
  yarn build
  ```

- docusarus:

  ```console
  docusaurus build
  ```


This command generates static content into the `build` directory and can be served using any static contents hosting service.

## 4. Deployment

- **Deploy on GitHub Pages(`TESTED`)**

  - update "package.json":

    ```json
    "scripts":{
      ..., 
      "predeploy": "docusaurus build",
      "deploy": "gh-pages -d build",
      ...
    }

  - Deploy from terminal:

    ```console
    npm run deploy
    ```



- Alternative option(NOT TESTED) 
  - Using SSH:

    ```console
    $ USE_SSH=true yarn deploy
    ```

  - No SSH:

    ```console
    $ GIT_USER=<Your GitHub username> yarn deploy
    ```

  - If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
