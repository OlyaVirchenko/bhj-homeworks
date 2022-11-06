const fontSize = document.querySelectorAll('.font-size');
const fontColor = document.querySelectorAll('.book__control_color > .color');
const wallColor = document.querySelectorAll('.book__control_background > .color');
const content = document.querySelector('.book');

fontSize.forEach(item => {
    item.addEventListener('click', el => {
      el.preventDefault();  
        fontSize.forEach(item => item.classList.remove('font-size_active'))
        if (el.target.dataset.size === 'small') {
            el.target.classList.add('font-size_active');
            content.classList.remove('book_fs-big');
            content.classList.add('book_fs-small');
        } else if (el.target.dataset.size === 'big') {
            el.target.classList.add('font-size_active');
            content.classList.remove('book_fs-small');
            content.classList.add('book_fs-big');
        } else {
            el.target.classList.add('font-size_active');
            content.classList.remove('book_fs-small');
            content.classList.remove('book_fs-big');
        }
    });
});


fontColor.forEach(item => {
    item.addEventListener('click', el => {
      el.preventDefault();  
        fontColor.forEach(text => text.classList.remove('color_active'))
        if (el.target.dataset.textColor === 'gray') {
            el.target.classList.add('color_active');
            content.classList.remove('book_color-whitesmoke');
            content.classList.remove('book_color-black');
            content.classList.add('book_color-gray');
        } else if (el.target.dataset.textColor === 'black') {
            el.target.classList.add('color_active');
            content.classList.remove('book_color-whitesmoke');
            content.classList.remove('book_color-gray');
            content.classList.add('book_color-black');
        } else {
            el.target.classList.add('color_active');
            content.classList.remove('book_color-gray');
            content.classList.remove('book_color-black');
            content.classList.add('book_color-whitesmoke');
        }
    });
});


wallColor.forEach(item => {
    item.addEventListener('click', el => {
      el.preventDefault();  
        wallColor.forEach(bg => bg.classList.remove('color_active'))
        if (el.target.dataset.bgColor === 'gray') {
            el.target.classList.add('color_active');
            content.classList.remove('book_bg-black');
            content.classList.remove('book_bg-white');
            content.classList.add('book_bg-gray');
        } else if (el.target.dataset.bgColor === 'black') {
            el.target.classList.add('color_active');
            content.classList.remove('book_bg-gray');
            content.classList.remove('book_bg-white');
            content.classList.add('book_bg-black');
        } else {
            el.target.classList.add('color_active');
            content.classList.remove('book_bg-gray');
            content.classList.remove('book_bg-black');
            content.classList.add('book_bg-white');
        }
    });
});


