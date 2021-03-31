import ReadExcel from "../services/excelService";

export default function ReadingExcelFile() {

    return (
        <div>
            <input type='file' onChange={(e) => {
                const file = e.target.files[0];
                ReadExcel(file);
            }} />
        </div >
    );
}
