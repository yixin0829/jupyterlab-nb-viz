import {
  ILayoutRestorer,
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  ICommandPalette, MainAreaWidget,
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
import { KnowledgeGraphWidget } from './KnowledgeGraph';

/**
 * The command IDs used by the react-widget plugin.
 */
namespace CommandIDs {
//   export const react_counter = 'create-react-counter-widget';
  export const tangerine = 'create-tangerine-widget'
  export const knowledgeGraph = 'create-knowledge-graph-widget'
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

    async function createKnowledgeGraph() {
        const content = new KnowledgeGraphWidget();
        const widget = new MainAreaWidget({ content });
        widget.title.label = "Knowledge Graph";
        if (!widget.isAttached) {
           app.shell.add(widget, 'main'); 
        }
    }

    const trans = translator.load('jupyterlab');
    app.commands.addCommand(CommandIDs.tangerine, {
            label: trans.__(`Tracking tree`),
            caption: trans.__(`Tracking tree`),
            execute: createPanel
        }
    );
    palette.addItem({ command: CommandIDs.tangerine, category: 'Tutorial' });

    app.commands.addCommand(CommandIDs.knowledgeGraph, {
        label: trans.__(`Knowledge Graph`),
        caption: trans.__(`Knowledge Graph`),
        execute: createKnowledgeGraph
    }
    );
    palette.addItem({ command: CommandIDs.knowledgeGraph, category: 'Tutorial' });

    // add menu tab
    const tangerineMenu = new Menu({ commands: app.commands });
    tangerineMenu.title.label = trans.__("Tangerine");
    mainMenu.addMenu(tangerineMenu, {rank: 280});
    tangerineMenu.addItem({ command: CommandIDs.tangerine });
    tangerineMenu.addItem({ command: CommandIDs.knowledgeGraph });

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
