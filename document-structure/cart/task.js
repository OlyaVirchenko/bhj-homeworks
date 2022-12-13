
const productQuantity = Array.from(document.querySelectorAll('.product__quantity'));
const cartProducts = document.querySelector('.cart__products')
//const quantityValue = element.currentTarget.querySelector('.product__quantity-value');
const addBasket = Array.from(document.querySelectorAll('.product__add'));

for (let el of productQuantity) {
	el.addEventListener('click', e => {
		counter(e);
        //addProduct(e);
	})
}

for (let el of addBasket) {
   el.addEventListener('click', e => {
        addProduct(e);
    }) 
}


function counter(element) {
	const btnDelete = element.currentTarget.querySelector('.product__quantity-control_dec');
	const btnAdd = element.currentTarget.querySelector('.product__quantity-control_inc');

    const quantityValue = element.currentTarget.querySelector('.product__quantity-value');
    const productAdd = element.currentTarget.querySelector('.product__add');


    if (element.target === btnDelete) {
    	quantityValue.innerText = Number(quantityValue.innerText) - 1;
    	Number(quantityValue.innerText) < 1 ? (quantityValue.innerText = 1) : quantityValue.innerText;   	
    } else if (element.target === btnAdd) {
    	quantityValue.innerText = Number(quantityValue.innerText) + 1;
    }

    if (cartProducts.dataset.products === 'true' && element.target === productAdd) {
        const cartProduct = Array.from(document.querySelectorAll('.cart__product'));
        for (let elem of cartProduct) {
            if (elem.dataset.id === element.currentTarget.closest('.product').dataset.id) {
                elem.querySelector('.cart__product-count').innerText =
                Number(elem.querySelector('.cart__product-count').innerText) +
                Number(quantityValue.innerText);
            }
        }
    }
}

function addProduct(element) {
    if (element.target === element.currentTarget.querySelector('.product__add')){

        if (cartProducts.dataset.products === 'true') {
            const cartProduct = Array.from(document.querySelectorAll('.cart__product'));

            for (let elem of cartProduct) {
        if (
          elem.dataset.id ===
          element.currentTarget.closest('.product').dataset.id
        ) {
          animation(
            element.currentTarget.closest('.product').querySelector('img'),
            elem.querySelector('img'),
            elem.querySelector('.cart__product-count')
          );
          return;
        }
        }


        const cartProduct = document.createElement('div');
        const product = element.currentTarget.closest('.product');
        const srcImage = product.querySelector('img').src;
        const img = document.createElement('img');
        const counter = document.createElement('div');
        //const quantity = element.querySelector('.product__quantity-value');

        cartProducts.appendChild(cartProduct);
        cartProduct.classList.add('cart__product');
        cartProduct.dataset.id = product.dataset.id;
        cartProduct.appendChild(img);
        img.classList.add('cart__product-image');
        img.src = srcImage;

        counter.classList.add('cart__product-count');
        cartProduct.appendChild(counter);

        counter.innerHTML = element.currentTarget('.product__quantity-value').innerHTML;  
        animation(product.querySelector('img'), img, cartProduct); 
    }
    cartProducts.dataset.products = true;
}



