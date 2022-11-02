const fontSize = document.querySelectorAll('.font-size');
const content = document.querySelector('.book');

fontSize.forEach(item => {
    item.addEventListener('click', el => {
        
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



