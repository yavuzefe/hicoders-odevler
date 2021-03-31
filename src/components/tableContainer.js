import TableHeader from "./tableHeader";
import TableRow from "./tableRows";

export default function TableContainer(props) {
    const dataAsRow =props.dataJson.map(itemObject =>
        <TableRow {...itemObject}></TableRow>)

    return (
        <div>
            <table>
                <TableHeader {...props}></TableHeader>
                {dataAsRow}
            </table>
        </div>
    );
}