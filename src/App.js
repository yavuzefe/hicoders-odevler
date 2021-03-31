import './App.css';
// import ReadExcel from "../services/excelService";
import ReadingExcelFile from './components/excelTable';
// import data from './excel-data.json';
// import TableContainer from './components/tableContainer';

function App() {
  return (
    <ReadingExcelFile/>
    // <TableContainer dataJson={data}></TableContainer>
  );
}

export default App;
