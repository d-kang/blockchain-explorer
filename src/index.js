import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

const $root = document.getElementById('root');


ReactDOM.render(<App />, $root);

if (module.hot) {

  module.hot.dispose(function () {
    // module is about to be replaced
  });

  module.hot.accept(function () {
    // module or one of its dependencies was just updated
  });
}
