const time_counter = document.getElementById("clicker_time_counter");
let time1 = new Date();

const clicker = document.getElementById("clicker__counter"); 

const cookie = document.getElementById("cookie");

let counter = 0;

cookie.onclick = function() {
  counter ++;
  clicker.textContent = counter;

  if (counter % 2 === 0) {
    cookie.style.width = "200px";
  } else {
    cookie.style.width = "150px";
  }

  let time2 = new Date();
  //1 / (time1 - time2) / 1000;
  time_counter.textContent = counter / (time2.getSeconds() - time1.getSeconds());
};
