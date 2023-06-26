import '../styles/App.scss';
//import data from '../data/data.json';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [contactList, setContactList] = useState([]);
  const [filterQuote, setFilterQuote] = useState('');
  const [filterCharacter, setFilterChatacter] = useState('all');
  const [newQuote, setNewQoute] = useState({});

  useEffect(() => {
    fetch(
      'https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json'
    )
      .then((response) => response.json())
      .then((dataApi) => {
        setContactList(dataApi);
      });
  }, []);

  const handleCharacter = (ev) => {
    setFilterChatacter(ev.target.value);
  };

  const handleClick = () => {
    setContactList([...contactList, newQuote]);
    setNewQoute({
      //  quote;
      // character;
    });
  };
  //  ... newQuote es l copia
  const handleNewQuote = (ev) => {
    setNewQoute({ ...newQuote, [ev.target.name]: ev.target.value });
  };

  const handleQuote = (ev) => {
    setFilterQuote(ev.target.value);
  };

  // const handleSeach
  //para pintar una lista, hay que hacer un map, simpre, henderizar
  //filter simpre antes del map,
  const renderContactlist = () => {
    return contactList
      .filter(
        (element) => element.quote.toLowerCase().incluides(filterQuote.toLowerCase())
        //&& element.character.incluides(filterCharacter) de esta forma te ahorras el otro filter
      )
      .filter((element) => {
        return element.character.incluides(filterCharacter);
        /*if (filterCharacter === 'all') {
          return true;
        } else {
          return element.character === filterCharacter;
        }*/
      })
      .map((element, index) => (
        <li key={index}>
          <h4>{element.quote}</h4>
          <span>{element.character}</span>
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
          <input type='text' value={filterQuote} onInput={handleQuote} />

          <label htmlFor='personaje'>Filtrar por Personaje</label>
          <select name='personaje' id='' onChange={handleCharacter}>
            <option value='all'>todos</option>
            <option value='Joey'>Joey</option>
            <option value='Phoebe'>Phoebe</option>
            <option value='Rachel'>Rachel</option>
            <option value='Ross'>Ross</option>
            <option value='Monica'>Monica</option>
            <option value='Chandler'>Chandler</option>
          </select>
        </form>
        <ul>{renderContactlist()}</ul>

        <form action=''>
          <label htmlFor=''>Frase</label>
          <input type='text' name='quote' onInput={handleNewQuote} value={newQuote.quote} />
          <label htmlFor=''>Personaje</label>
          <input type='text' name='character' onInput={handleNewQuote} value={newQuote.character} />
          <button onClick={handleClick}>Añadir la nueva frase</button>
        </form>
      </main>
    </div>
  );
}

export default App;
