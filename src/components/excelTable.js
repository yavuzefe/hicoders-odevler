import ReadExcel from "../services/excelService";

export default function ReadingExcelFile() {
    return (
        <div>
            <input type='file' onChange={(e) => {
                const file = e.target.files[0];
                const dataJson = ReadExcel(file);
                console.log(dataJson);
                dataJson.then(person => {
                    person.map((person) => {
                        document.querySelector("#deneme").innerHTML += `<tr>
                    <td>${person.ISIM}</td>
                    <td>${person.SOYISIM}</td>
                   <td>${person.YAS}</td>
                   <td>${person.ALDIGIMAAS}</td>
                   <td>${person.CINSIYETI}</td>
                  </tr>`
                    })
                })
            }} />
            <table id="deneme">
            </table>
        </div >
    );
}
