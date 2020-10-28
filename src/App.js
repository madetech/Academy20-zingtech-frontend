import logo from './logo.svg';
import './App.css';
import Page from '@govuk-react/page';
import BackLink from '@govuk-react/back-link';
import { H1 } from '@govuk-react/heading';

function App() {
  return (
    <div>
      <Page beforeChildren={<BackLink href="#" />}>
        <H1>Page title</H1>
      </Page>   
    </div>
  );
}

export default App;
