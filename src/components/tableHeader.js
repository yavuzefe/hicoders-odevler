export default function TableHeader(props) {
    const keyHeaderInfos = Object.keys(props[0]);
    // key arrays [name, surname, age, friends]

    return (
        <tr>
            <th>
                {keyHeaderInfos[0]}
            </th>
            <th>
                {keyHeaderInfos[1]}
            </th>
            <th>
                {keyHeaderInfos[2]}
            </th>
            <th>
                {keyHeaderInfos[3]}
            </th>
        </tr>
    );
}