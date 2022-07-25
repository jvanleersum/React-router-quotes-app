import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import NewCommentForm from "./NewCommentForm";
import CommentsList from "./CommentsList";
import LoadingSpinner from "../ui/LoadingSpinner";
import classes from "./Comments.module.css";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const { quoteId } = params;
  const {
    sendRequest,
    status,
    data: loadedComments,
    error,
  } = useHttp(getAllComments, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId])

  let comments; 

  if (status === "pending") {
    comments = <div className="centered">
        <LoadingSpinner />
      </div>
  }

  if (error) {
    comments = <p className="centered focus">{error}</p>;
  }

  if (status === 'completed' && loadedComments ) {
    comments = <CommentsList comments={loadedComments}/>
  }

  if (status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
    comments = <p className="centered">No comments were entered yet!</p>;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm onAddedComment={addedCommentHandler}/>}
      {comments}
    </section>
  );
};

export default Comments;
