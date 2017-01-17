import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyCk-XMzrSEW2TK0ic3RcZ8rKPF5XDqfgnE';

// Create a new React component
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
);
}

// Put in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
