//seccion import
// react , archivos proprios, sass, imagens

import '../styles/App.scss';
import data from '../data/data.json';
import { useState } from 'react';

function App() {
  const [contactList, setContactList] = useState(data);
  return (
    <div>
      <main>
        <h1>Frase de Friends</h1>
        <input type='text' />
        filtrar por frase:
        <select name='select'>
          <option value=''></option>
          <option value=''></option>
          <option value=''></option>
        </select>
      </main>
    </div>
  );
}

export default App;
