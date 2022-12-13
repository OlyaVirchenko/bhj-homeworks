const btnClose = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');



btnClose.addEventListener('click', el => {
	modal.classList.remove('modal_active')
	setCookie('modalWindow', 'open')
})

if (!getCookie('modalWindow')) {
	modal.classList.add('modal_active')
} else if (getCookie('modalWindow') === 'close') {
	modal.classList.remove('modal_active') 
} else if (getCookie('modalWindow') === 'open') {
	modalContent.classList.remove('modal_active');
} else {
	setCookie('modalWindow', 'open');
}

function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}













