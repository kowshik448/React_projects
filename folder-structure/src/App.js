
import { useState } from 'react';
import './App.css';
import Folder from './components/Folder';
import explorer from './data/folderData';
// import useTraversal from './Hooks/folderstraversal';


function App() {
  const [explorerData , setExplorerData] = useState(explorer);
  // const {insertFolder} = useTraversal();
  // const handleAddFolder = (folderId , item , isFolder)=>{
  //   console.log(folderId,item,isFolder);
  //   const updateddata = insertFolder(explorerData,folderId,item,isFolder);
  //   setExplorerData(updateddata);
  // }

  return (
    <div className="App">
      <h3>Folder Structure</h3>
      <Folder explorer={explorerData} setExplorerData={setExplorerData} />
    </div>
  );
}

export default App;
