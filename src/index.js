import React from 'react';
import ReactDOM from 'react-dom';


const $root = document.getElementById('root');


ReactDOM.render(<div>helloooo world</div>, $root);

if (module.hot) {

  module.hot.dispose(function () {
    // module is about to be replaced
  });

  module.hot.accept(function () {
    // module or one of its dependencies was just updated
  });
}
