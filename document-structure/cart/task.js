const productQuantity = Array.from(document.querySelectorAll('.product__quantity'));
const cartProducts = document.querySelector('.cart__products')




for (let el of productQuantity) {
	el.addEventListener('click', e => {
		counter(e);
		addProduct(e)
	})
}

function counter(element) {
	const btnDelete = element.currentTarget.querySelector('.product__quantity-control_dec');
	const btnAdd = element.currentTarget.querySelector('.product__quantity-control_inc');

    const quantityValue = element.currentTarget.querySelector('.product__quantity-value');

    if (element.target === btnDelete) {
    	quantityValue.innerText = Number(quantityValue.innerText) - 1;
    	Number(quantityValue.innerText) < 1 ? (quantityValue.innerText = 1) : quantityValue.innerText;   	
    } else if (element.target === btnAdd) {
    	quantityValue.innerText = Number(quantityValue.innerText) + 1;
    }

   /* if (/*элемунт есть в корзине && element.target === btnAdd) {
        quantityValue.innerText = Number(quantityValue.innerText) + 1;
    } else if (/*элемунт есть в корзине && element.target === btnDelete) {
    	Number(quantityValue.innerText) < 1 ? (quantityValue.innerText = 1) : quantityValue.innerText;
    }*/
}

function addProduct(element) {
	const btnToBasket = element.currentTarget.querySelector('.product__add');
    const img = element.currentTarget.getAttribute("src");

    if (element.target === btnToBasket) {

    	let productInBasket = document.createElement('div');
    	productInBasket.innerHTML = `<div class="cart__product" data-id = "">
                <img class="cart__product-image" src= "">
                <div class="cart__product-count"> 2 </div>
            </div>`

        cartProducts.insertAdjacentElement('afterBegin', productInBasket);
    }

}
