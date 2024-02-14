import { GamemathList, gameList } from './data';

class GamemathForm {
  constructor(onGameCreatedCallback) {
    this.counter = 0;
    this.onGameCreatedCallback = onGameCreatedCallback;
    this.initializeForm();
  }

  initializeForm() {
    // Creating a Form
    this.form = document.createElement('form');
    this.form.id = 'GamemathForm';
    
    // Creating Form Elements
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

    // Filling the MathList
    for (const mathItem of GamemathList) {
      const option = document.createElement('option');
      option.value = mathItem.id;
      option.textContent = mathItem.name;
      this.mathListSelect.appendChild(option);
    }

    // Creating a form submit button
    this.submitButton = document.createElement('input');
    this.submitButton.type = 'submit';
    this.submitButton.value = 'Send';

    // Adding Elements to a Form
    this.form.appendChild(this.gamenameLabel);
    this.form.appendChild(this.gamenameInput);
    this.form.appendChild(document.createElement('br'));
    this.form.appendChild(this.mathListLabel);
    this.form.appendChild(this.mathListSelect);
    this.form.appendChild(document.createElement('br'));
    this.form.appendChild(this.submitButton);

    // Adding a form to a document
    document.body.appendChild(this.form);

    // Adding a form submit event handler
    this.form.addEventListener('submit', (event) => this.handleSubmit(event));
  }

  handleSubmit(event) {
    event.preventDefault();

    // Retrieving the entered name
    const enteredGameName = this.gamenameInput.value;
    const isGameNameExists = gameList.some((game) => game.name === enteredGameName);

    if (isGameNameExists) {
      alert('This name is already in use');
    } else {
      // Getting the selected MathList
      const selectedMathListId = this.mathListSelect.value;
      const selectedMathList = GamemathList.find((item) => item.id == selectedMathListId);

      // Generating a unique ID for the game
      while (gameList.some((game) => game.id === this.counter)) {
        this.counter++;
      }

      // Creating a Game Object
      const createdGame = {
        id: this.counter,
        name: enteredGameName,
        math: selectedMathListId,
      };

      // Adding a game to gameList
      gameList.push(createdGame);

      // Adding the created game to the drop-down list of another form (if there is a callback)
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