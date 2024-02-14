import { GamemathList, gameList } from './data';

class GamemathForm {
  constructor(onGameCreatedCallback) {
    this.counter = 0;
    this.onGameCreatedCallback = onGameCreatedCallback;
    this.initializeForm();
  }

  initializeForm() {
    // Создание формы
    this.form = document.createElement('form');
    this.form.id = 'GamemathForm';
    
    // Создание элементов формы
    this.gamenameLabel = document.createElement('label');
    this.gamenameLabel.textContent = 'Enter game name:';
    this.gamenameInput = document.createElement('input');
    this.gamenameInput.type = 'text';
    this.gamenameInput.name = 'gamenamelist';
    this.gamenameInput.required = true;

    this.mathListLabel = document.createElement('label');
    this.mathListLabel.textContent = 'Choose MathList:';
    this.mathListSelect = document.createElement('select');
    this.mathListSelect.name = 'mathList';

    // Заполнение списка MathList
    for (const mathItem of GamemathList) {
      const option = document.createElement('option');
      option.value = mathItem.id;
      option.textContent = mathItem.name;
      this.mathListSelect.appendChild(option);
    }

    // Создание кнопки отправки формы
    this.submitButton = document.createElement('input');
    this.submitButton.type = 'submit';
    this.submitButton.value = 'Send';

    // Добавление элементов к форме
    this.form.appendChild(this.gamenameLabel);
    this.form.appendChild(this.gamenameInput);
    this.form.appendChild(document.createElement('br'));
    this.form.appendChild(this.mathListLabel);
    this.form.appendChild(this.mathListSelect);
    this.form.appendChild(document.createElement('br'));
    this.form.appendChild(this.submitButton);

    // Добавление формы к документу
    document.body.appendChild(this.form);

    // Добавление обработчика события отправки формы
    this.form.addEventListener('submit', (event) => this.handleSubmit(event));
  }

  handleSubmit(event) {
    event.preventDefault();

    // Получение введенного имени
    const enteredGameName = this.gamenameInput.value;
    const isGameNameExists = gameList.some((game) => game.name === enteredGameName);

    if (isGameNameExists) {
      alert('This name is already in use');
    } else {
      // Получение выбранного MathList
      const selectedMathListId = this.mathListSelect.value;
      const selectedMathList = GamemathList.find((item) => item.id == selectedMathListId);

      // Генерация уникального ID для игры
      while (gameList.some((game) => game.id === this.counter)) {
        this.counter++;
      }

      // Создание объекта игры
      const createdGame = {
        id: this.counter,
        name: enteredGameName,
        math: selectedMathListId,
      };

      // Добавление игры в gameList
      gameList.push(createdGame);

      // Добавление созданной игры в выпадающий список другой формы (если есть callback)
      if (this.onGameCreatedCallback) {
        this.onGameCreatedCallback(createdGame);
      }

      console.log('Game name:', enteredGameName);
      console.log('Selected MathList ID:', selectedMathListId);
      console.log('Selected MathList Percent List:', selectedMathList.pctList);

      console.log('Form submitted with id:', this.counter);

      this.counter++;
    }
  }
}

export default GamemathForm;