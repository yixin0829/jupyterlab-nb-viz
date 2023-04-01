import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab-nb-viz extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-nb-viz:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-nb-viz is activated!');
  }
};

export default plugin;
