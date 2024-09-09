import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import List from './List';
import "./Main.css"
import Header from './Header';
import Footer from './Footer';

import "bootstrap/dist/js/bootstrap.bundle.js"
import "bootstrap/dist/css/bootstrap.min.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <div>
  //   <Header />
  //   <List />
  //   <br />
  //   <List />
  //   <Footer />
  // </div>
  <App/>
);

// setTimeout(()=>{
//   root.unmount();
// },2000)

