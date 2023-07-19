import { DocumentRegistry } from '@jupyterlab/docregistry';
import { NotebookPanel, INotebookModel} from '@jupyterlab/notebook';
import { DisposableDelegate, IDisposable } from '@lumino/disposable';
import { TangerinePanel } from './panel';
  

export class TangerineRegistry implements DocumentRegistry.IWidgetExtension<NotebookPanel, INotebookModel>{
    private _panel: TangerinePanel | null = null;
    private _notebook: NotebookPanel | null = null;

    get panel() {
        return this._panel;
    }

    set panel(panel: TangerinePanel | null) {
        this._panel = panel;
    }

    get notebook() {
        return this._notebook;
    }

    createNew(panel: NotebookPanel, context: DocumentRegistry.IContext<INotebookModel>): void | IDisposable {
        Promise.all([panel.revealed, panel.sessionContext.ready]).then(() => {
            this._notebook = panel;
            // if(this._panel) {
            //    this._panel.currentNotebook = panel; 
            // }
            // console.log(`Notebook: ${this._notebook}`);
            // console.log(`Notebook model: ${this._notebook.model}`);
        });

        return new DisposableDelegate(() => {});
    }
}