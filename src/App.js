import { Route, Switch, Redirect } from 'react-router-dom';

import Quotes from './pages/Quotes';
import QuoteDetails from './pages/QuoteDetails';
import NewQuote from './pages/NewQuote';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path='/quotes' exact>
          <Quotes />
        </Route>
        <Route path='/quotes/:quoteId' >
          <QuoteDetails />
        </Route>
        <Route path='/new-quote' exact>
          <NewQuote />
        </Route>
        <Route path='*' >
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
