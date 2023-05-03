// import { Widget } from '@lumino/widgets';
import { ReactWidget } from '@jupyterlab/apputils';
import React from 'react';

export class TangerineWidget extends ReactWidget {
    constructor() {
        super();
    }
    render() {
        return <div>Tangerine Widget</div>;
    }
}