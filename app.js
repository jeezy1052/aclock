

setInterval(time, 1000)

function time() {
  let d = new Date
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();

let hour = document.querySelector('.hour')
let minutes = document.querySelector('.min')
let second = document.querySelector('.sec')

  hour.textContent = h + ':';
  minutes.textContent = m + ':';
  second.innerHTML = s;
  
}