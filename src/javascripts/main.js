import '../styles/main.scss';
import 'bootstrap';
import placesCards from './components/placesCards/placesCards';
import submitMessage from './components/submitMessage/submitMessage';

const init = () => {
  placesCards.printPlacesCard();
  submitMessage.submitMessage();
  // submitMessage.test();
};

init();
