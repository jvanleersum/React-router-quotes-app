import { Route, Switch } from 'react-router-dom';

import Quotes from './pages/Quotes';
import QuoteDetails from './pages/QuoteDetails';
import NewQuote from './pages/NewQuote';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/quotes' exact>
          <Quotes />
        </Route>
        <Route path='/quotes/:quoteId' >
          <QuoteDetails />
        </Route>
        <Route path='/new-quote' exact>
          <NewQuote />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
