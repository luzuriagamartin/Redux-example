import React from 'react'; //No es necesario que este.
import Header from './components/Header/Header';
import AddBook from './components/AddBook/AddBook';
import Library from './components/Library/Library';
import './index.css';

function App() {
  return (
    <div className="App">
     <Header />
     <AddBook />
     <Library />
    </div>
  );
}

export default App;
