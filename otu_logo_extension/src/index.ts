import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the otu_logo_extension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'otu_logo_extension:plugin',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension otu_logo_extension is activated! The logo is not showing up');
    const style = 'otu_logo_extension/index.css';

    manager.register({
      name: 'otu_logo_extension',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
