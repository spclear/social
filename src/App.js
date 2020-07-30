import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <Main
          postsData={props.postsData}
          dialogsData={props.dialogsData}
        />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
