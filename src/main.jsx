import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoApp } from './TodoApp.jsx';
import { PokemonApp } from './PokemonApp.jsx';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from '../src/store';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </React.StrictMode>,
)
