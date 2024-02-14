import { gameList, setList } from './data';
import GamemathForm from './gamemathform';

class SetForm {
  constructor() {
    this.counter = 0;
    this.initializeForm();
    this.initializeGameList(); // Initializing the list of games at the beginning
  }

  initializeForm() {
    // Creating a Form
    this.form = document.createElement('form');
    this.form.id = 'setForm';

    // Creating Form Elements
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

    // Creating a form submit button
    this.submitButton = document.createElement('input');
    this.submitButton.type = 'submit';
    this.submitButton.value = 'Send';

    // Adding Elements to a Form
    this.form.appendChild(this.setnameLabel);
    this.form.appendChild(this.setnameInput);
    this.form.appendChild(document.createElement('br'));
    this.form.appendChild(this.GameListLabel);
    this.form.appendChild(this.GameListSelect);
    this.form.appendChild(document.createElement('br'));
    this.form.appendChild(this.submitButton);

    // Adding a form to a document
    document.body.appendChild(this.form);

    // Initializing GamemathForm with passing a callback function
    this.gamemathForm = new GamemathForm((createdGame) => {
      // Update GameListSelect in SetForm with created game
      const option = document.createElement('option');
      option.value = createdGame.id;
      option.textContent = createdGame.name;
      this.GameListSelect.appendChild(option);
    });

    // Adding a form submit event handler
    this.form.addEventListener('submit', (event) => this.handleSubmit(event));
  }

  initializeGameList() {
     // Initializing GameListSelect with existing games
    for (const game of gameList) {
      const option = document.createElement('option');
      option.value = game.id;
      option.textContent = game.name;
      this.GameListSelect.appendChild(option);
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    // Retrieving the entered name for dialing
    const enteredsetName = this.setnameInput.value;
    const issetNameExists = setList.some((set) => set.name === enteredsetName);

     // Generating a unique ID for a set
    while (setList.some((set) => set.id === this.counter)) {
      this.counter++;
    }

    if (issetNameExists) {
      alert('This name is already in use');
    } else {
      // Getting selected items from the games list
      const selectedGameListOptions = this.GameListSelect.selectedOptions;
      var selectedGameNames = Array.from(selectedGameListOptions).map(option => option.textContent);
      const selectedGameListIds = Array.from(selectedGameListOptions).map((option) => option.value);

      // Creating a Set Object
      const createdSet = {
        id: this.counter,
        name: enteredsetName,
        gamesInSet: selectedGameListIds,
      };

      // Adding a set to setList
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