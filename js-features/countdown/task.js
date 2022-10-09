//const timeNew = new Date;
//timeNew.setHours(0, 0, 5);
//let time = timeNew;

let timerId;
let time = document.getElementById("timer").innerHTML; 
countdown(); 
function countdown() {  
  document.getElementById("timer").innerHTML = time;
  time -= 1;
  if (time < 0) {
  	 alert("Вы победили в конкурсе!")
    //clearTimeout(timerId); 
    location.assign("https://github.com/OlyaVirchenko/bhj-homeworks/tree/master/js-features/countdown#%D0%BF%D0%BE%D0%B2%D1%8B%D1%88%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D1%83%D1%80%D0%BE%D0%B2%D0%B5%D0%BD%D1%8C-%D1%81%D0%BB%D0%BE%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B8-2-%D0%BD%D0%B5-%D0%BE%D0%B1%D1%8F%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE")
  } else {
    timerId = setTimeout(countdown, 1000);
  }
}













	




	