import '../styles/main.scss';
import 'bootstrap';
// import $ from 'jquery';

const init = () => {
  // $('.btn').on('click', (console.log('hi')));
  document.getElementById('btn').addEventListener('click', (console.log('hi.')));
};

init();
