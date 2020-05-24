import * as React from 'react';
import * as sheet from '../model/sheet';
import './index.css';

export interface Props {
    data: sheet.Sheet;
}

export default (props: Props) =>
    <table>
        <tbody>
            {props.data.rows.map((row, i) => <Row key={i} row={row} />)}
        </tbody>
    </table>;

interface RowProps {
    row: sheet.Row;
}

const Row = ({row}: RowProps) => {
    return <tr>
        {row.cells.map((cell, i) => <Cell key={i} cell={cell} />)}
    </tr>;
};

interface CellProps {
    cell: sheet.Cell
}

const Cell = ({cell}: CellProps) => {
    const dataClassName = (() => {
        switch (cell.type) {
            case 'text':
                return 'cell-text';
            case 'number':
                return 'cell-number';
        }
    })();

    return <td className={dataClassName}>{sheet.Cell.render(cell)}</td>;
};