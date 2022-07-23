import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import Comments from '../components/comments/Comments';
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import QuoteItem from "../components/quotes/QuoteItem";

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'Judith', 
    text: 'React is the best'
  },
  {
    id: 'q2',
    author: 'Max',
    text: "The Other Option is the best"
  },
  {
    id: "q3",
    author: 'Taki',
    text: 'Food is the best',
  }
]

const QuoteDetails = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
}

export default QuoteDetails;