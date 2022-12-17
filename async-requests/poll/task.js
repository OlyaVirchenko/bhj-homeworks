loaderGet('https://students.netoservices.ru/nestjs-backend/poll', requestHandler);
const pollTitle = document.querySelector('#poll__title');
const pollAnswers = document.querySelector('#poll__answers');

function requestHandler(response) {
	  if (pollAnswers.firstChild != null) {
    while (pollAnswers.firstChild) {
      pollAnswers.removeChild(pollAnswers.firstChild);
    }

    if (response.data) {
      pollTitle.textContent = response.data.title;
      pollAnswers.dataset.id = response.id;
      for (let i = 0; i < response.data.answers.length; i += 1) {
        const button = document.createElement('button');
        button.textContent = response.data.answers[i];
        button.dataset.index = i;
        pollAnswers.appendChild(button);
      }
    } else if (response.status) {
      for (let i = 0; i < response.stat.length; i += 1) {
        const div = document.createElement('div');
        div.innerText = `${response.stat[i].answer} : ${response.stat[i].votes}`;
        pollAnswers.appendChild(div);
      }
    }
  }
}


pollAnswers.addEventListener('click', (e) => {
  if (e.target.parentNode === pollAnswers) {
    alert('Спасибо, ваш голос засчитан!');
  }
});

function loaderGet(url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url, true);

  xhr.responseType = '';

  xhr.send();
  xhr.onload = function () {
    if (xhr.status != 200) {
      alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {
      return callback(JSON.parse(xhr.response));
    }
  };
}




















