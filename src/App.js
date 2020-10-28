import logo from './logo.svg';
import './App.css';
import { Button } from 'govuk-react';

function App() {
  const MyComponent = ({title}) => (<div>
    <h1>{title}</h1>
    <Button />
  </div>)
  
  return (
    <div>
      <MyComponent title="Emmas Button" > Blah blah Blah </ MyComponent >
    </div>
  );
}

export default App;
