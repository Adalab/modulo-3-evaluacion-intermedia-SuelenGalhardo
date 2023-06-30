import '../styles/App.scss';
//import data from '../data/data.json';
import imgFriends from '../images/sofafriends.jpg';
import { useState } from 'react';
import { useEffect } from 'react';
//import LocalStorage from '../services/locaStorage';

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
      quote: '',
      character: '',
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
    return (
      contactList
        .filter(
          (element) => element.quote.toLowerCase().includes(filterQuote.toLowerCase())
          //&& element.character.incluides(filterCharacter) de esta forma te ahorras el otro filter
        )
        .filter((element) => {
          return element.character.includes(filterCharacter);
          /*if (filterCharacter === 'all') {
          return true;
        } else {
          return element.character === filterCharacter;
        }*/
        })
        //import data from '../data/data.json';
        .map((element, index) => (
          <li className='main__li' key={index}>
            <h4>{element.quote}</h4>
            <span>{element.character}</span>
          </li>
        ))
    );
  };

  return (
    <div>
      <header className='header'>
        <img className='header__img' src={imgFriends} alt='' />
        <h1 className='header__title'>Frase de Friends</h1>
      </header>

      <main className='main'>
        <section className='main__section'>
          <form className='main__form' action=''>
            <label className='main__label' htmlFor='filter'>
              Filtrar por frase:
            </label>
            <input
              className='main__input'
              type='text'
              id='filter'
              value={filterQuote}
              onInput={handleQuote}
            />

            <label className='main__label' htmlFor='personajeF'>
              Filtrar por Personaje
            </label>
            <select
              className='main__select'
              name='personaje'
              id='personajeF'
              onChange={handleCharacter}
            >
              <option value='all'>todos</option>
              <option value='Joey'>Joey</option>
              <option value='Phoebe'>Phoebe</option>
              <option value='Rachel'>Rachel</option>
              <option value='Ross'>Ross</option>
              <option value='Monica'>Monica</option>
              <option value='Chandler'>Chandler</option>
            </select>
          </form>
        </section>
        <section className='main__section'>
          <ul className='main__list'>{renderContactlist()}</ul>
        </section>
        <section className='main__section'>
          <form className='' action=''>
            <label className='main__label' htmlFor='frase'>
              {' '}
              Añade la Frase
            </label>
            <input
              className='main__input'
              type='text'
              id='frase'
              name='quote'
              onInput={handleNewQuote}
              value={newQuote.quote}
            />
            <label className='main__label' htmlFor='personaje'>
              Añade el Personaje
            </label>
            <input
              className='main__input'
              type='text'
              id='personaje'
              name='character'
              onInput={handleNewQuote}
              value={newQuote.character}
            />
            <button className='main__button' onClick={handleClick}>
              Añadir la nueva frase
            </button>
          </form>
        </section>
      </main>
      <footer className='footer'>
        <p className='footer__text'>Adalab 2023 © Friends</p>
      </footer>
    </div>
  );
}

export default App;
