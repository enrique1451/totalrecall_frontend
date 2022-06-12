import './App.css';
import React from 'react';
import UserProvider from './Components/UserProvider';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">      
      <UserProvider />
    </div>
  );
}

export default App;