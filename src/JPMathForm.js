import { JackpotmathList } from './data';

var secondformCounter = 0;

var JPgamelist = [];

var form = document.createElement('form');
form.id = 'JPmathForm';

var JPgamenameLabel = document.createElement('label');
JPgamenameLabel.textContent = 'Enter game name:';
var JPgamenameInput = document.createElement('input');
JPgamenameInput.type = 'text';
JPgamenameInput.name = 'JPgamenamelist';
JPgamenameInput.required = true;

var JPmathListLabel = document.createElement('label');
JPmathListLabel.textContent = 'Choose JPMathList:';
var JPmathListSelect = document.createElement('select');
JPmathListSelect.name = 'JPmathList';

// Заполняем список существующими JPMathList
for (var i = 0; i < JackpotmathList.length; i++) {
  var option = document.createElement('option');
  option.value = JackpotmathList[i].id;
  option.textContent = JackpotmathList[i].name;
  JPmathListSelect.appendChild(option);
}

// Создание кнопки отправки формы
var submitButton = document.createElement('input');
submitButton.type = 'submit';
submitButton.value = 'Send';

// Добавление элементов к форме
form.appendChild(JPgamenameLabel);
form.appendChild(JPgamenameInput);
form.appendChild(document.createElement('br'));
form.appendChild(JPmathListLabel);
form.appendChild(JPmathListSelect);
form.appendChild(document.createElement('br')); 
form.appendChild(submitButton);

// Добавление формы к документу
document.body.appendChild(form);

// Добавление обработчика события отправки формы
form.addEventListener('submit', function(event) {
  event.preventDefault();
  var enteredJPgameName = JPgamenameInput.value;
  var isJPGameNameExists = JPgamelist.find(item => item.name == enteredJPgameName);

  if (isJPGameNameExists) {
    alert('This name is already in use');
  } else { 
    JPgamelist.push({ name: enteredJPgameName });

    var selectedJPMathListId = JPmathListSelect.value;
    var selectedJPMathList = JackpotmathList.find(item => item.id == selectedJPMathListId);

    console.log('Game name:', enteredJPgameName);
    console.log('Game list:', JPgamelist);
    console.log('Selected JPMathList ID:', selectedJPMathListId);
    console.log('Selected JPMathList Percent List:', selectedJPMathList.pctList);

    console.log('Form submitted with id:', secondformCounter);

    secondformCounter++;
  }
});