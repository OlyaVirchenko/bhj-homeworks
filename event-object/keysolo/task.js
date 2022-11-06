class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timeElement = container.querySelector('.status__time');
    
    this.reset();
    
    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    document.addEventListener('keyup', e => {
     if (e.key.toUpperCase() === this.currentSymbol.textContent.toUpperCase()) {
        this.success()
      } else {
        this.fail()
      }
   });   
      /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
     */
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }


  setNewWord() {
    const word = this.getWord();

    let wordLength = Number(word.length);
    
    this.timeElement.textContent = wordLength;

    /*if (--wordLength === 0) {
          this.timeElement.textContent = wordLength
        } else {
          this.timeElement.textContent = wordLength
        }*/

    this.timeInterval = setInterval(() => {
       wordLength -= 1;
       if (wordLength === 0) {
        this.timeElement.textContent = wordLength
      } else if(wordLength < 0) {
        wordLength = 0;
      } else {
        this.timeElement.textContent = wordLength
      }
      //clearInterval(this.timeInterval)
    } , 1000);

    let time = Number(`${word.length}000`);

    this.timeout = setTimeout((() => {
      this.fail()
     }),time)



    this.renderWord(word);
  }

  

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }



}

new Game(document.getElementById('game'))







