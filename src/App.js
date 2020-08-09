import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './Routes/Routes';
import Navbar from './Navbar/Navbar';
import store from './TodoRedux/store';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
          <Routes />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
