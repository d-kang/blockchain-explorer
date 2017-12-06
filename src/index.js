import hello from './app.js';
console.log('message:', hello);


if (module.hot) {

  module.hot.dispose(function () {
    // module is about to be replaced
  });

  module.hot.accept(function () {
    // module or one of its dependencies was just updated
  });
}

const $body = document.getElementById('root');

$body.append('hello')
