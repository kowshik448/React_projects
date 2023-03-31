import React from "react";
import CommentForm from "./commentForm";
import './comments.css';

function Comment({
    comment ,
    currentUserId ,
    replies ,
    addComment,
    deleteComment ,
    updateComment,
    activeComment , 
    setActiveComment,
    parentId=null}){

    const canReply = Boolean(currentUserId);
    const canEditDelete = currentUserId===comment.userId;
    const createdAt = new Date(comment.createdAt).toLocaleDateString();
    const isreplying = activeComment && activeComment.type === 'replying' && activeComment.id===comment.id;
    const isediting = activeComment && activeComment.type === 'editing' && activeComment.id===comment.id;
    const replyId = parentId ? parentId : comment.id;
    return (
        <div className="comment" key={comment.id}>
            <div className="comment-image-container">
                <img src="#" alter='image'/>
            </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">{comment.username}</div>
                    <div>{createdAt}</div>
                </div>
                {isediting ? 
                    <CommentForm 
                    submitLabel='Update' 
                    hasCancelButton='true'
                    initialText={comment.body} 
                    handleSubmit={(text)=>updateComment(text,comment.id)}
                    handleCancel = {()=>setActiveComment({})}/> : 
                    <div className="comment-text">{comment.body}</div>}
                <div className="comment-actions">
                    {canReply &&<div 
                                className="comment-action" 
                                onClick={()=>setActiveComment({id:comment.id , type : 'replying'})}>reply</div>}
                    {canEditDelete && <div 
                                className="comment-action"
                                onClick={()=>setActiveComment({id:comment.id , type : 'editing'})}>edit</div>}
                    {canEditDelete && <div className="comment-action" onClick={()=>deleteComment(comment.id)}>delete</div>}
                </div>
                {isreplying && (
                    <CommentForm submitLabel='Reply' handleSubmit={(text)=>addComment(text,replyId)}/>
                )}
                {replies.length >0 && (
                    <div className="replies">
                        {replies.map((reply)=>(
                            <Comment key={reply.id} 
                            comment={reply} 
                            replies={[]}
                            currentUserId={currentUserId}
                            addComment={addComment}
                            deleteComment={deleteComment}
                            updateComment={updateComment}
                            activeComment={activeComment}
                            setActiveComment={setActiveComment}
                            parentId={comment.id}/>
                        ))
                        }
                    </div>
                )}
            </div>
        </div>
    )
}

export default Comment;