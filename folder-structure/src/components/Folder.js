import React, { useState } from "react";
import './folder.css';
import NewFolder from "./newfolder";
import useTraversal from '../Hooks/folderstraversal';


function Folder({explorer,setExplorerData=()=>{}}){
    const [expand , setExpand] = useState(false);
    const [ openInput , setOpenInput] = useState({
        visible:false,
        isFolder:false
    });
    const {insertFolder} = useTraversal();
    const handleAddFolder = (folderId , item , isFolder)=>{
        const updateddata = insertFolder(explorer,folderId,item,isFolder);
        setExplorerData(updateddata);
      }
    const openFolder = ()=>{
        setExpand(!expand);
        setOpenInput({...openInput,visible:false});
    }
    const createFolder = (e,Folder)=>{
        e.stopPropagation();
        setOpenInput({visible:true,isFolder:Folder});
        setExpand(true);
    }
    const addFolder = (e)=>{
        if (e.target.value && e.keyCode === 13){
            handleAddFolder(explorer.id ,e.target.value , openInput.isFolder );
            setOpenInput({...openInput,visible:false});
        }
    }

    return (
        <div >
            <div className="main-root" style={{cursor:explorer.isFolder ? 'pointer' : ''}} onClick={openFolder}>
                <span>{explorer.isFolder ? expand ? '📂' :'📁 ' : '🗒️ '}{explorer.name}</span>
                {explorer.isFolder && (
                <div>
                    <button onClick={(e)=>createFolder(e,true)}>folder+</button>
                    <button onClick={(e)=>createFolder(e,false)}>file+</button>
                </div>
                )}
            </div>
            {openInput.visible && (<NewFolder openInput={openInput} setOpenInput={setOpenInput} addFolder={addFolder}/>)} 
            {(expand || openInput.visible) && explorer.items.map((file)=>(
                <div key={file.id} className='children'><Folder  explorer={file}/></div>
            ))}
        </div>
    )
}

export default Folder;