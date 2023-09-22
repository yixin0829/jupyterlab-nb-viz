# jupyterlab-nb-viz

A JupyterLab extension.

## Requirements

- JupyterLab >= 3.0
- [Reactflow](https://reactflow.dev/)
- [Dagre.js](https://github.com/dagrejs/dagre)
- Node.js >= 16.*
- Cookicutter
- Git

## Environment Setup Guide
- Based on the guide in https://jupyterlab.readthedocs.io/en/latest/extension/extension_tutorial.html#extension-tutorial to set up env
- Specific versions of Python and Node.js are required

```shell
# Step 1: clone this repo

# Step 2: Create a conda env (NOTE: this is different from the tutorial so reference this as source of truth)
conda create -n nb-viz --override-channels --strict-channel-priority -c conda-forge -c nodefaults python=3.10 jupyterlab=3 cookiecutter nodejs=16.6.1 jupyter-packaging git

# Install dependencies
pip install -ve .
# use the `develop` command to create a symbolic link from JupyterLab to our source directory. This means our changes are automatically available in JupyterLab
jupyter labextension develop --overwrite .
# This step might produce an error saying "ModuleNotFoundError: There is no labextension at ..", but on my end it can run properly even with this error

# see additional change to reactflow source code to make build work
# after build success run and invoke command prompt by ctrl+shift+c then enter "reactflow"
jlpm build
jupyter lab
```

- Additional change to reactflow source code to make `jlpm build`
    - error 1: ResizeObserver not find - [temp solution](https://github.com/ant-design/ant-design/issues/13405)
    ```
    interface ResizeObserver {
      observe(target: Element): void;
      unobserve(target: Element): void;
      disconnect(): void;
    }
    ```
    - error 2: Generic type 'PropsWithChildren' requires 1 type argument(s). - [temp solution](https://www.newline.co/@bespoyasov/how-to-define-props-with-children-in-react-typescript-app--56bd18be)
        - Added `<{foo: string}>` as a type argument (have no idea why it works)
        - `declare const ReactFlowProvider: FC<PropsWithChildren<{foo: string}>>;`
    - error3: `type` is undefined
        - Solution - Remove all `type` keywords
    - error4: `[Symbol.iterator]` is declared here.
      - Solution: remove the folder `/node_modules/@jupyterlab/application/node_modules`
    - error 5: node_modules/highlight.js/types/index.d.ts:55:54 - error TS1256: A rest element must be last in a tuple type.
      - Solution:
      ```
      <<<<<<
            either: (...args: (RegExp | string)[] | [...(RegExp | string)[], RegexEitherOptions]) => string,
======
            either: (...args: (RegExp | string)[] | [RegexEitherOptions, ...(RegExp | string)[]]) => string,
>>>>>>
      ```
- To start developing
  - Run `jlpm build` every time make changes to the sources code
  - Refresh the Jupyter Lab client
  - See the change and debug

## Install

To install the extension, execute:

```bash
pip install jupyterlab-nb-viz
```

## Uninstall

To remove the extension, execute:

```bash
pip uninstall jupyterlab-nb-viz
```

## Contributing

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Change directory to the jupyterlab-nb-viz directory
# Install package in development mode
pip install -e "."
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
# Rebuild extension Typescript source after making changes
jlpm build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
jlpm watch
# Run JupyterLab in another terminal
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

By default, the `jlpm build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
jupyter lab build --minimize=False
```

### Development uninstall

```bash
pip uninstall jupyterlab-nb-viz
```

In development mode, you will also need to remove the symlink created by `jupyter labextension develop`
command. To find its location, you can run `jupyter labextension list` to figure out where the `labextensions`
folder is located. Then you can remove the symlink named `jupyterlab-nb-viz` within that folder.

### Testing the extension

#### Frontend tests

This extension is using [Jest](https://jestjs.io/) for JavaScript code testing.

To execute them, execute:

```sh
jlpm
jlpm test
```

#### Integration tests

This extension uses [Playwright](https://playwright.dev/docs/intro/) for the integration tests (aka user level tests).
More precisely, the JupyterLab helper [Galata](https://github.com/jupyterlab/jupyterlab/tree/master/galata) is used to handle testing the extension in JupyterLab.

More information are provided within the [ui-tests](./ui-tests/README.md) README.

### Packaging the extension

See [RELEASE](RELEASE.md)


## File structure

```
.
│
├── src/: frontend code
│   ├── NodesAndEdges/: test files for nodes and edges used as input when the backend-frontend connection wasn't set up (I guess they will not be touched any more)
│   ├── code_archive/: archived past code files
│   ├── index.ts: index file of the Jupyterlab Extension, for more details plz refer to the Jupyterlab extension tutorial
│   ├── InsightNode.tsx: component for Insight Nodes
│   ├── Legend.tsx: component for Legend
│   ├── panel.ts: Tracking Tree panel
│   ├── PlotNode.tsx: component for Method Nodes (Plot Nodes)
│   ├── RawNode.tsx: component for Data Field Nodes (Raw Node is the legacy name)
│   ├── ReactFLow.tsx: main component for the Tracking Tree panel
│   ├── RecommendationCodeSnippets.tsx: component to display the code snippets of selected recommendations
│   ├── registry.ts: Tangerine registry. I don't have a good explanation for this; just followed other jupyterlab extension repos to create this file
│   ├── TreeUtils.ts: functions related to manipulations on the Tracking Tree, such as expanding or collapsing the tree nodes;
│
├── jupyterlab-nb-viz/: lab extension (I don't have a good explanation for this; just followed other jupyterlab extension repos to create this folder)
│   ├── notebooks/: notebooks that can be accessed in JuputerLab
|   │   ├── datasets/: datasets that used by the notebooks
|   │   ├── sample_notebooks/: notebooks used as examples
|   │   ├──  test_notebooks:/: notebooks used for testing purposes
|   │   ├──  user_study/: notebooks used for user studies
|   │   |   ├── tutorial/: notebooks used for the tutorial video for user studies
|
├── style/: css files for webpage styles
|
├── files & folders not listed here: configuration files that will be rarely touched
```