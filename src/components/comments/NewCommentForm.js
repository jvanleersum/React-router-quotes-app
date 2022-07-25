import { useEffect, useRef} from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import LoadingSpinner from '../ui/LoadingSpinner';
import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const params = useParams();
  const { quoteId } = params;
  const location = useLocation();
  const { sendRequest, status, error }  = useHttp(addComment);
  const { onAddedComment } = props

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
    } 
  }, [status, error, onAddedComment])

  const submitFormHandler = (event) => {
    event.preventDefault();
    // optional: Could validate here
    
    // send comment to server
    const enteredText = commentTextRef.current.value
    sendRequest({commentData: {text: enteredText}, quoteId: quoteId})
  };

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered focus'>{error}</p>
  }

  if (status === "completed") {
    return <Link to={`${location.pathname}/comments=true`}></Link>
  }

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
