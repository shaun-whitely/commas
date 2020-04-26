import * as React from 'react';

export interface Props {
    content: string[][]
}

export default (props: Props) =>
    <table>
        {props.content.map(row => <Row row={row} />)}
    </table>

interface RowProps {
    row: string[]
}

const Row = (props: RowProps) =>
    <tr>
        {props.row.map(cell => <td>{cell}</td>)}
    </tr>