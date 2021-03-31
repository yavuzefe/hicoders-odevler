import TableHeader from "./tableHeader";
import TableRow from "./tableRows";

export default function TableContainer({ friendInfos }) {
    const allFriendInfos = friendInfos.map(friend =>
        <TableRow {...friend}></TableRow>)

    return (
        <div>
            <table>
                <TableHeader {...friendInfos}></TableHeader>
                {allFriendInfos}
            </table>
        </div>
    );
}