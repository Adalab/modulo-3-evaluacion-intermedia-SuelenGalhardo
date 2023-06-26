//seccion import
// react , archivos proprios, sass, imagens

import '../styles/App.scss';
import data from '../data/data.json';
//import { useState } from 'react';

function App() {
  // const [contactList, setContactList] = useState(data);
  return (
    <div>
      <header>
        <h1>Frase de Friends</h1>
      </header>
      <main>
        <form action=''>
          <label htmlFor=''>Filtrar por frase:</label>
          <input type='text' />

          <label for='personaje'>Filtrar por Personaje</label>
          <select name='personaje' id=''>
            <option value=''>todos</option>
            <option value='Joey'>Joey</option>
            <option value='Phoebe'>Phoebe</option>
            <option value='Rachel'>Rachel</option>
            <option value='Ross'>Ross</option>
          </select>
        </form>
        <ul></ul>
      </main>
    </div>
  );
}

export default App;
