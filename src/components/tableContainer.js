import TableHeader from "./tableHeader";
import TableRow from "./tableRows";

export default function TableContainer({ dataJson }) {
    const dataAsRow = dataJson.map(itemObject =>
        <TableRow {...itemObject}></TableRow>)

    return (
        <div>
            <table>
                <TableHeader {...dataJson}></TableHeader>
                {dataAsRow}
            </table>
        </div>
    );
}