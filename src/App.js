import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import { useState, useEffect } from 'react';

function App() {
  const [stores, setStores] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:8085/stores")
    .then((resp) => resp.json())
    .then((data) => setStores(data))
  }, [])

  const storesToDisplay = stores.filter((store) => {
    return store.name.toLowerCase().includes(search.toLowerCase())
  })
  
  function addNewStore(newStore) {
    const updatedStores = [...stores, newStore]
    setStores(updatedStores)
  }

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" alt="Bob's Neighbors"/>
      <h1>Neighbor Stores</h1>
      <Search search={search} onSearch={setSearch}/>
      <NewStoreForm onAddStore={addNewStore}/>
      <StoreList stores={storesToDisplay}/>
    </div>
  );
}

export default App;
