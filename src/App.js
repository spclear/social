import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'
import AppLoader from './components/common/AppLoader/AppLoader';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Nav />
      <Main />
      <Footer />
    </div>
  )
}

export default App;
