import places from '../../helpers/data/places';
import utilities from '../../helpers/utilities';
import './placesCards.scss';

const printPlacesCard = () => {
  const place = places.getPlaces();
  let domString = '';
  for (let i = 0; i < place.length; i += 1) {
    domString += `
        <div class="card">
            <img src="${place[i].image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${place[i].title}</h5>
                <p class="card-text">${place[i].description}</p>

                <form class="message-container" id="add-message">
                    <div id="inputContainer">
                    <textarea class="form-control col-5 centerTextArea" id="messageArea" placeholder="Enter message here" rows="2" cols="10"></textarea>
                    <button class="btn btn-dark" id="send-button">Send</button>
                    </div>
                </form>
            </div>
        </div>
        `;
  }
  utilities.printToDom('card-zone', domString);
};

export default { printPlacesCard };
