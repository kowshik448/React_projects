import React, { useEffect, useState } from "react";
import Comment from "./comment";
import CommentForm from "./commentForm";
import { getComments as getCommentsApi ,
        createComment as createCommentApi,
        deleteComment as deleteCommentApi, 
        updateComment as updateCommentApi} from "./api";
import './comments.css';

function Comments({currentUserId}){
    const [commentsData , setCommentsData] = useState([]);
    const [activeComment, setActiveComment] = useState({});
    const rootComments = commentsData.filter((comment)=>comment.parentId == null);

    const getReplies = (commentId)=>{
        return commentsData.filter((comment)=>comment.parentId===commentId)
        .sort((a,b)=> new Date(a.createdAt).getTime - new Date(b.createdAt).getTime)
    }

    const addComment =(text , parentId)=>{
        createCommentApi(text,parentId).then((comment)=>{
            setCommentsData([comment,...commentsData]);
            setActiveComment({});
        })
    }

    const deleteComment = (commentId)=>{
        if (window.confirm('are you sure want to delete ?')){
            deleteCommentApi(commentId).then(()=>{
                const updatedComments = commentsData.filter((comment)=>comment.id!==commentId);
                setCommentsData(updatedComments);
            })
        }
    }
    const updateComment = (text,commentId)=>{
        updateCommentApi(text).then(()=>{
            const updatedComments = commentsData.map((comment)=>{
                if(comment.id===commentId){
                    return {...comment,body:text}
                }
                return comment
            })
            setCommentsData(updatedComments);
            setActiveComment({});

        })
    }

    useEffect(()=>{
        getCommentsApi().then((data)=>{
            setCommentsData(data);
        })
    },[])

    return (
        <div className="comments">
            <h3 className="comments-title">Comment Box</h3>
            <div className="comment-form-title">Write Comment</div> 
            <CommentForm submitLabel='Add comment' handleSubmit={addComment}/>
            <div className="comments-container">
                {rootComments.map((rootcomment)=>(
                    <Comment key={rootcomment.id}
                    comment={rootcomment}
                    currentUserId={currentUserId}
                    replies = {getReplies(rootcomment.id)}
                    addComment={addComment}
                    deleteComment={deleteComment}
                    updateComment={updateComment}
                    activeComment={activeComment}
                    setActiveComment={setActiveComment}/>
                ))}
            </div>
        </div>
    )
}

export default Comments;