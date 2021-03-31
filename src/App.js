import './App.css';
// import ReadingExcelFile from './components/excelTable';
import data from './excel-data.json';
import TableContainer from './components/tableContainer';

function App() {
  return (
    // <ReadingExcelFile></ReadingExcelFile>
    <TableContainer dataJson={data}></TableContainer>
  );
}

export default App;
