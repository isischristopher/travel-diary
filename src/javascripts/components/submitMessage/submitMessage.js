import $ from 'jquery';
// import utilities from '../../helpers/utilities';

// const diaryInput = [];

const getValue = () => {
  // const messageText = document.getElementById('messageText').value;
  // diaryInput.push(messageText);
  const inputVal = $('#messageText').val();
  console.log(inputVal);
};

/* const printDiary = () => {
  const messageText = document.getElementById('messageText').value;
  let domString = '';
  domString += `
    <div class="diary-container">
        <h4 id="diaryLocation">${diaryInput.title}</h4>
        <p id="diaryMessage">${messageText}</p>
    </div>
    `;
  console.log(domString);

  // utilities.printToDom('diary-zone', domString);
};
*/
/* const submitMessage = () => {
  $('#send-button').on('click', (event) => {
    event.preventDefault();
    const inputVal = $('#messageText').val();
    diaryInput.push({
      title: 'hi',
      messageContent: inputVal,
    });
    // printDiary();
    console.log(diaryInput);
  });
}; */

const submitMessage = () => {
  const sendButton = document.getElementById('send-button');
  sendButton.addEventListener('click', getValue());
  // printDiary();
};

export default { submitMessage };
