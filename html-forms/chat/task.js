const chatWidget = document.querySelector('.chat-widget');
const chatInput = document.getElementById('chat-widget__input');
const message = document.querySelector('.chat-widget__messages');
const time = messageTime()


chatWidget.onclick = function() {
	chatWidget.classList.add('chat-widget_active');
}

chatInput.addEventListener('focus', () => {
    interval = noMessages();
})

chatInput.addEventListener('blur', () => {
  clearInterval(interval);
})

chatInput.addEventListener('keydown', el => {
	if (el.key === 'Enter' && chatInput.value !== '') {
		message.innerHTML += `
          <div class="message message_client">
            <div class="message__time">
              ${time}
            </div>
            <div class="message__text">
              ${chatInput.value}
            </div>
          </div>
        `;

    chatInput.value = '';
     
       timerId = setTimeout(() => {
		message.innerHTML += `
          <div class="message">
            <div class="message__time">
              ${time}
            </div>
            <div class="message__text">
              ${messageBot()}
            </div>
          </div>
        `;
        scroll();
    }, 1000) 
   }    
  scroll();
  
  /*if (chatInput.value = '') {
      let intervalId = setInterval(() => {
    message.innerHTML += `
          <div class="message">
            <div class="message__time">
              ${time}
            </div>
            <div class="message__text">
              Чего не пишешь?
            </div>
          </div>
        `;
        scroll();
      }, 10000)} */

}); 


 function messageBot() {
 	const messages = [
        'Вам не рады',
        'Решайте проблему сами',
        'Не хочу разговаривать',
        'По голове себе постучи',
        'Атстань'
       ],
       index = Math.floor(Math.random() * messages.length);

  return messages[index];
 }
	

function messageTime() {
	let currentDate = new Date();
	let hours = 
	currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
	let minutes = 
	currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;

	return `${hours}:${minutes}`
}

function scroll() {
  const message = document.querySelectorAll('.message');
  message[message.length - 1].scrollIntoView(false);
}

function noMessages() {  
  let intervalId = setInterval(() => {
    message.innerHTML += `
          <div class="message">
            <div class="message__time">
              ${time}
            </div>
            <div class="message__text">
              Чего не пишешь?
            </div>
          </div>
        `;
        scroll();
      }, 10000)
  return intervalId;  
}











