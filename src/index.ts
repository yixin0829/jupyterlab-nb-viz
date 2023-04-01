import {
  ILayoutRestorer,
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  ICommandPalette,
  MainAreaWidget,
  WidgetTracker
} from '@jupyterlab/apputils';

import { reactIcon } from '@jupyterlab/ui-components';
import { CounterWidget } from './ReactCounter';
import { FlowWidget } from './ReactFlow';

/**
 * The command IDs used by the react-widget plugin.
 */
namespace CommandIDs {
  export const react_counter = 'create-react-counter-widget';
  export const react_flow = 'create-react-flow-widget'
}


/**
* Activate the NB Viz widget extension.
*/
function activate(app: JupyterFrontEnd, palette: ICommandPalette, restorer: ILayoutRestorer | null) {
  console.log('JupyterLab extension NB Viz (name placeholder) is activated!');

  /**
   * 1) react counter widget command
   */
  let counter_command:string = CommandIDs.react_counter
  app.commands.addCommand(counter_command, {
    caption: 'Create a new React Widget',
    label: 'React Counter Widget',
    execute: () => {
      const content = new CounterWidget();
      const widget = new MainAreaWidget<CounterWidget>({ content });
      widget.title.label = 'React Widget';
      widget.title.icon = reactIcon;

      if (!tracker_counter.has(widget)) {
        // Track the state of the widget for later restoration
        tracker_counter.add(widget);
      }

      if (!widget.isAttached) {
        // Attach the widget to the main work area if it's not there
        app.shell.add(widget, 'main');
      }
    },
  });

  // Add the command to the palette
  palette.addItem({ command: counter_command, category: 'Tutorial' });

  // Track and restore the widget state
  let tracker_counter = new WidgetTracker<MainAreaWidget<CounterWidget>>({
    namespace: 'react_counter'
  });

  // Since the plugin token is declared as optional so restorer can be ILayoutRestorer | null
  if (restorer) {
    restorer.restore(tracker_counter, {
      command: counter_command,
      name: () => 'react_counter'
    });
  }

  /**
   * 2) react flowchart widget command
   */
  let flow_command:string = CommandIDs.react_flow
  app.commands.addCommand(flow_command, {
    caption: 'Create a new React Flowchart widget',
    label: 'React Flow Widget',
    execute: () => {
      const content = new FlowWidget();
      const widget = new MainAreaWidget<FlowWidget>({ content });
      widget.title.label = 'React Flowchart';
      widget.title.icon = reactIcon;

      if (!tracker_flow.has(widget)) {
        // Track the state of the widget for later restoration
        tracker_flow.add(widget);
      }

      if (!widget.isAttached) {
        // Attach the widget to the main work area if it's not there
        app.shell.add(widget, 'main');
      }
    },
  });

  // Add the command to the palette
  palette.addItem({ command: flow_command, category: 'Tutorial' });

  // Track and restore the widget state
  let tracker_flow = new WidgetTracker<MainAreaWidget<FlowWidget>>({
    namespace: 'react_flow'
  });

  // Since the plugin token is declared as optional so restorer can be ILayoutRestorer | null
  if (restorer) {
    restorer.restore(tracker_flow, {
      command: flow_command,
      name: () => 'react_flow'
    });
  }

}

const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_apod',
  autoStart: true,
  requires: [ICommandPalette], // lists of tokens corresponding to services other plugins provide.
  optional: [ILayoutRestorer], // lists of tokens corresponding to services other plugins provide.
  activate: activate
};

export default plugin;
