import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './Header';
import Page from './Page';
import Footer from './Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Page/>
    <App />
    <Footer/>
  </React.StrictMode>
);



