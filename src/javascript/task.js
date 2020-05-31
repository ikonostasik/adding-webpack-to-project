import createElement from './utils';

export class Task {
  constructor(card) {
    //Link to a card object (will mutate)
    this.card = card;

    this.cardWrapper = createElement('div','card');
    this.cardBody = createElement('div','card-body');
    this.cardTitle = createElement('h5', 'card-title', card.title);
    this.cardText = createElement('p', 'card-text', card.description);
    this.buttonWrapper = createElement('div', 'card-body-action-buttons')
    this.finishButton = createElement('button', 'btn btn-primary', card.buttonText);
    this.removeButton = createElement('button', 'btn btn-danger', 'Remove');

    //binding context to functions in order to have "this" 
    this.changeTaskStateHandler = this.changeTaskStateHandler.bind(this);
    this.deleteTaskHandler = this.deleteTaskHandler.bind(this);

    this.initTaskElement();    
  }

  changeTaskStateHandler() {
    this.card.finished = !this.card.finished;      
    if(this.card.finished) {
      this.cardBody.className += ' success';
      this.card.description = 'Reset';
    } else {
      this.cardBody.className = this.cardBody.className.split('success').join('');
      this.card.description = 'Complete';
    }

    this.finishButton.textContent = this.card.description;
  }

  deleteTaskHandler() {
    if(confirm('Are you sure you want to delete this task?')) {
      this.finishButton.removeEventListener('click', this.changeTaskStateHandler);
      this.removeButton.removeEventListener('click', this.deleteTaskHandler);

      this.cardWrapper.remove();
    }
  }


  initTaskElement() {
    if(this.card.finished) {
      this.cardBody.className += ' success';
    };

    this.finishButton.addEventListener('click', this.changeTaskStateHandler)
    this.removeButton.addEventListener('click', this.deleteTaskHandler)

    this.buttonWrapper.insertAdjacentElement('beforeend', this.finishButton);
    this.buttonWrapper.insertAdjacentElement('beforeend', this.removeButton);

    this.cardBody.insertAdjacentElement('beforeend', this.cardTitle);
    this.cardBody.insertAdjacentElement('beforeend', this.cardText);
    this.cardBody.insertAdjacentElement('beforeend', this.buttonWrapper);

    this.cardWrapper.insertAdjacentElement('beforeend', this.cardBody);
    }

    get el() {
      return this.cardWrapper;
    }

}