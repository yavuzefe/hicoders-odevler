import './App.css';
// import ReadingExcelFile from './components/excelTable';
import friendList from './excel-data.json';
import TableContainer from './components/tableContainer';

function App() {
  return (
    // <ReadingExcelFile></ReadingExcelFile>
    <TableContainer friendInfos={friendList}></TableContainer>
  );
}

export default App;
