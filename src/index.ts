import {
  ILayoutRestorer,
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  ICommandPalette,
//   MainAreaWidget,
//   WidgetTracker
} from '@jupyterlab/apputils';
import { ITranslator } from '@jupyterlab/translation';
// import { reactIcon } from '@jupyterlab/ui-components';
// import { FlowWidget } from './ReactFlow';
import { INotebookTracker } from '@jupyterlab/notebook';
import { TangerinePanel } from './panel';
import { TangerineRegistry } from './registry';
import { Menu } from '@lumino/widgets';
import { IMainMenu } from '@jupyterlab/mainmenu';

/**
 * The command IDs used by the react-widget plugin.
 */
namespace CommandIDs {
//   export const react_counter = 'create-react-counter-widget';
  export const react_flow = 'create-react-flow-widget'
  export const tangerine = 'create-tangerine-widget'
}


/**
* Activate the NB Viz widget extension.
*/
function activate(
    app: JupyterFrontEnd, 
    palette: ICommandPalette, 
    mainMenu: IMainMenu,
    translator: ITranslator,
    notebookTracker: INotebookTracker,
    restorer: ILayoutRestorer | null) {
    console.log('JupyterLab extension NB Viz (name placeholder) is activated!');
  
    /**
   * Add react flowchart widget command
   */
    // let flow_command:string = CommandIDs.react_flow

    // app.commands.addCommand(flow_command, {
    //     caption: 'Create a new React Flowchart widget',
    //     label: 'React Flow Widget',
    //     execute: () => {
    //     const content = new FlowWidget();
    //     const widget = new MainAreaWidget<FlowWidget>({ content });
    //     widget.title.label = 'React Flowchart';
    //     widget.title.icon = reactIcon;

    //     if (!tracker_flow.has(widget)) {
    //         // Track the state of the widget for later restoration
    //         tracker_flow.add(widget);
    //     }

    //     if (!widget.isAttached) {
    //         // Attach the widget to the main work area if it's not there
    //         app.shell.add(widget, 'main');
    //     }
    //     },
    // });

    // // Add the command to the palette
    // palette.addItem({ command: flow_command, category: 'Tutorial' });

    // // Track and restore the widget state
    // let tracker_flow = new WidgetTracker<MainAreaWidget<FlowWidget>>({
    //     namespace: 'react_flow'
    // });

    // // Since the plugin token is declared as optional so restorer can be ILayoutRestorer | null
    // if (restorer) {
    //     restorer.restore(tracker_flow, {
    //     command: flow_command,
    //     name: () => 'react_flow'
    //     });
    // }

    // Try creating model, panel, and registry for Tangerine
    const registry = new TangerineRegistry();
    app.docRegistry.addWidgetExtension('Notebook', registry);

    async function createPanel() {
        // create a Tangerine panel
        console.log('created Tangerine panel');
        console.log(`Now registry.notebook=${registry.notebook}`);

        const panel = new TangerinePanel(notebookTracker, translator);
        app.shell.add(panel, 'main');
        registry.panel = panel;
        registry.panel.widget.notebookPanel = registry.notebook;
        
        console.log('Set notebookPanel for FlowWidget');
        console.log(registry.panel.widget.notebookPanel);
        
        return panel;
    }

    const trans = translator.load('jupyterlab');
    app.commands.addCommand(CommandIDs.tangerine, {
            label: trans.__(`Tangerine View`),
            caption: trans.__(`Tangerine View`),
            execute: createPanel
        }
    );
    palette.addItem({ command: CommandIDs.tangerine, category: 'Tutorial' });

    // add menu tab
    const tangerineMenu = new Menu({ commands: app.commands });
    tangerineMenu.title.label = trans.__("Tangerine");
    mainMenu.addMenu(tangerineMenu, {rank: 280});
    tangerineMenu.addItem({ command: CommandIDs.tangerine });

    notebookTracker.currentChanged.connect((tracker, panel) => {
        console.log('NotebookTracker Widget changed');
        if (registry.panel) {
            registry.panel.widget.notebookPanel = panel;
            registry.panel.widget.notebookTracker = tracker;
        }
        else {
            console.log('registry.panel is null');
        }

    });
}

const plugin: JupyterFrontEndPlugin<void> = {
    id: 'jupyter-nb-viz:plugin',
    autoStart: true,
    requires: [ICommandPalette, IMainMenu, ITranslator, INotebookTracker], // lists of tokens corresponding to services other plugins provide.
    optional: [ILayoutRestorer], // lists of tokens corresponding to services other plugins provide.
    activate: activate
};

export default plugin;
