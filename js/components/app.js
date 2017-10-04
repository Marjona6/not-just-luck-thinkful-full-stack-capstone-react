import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// import all the components
import Header from './header';
import Footer from './footer';

export default function App(props) {
    return (
        <div>
            <Header />
            <Footer />
        </div>
    );
};