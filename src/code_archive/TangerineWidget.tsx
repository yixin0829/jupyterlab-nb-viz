// import { Widget } from '@lumino/widgets';
// import { ReactWidget } from '@jupyterlab/apputils';
// import React from 'react';
// import { NotebookPanel, INotebookTracker } from '@jupyterlab/notebook';

// class SMITreeComponent extends ReactComponent


// export class SMITreeWidget extends ReactWidget {
//     private _notebookPanel: NotebookPanel | null = null;
//     private _notebookTracker: INotebookTracker | null = null;

//     set notebookPanel(notebook: NotebookPanel | null) {
//         this._notebookPanel = notebook;
//     }

//     set notebookTracker(tracker: INotebookTracker | null) {
//         this._notebookTracker = tracker;
//     }

//     constructor(panel?: NotebookPanel | null, tracker?: INotebookTracker | null) {
//         super();
//         this._notebookTracker = tracker ? tracker : null;
//         this._notebookPanel = tracker ? tracker.currentWidget : null;

//     }
//     render() {
//         return <div>Tangerine Widget</div>;
//     }
// }