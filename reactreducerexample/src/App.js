import './App.css';
import React from 'react';
import { CounterProvider } from './CounterContext';
import CounterComponent from './CounterComponent';

//Se utiliza el CounterProvider para poder envolver el componente. 
function App() {
  return (
    <CounterProvider>
      <div className="App">
        <CounterComponent />
      </div>
    </CounterProvider>
  );
}

export default App;
