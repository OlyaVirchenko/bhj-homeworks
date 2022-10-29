const fontSize = document.querySelectorAll('.font-size');




for (let i = 0; i < fontSize.length; i++) {
    fontSize[i].addEventListener("click", function() {
        for (let j = 0; j <= fontSize.length; j++) {
            fontSize[j].classList.remove("font-size_active");
        };
        this.classList.add("font-size_active");
    });
};
