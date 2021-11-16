import './App.css';
import { useState, useContext } from 'react';
import ServiceContext from './common/ServiceContext';

function App() {
  const serviceContext = useContext(ServiceContext);
  const [searchText, setSearchText] = useState('');
  const [entries, setEntries] = useState([]);

  const transfertToEntries = (data) =>{
    let nouveauTableau = data.map(x => Object.values(x).join('-'));
    setEntries(nouveauTableau);
  }

  const handleSearch = () => {serviceContext.apiService.getDataFromSearch(searchText,(data) => {transfertToEntries(data)});};
  
  const handleList = () => {serviceContext.apiService.getDataFromList((data) => {transfertToEntries(data)});}
  return (
    <div className="App">
      <h1>Annuaire</h1>
      <input type="text" value= {searchText} onChange={(e) => setSearchText(e.target.value)}/>
      <button onClick={handleSearch}>Chercher</button>
      <button onClick={handleList}>Tout</button>
      <div>{entries.map(x => <div>{x}</div>)}</div>
    </div>
  );
}

export default App;
