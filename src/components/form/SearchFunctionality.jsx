import { useState } from 'react';
import './Search.css';

function SearchBar(props) {
  return <input type="search" onChange={props.onUpdateSearch} />;
};


function Overview({ currentTerm }) {
  return <p>Currently searching for {currentTerm ? `"${currentTerm}"`: "..."}</p>;
};


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  function updateSearchTermHandler(event) {
    setSearchTerm(event.target.value);
  };
  return (
    <div className='container'>
      <SearchBar onUpdateSearch={updateSearchTermHandler} />
      <Overview currentTerm={searchTerm} />
    </div>
  );
};

export default App;