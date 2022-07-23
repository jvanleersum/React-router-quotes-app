import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import Comments from '../components/comments/Comments';

const QuoteDetails = () => {
  const params = useParams();

  return <Fragment>
      <h1>Quote Details for quote {params.quoteId}</h1>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
}

export default QuoteDetails;