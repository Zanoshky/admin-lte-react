import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Card } from '../.';

const App = () => {
  return (
    <div>
      <Card />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
