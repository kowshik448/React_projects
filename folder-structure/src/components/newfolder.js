import React from "react";
import './folder.css';

function NewFolder({openInput,setOpenInput,addFolder}){
    return (
        <div className="new-folder">
            <span>{openInput.isFolder ? '📁' : '🗒️'}</span>
            <input
                autoFocus
                type='text'
                onKeyDown={addFolder}
                onBlur={()=>setOpenInput({...openInput , visible:!openInput.visible})} />
        </div>
    )
}

export default NewFolder;