import { StackedPanel } from '@lumino/widgets';
import { ITranslator, nullTranslator, TranslationBundle } from '@jupyterlab/translation';
import { FlowWidget } from './ReactFlow';
import { NotebookPanel } from '@jupyterlab/notebook';
import { INotebookTracker } from '@jupyterlab/notebook';

export class TangerinePanel extends StackedPanel {
    private _translator: ITranslator;
    private _trans: TranslationBundle;
    private _widget: FlowWidget;
    private _currentNotebook: NotebookPanel | null = null;
    private _notebookTracker: INotebookTracker | null = null;

    get widget() {
        return this._widget;
    }

    set widget(widget:FlowWidget) {
        this._widget = widget;
    }

    get currentNotebook() {
        return this._currentNotebook;
    }

    set currentNotebook(notebook: NotebookPanel | null) {
        this._currentNotebook = notebook;
    }


    constructor(notebookTracker: INotebookTracker, translator?: ITranslator) {
        super();
        this._translator = translator || nullTranslator;
        this._trans = this._translator.load('jupyterlab');
        this.id = 'Tangerine'
        this.title.label = this._trans.__(`Tangerine View`);
        this.title.closable = true;
        this._notebookTracker = notebookTracker;
        
        this._widget = new FlowWidget(this._currentNotebook, this._notebookTracker);
        this.addWidget(this._widget);
    }
}