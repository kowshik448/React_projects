

function useTraversal(){
    const insertFolder = (tree , folderId , item , isFolder)=>{
        if (tree.id === folderId){
            tree.items.unshift({
                id:new Date().getTime(),
                name:item,
                isFolder:isFolder,
                items:[]
            })
            return tree
        }
        for( let folder of tree.items){
            const newTree = insertFolder(folder,folderId,item,isFolder);
            if (newTree){
                return newTree
                break
            }
        }
        return false
    }
    return {insertFolder};
}

export default useTraversal;