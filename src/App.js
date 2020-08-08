import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav store={props.store} />
      <Main store={props.store} />
      <Footer />
    </div>
  )
}

export default App;
