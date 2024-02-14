import { gameList, setList } from './data';
import GamemathForm from './gamemathform';

class SetForm {
  constructor() {
    this.counter = 0;
    this.initializeForm();
    this.initializeGameList(); // Инициализация списка игр в начале
  }

  initializeForm() {
    // Создание формы
    this.form = document.createElement('form');
    this.form.id = 'setForm';

    // Создание элементов формы
    this.setnameLabel = document.createElement('label');
    this.setnameLabel.textContent = 'Enter set name:';
    this.setnameInput = document.createElement('input');
    this.setnameInput.type = 'text';
    this.setnameInput.name = 'setnamelist';
    this.setnameInput.required = true;

    this.GameListLabel = document.createElement('label');
    this.GameListLabel.textContent = 'Choose GameList:';
    this.GameListSelect = document.createElement('select');
    this.GameListSelect.name = 'GameList';
    this.GameListSelect.multiple = true;

    // Создание кнопки отправки формы
    this.submitButton = document.createElement('input');
    this.submitButton.type = 'submit';
    this.submitButton.value = 'Send';

    // Добавление элементов к форме
    this.form.appendChild(this.setnameLabel);
    this.form.appendChild(this.setnameInput);
    this.form.appendChild(document.createElement('br'));
    this.form.appendChild(this.GameListLabel);
    this.form.appendChild(this.GameListSelect);
    this.form.appendChild(document.createElement('br'));
    this.form.appendChild(this.submitButton);

    // Добавление формы к документу
    document.body.appendChild(this.form);

    // Инициализация GamemathForm с передачей callback-функции
    this.gamemathForm = new GamemathForm((createdGame) => {
      // Обновление GameListSelect в SetForm с созданной игрой
      const option = document.createElement('option');
      option.value = createdGame.id;
      option.textContent = createdGame.name;
      this.GameListSelect.appendChild(option);
    });

    // Добавление обработчика события отправки формы
    this.form.addEventListener('submit', (event) => this.handleSubmit(event));
  }

  initializeGameList() {
     // Инициализация GameListSelect с существующими играми
    for (const game of gameList) {
      const option = document.createElement('option');
      option.value = game.id;
      option.textContent = game.name;
      this.GameListSelect.appendChild(option);
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    // Получение введенного имени для набора
    const enteredsetName = this.setnameInput.value;
    const issetNameExists = setList.some((set) => set.name === enteredsetName);

     // Генерация уникального ID для набора
    while (setList.some((set) => set.id === this.counter)) {
      this.counter++;
    }

    if (issetNameExists) {
      alert('This name is already in use');
    } else {
      // Получение выбранных элементов из списка игр
      const selectedGameListOptions = this.GameListSelect.selectedOptions;
      var selectedGameNames = Array.from(selectedGameListOptions).map(option => option.textContent);
      const selectedGameListIds = Array.from(selectedGameListOptions).map((option) => option.value);

      // Создание объекта набора
      const createdSet = {
        id: this.counter,
        name: enteredsetName,
        gamesInSet: selectedGameListIds,
      };

      // Добавление набора в setList
      setList.push(createdSet);

      console.log('Set name:', enteredsetName);
      console.log('Selected GameList IDs:', selectedGameListIds);
      console.log('Selected GameList Names:', selectedGameNames);
      console.log('Form submitted with id:', this.counter);

      this.counter++;
    }
  }
}

const setFormInstance = new SetForm();