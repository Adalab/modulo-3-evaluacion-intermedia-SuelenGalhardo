import '../styles/App.scss';
//import data from '../data/data.json';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    fetch(
      'https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json'
    )
      .then((response) => response.json())
      .then((data) => {
        setContactList(data);
      });
  }, []);

  const renderContactlist = () => {
    return contactList.map((eachQuote, index) => (
      <li key={index}>
        <p>
          {eachQuote.quote}
          <span>{eachQuote.character}</span>
        </p>
      </li>
    ));
  };

  return (
    <div>
      <header>
        <h1>Frase de Friends</h1>
      </header>
      <main>
        <form action=''>
          <label htmlFor=''>Filtrar por frase:</label>
          <input type='text' />

          <label htmlFor='personaje'>Filtrar por Personaje</label>
          <select name='personaje' id=''>
            <option value=''>todos</option>
            <option value='Joey'>Joey</option>
            <option value='Phoebe'>Phoebe</option>
            <option value='Rachel'>Rachel</option>
            <option value='Ross'>Ross</option>
          </select>
        </form>
        <ul>{renderContactlist()}</ul>
      </main>
    </div>
  );
}

export default App;
