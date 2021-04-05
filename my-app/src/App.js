import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import Routes from './config/routes'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
