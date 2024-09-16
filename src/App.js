import './App.css';
import {Table} from "./Table";
import {
    useRef,
} from 'react'
import {  useReactToPrint } from 'react-to-print'
function App() {
    const tableRef = useRef(null)
    const onClickPrint = useReactToPrint({
        content: () => {
            if (!tableRef.current) {
                console.error("tableRef.current is null");
                return null;
            }
            return tableRef.current;
        },
        documentTitle: 'Page',
    });

  return (
    <div className="App">
        <div ref={tableRef}>
            <Table />
        </div>
      <button onClick={onClickPrint}>CLick to print</button>
    </div>
  );
}

export default App;
