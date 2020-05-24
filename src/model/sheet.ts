export class Sheet {
    readonly rows: Row[]

    constructor(arr: string[][]) {
        this.rows = arr.map(r => new Row(r));
    }
}

export class Row {
    readonly cells: Cell[]

    constructor(arr: string[]) {
        this.cells = arr.map(c => Cell.coerce(c));
    }
}

export interface TextCell {
    readonly type: 'text';
    readonly value: string;
}

export interface NumberCell {
    readonly type: 'number';
    readonly value: number;
}

export type Cell = TextCell | NumberCell;

export const Cell = {
    coerce: (str: string) => {
        const result = Number.parseFloat(str);

        if (Number.isNaN(result)) {
            return TextCell(str);
        }
        else {
            return NumberCell(result);
        }
    },
    render: (cell: Cell): string => {
        switch (cell.type) {
            case 'text':
                return cell.value;
            case 'number':
                return cell.value.toString();
        }
    }
};

export const TextCell = (value: string): Cell => ({type: 'text', value: value});
export const NumberCell = (value: number): Cell => ({type: 'number', value: value});