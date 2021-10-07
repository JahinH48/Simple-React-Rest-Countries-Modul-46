
import './App.css';
import Countries from './components/Countries/Countries';




function App() {
  return (
    <div className="App">
      <Countries></Countries>

    </div>
  );
}




export default App;
/*
import logo from './logo.svg';
import { useEffect, useState } from 'react';

<Countries></Countries>


function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <h2>Traveling Around The World</h2>
      <h4>Countries Available : {countries.length}</h4>
      {
        countries.map(cuntry => <Country name={cuntry.name} region={cuntry.region}></Country>)
      }
    </div>
  )
}


function Country(props) {
  return (
    <div>
      <h2>Name : {props.name}</h2>
      <p>Region : {props.region}</p>
    </div>
  )
} */