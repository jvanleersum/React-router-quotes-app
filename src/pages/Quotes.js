import QuoteList from '../components/quotes/QuoteList';

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

const Quotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}/>
}

export default Quotes;