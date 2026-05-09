console.log("hello")

const text = document.getElementById('invisible');
const div = document.getElementById('press');
const button = document.querySelector('button');
let visible = true;
function pressed() {
  if (visible) {
    text.style.display = 'none';
    div.style.background = 'grey';
    button.innerText = "PRESS TO SHOW!";
    visible = false;
  } else {
    text.style.display = 'inline';
    div.style.background = 'dimgrey';
    button.innerText = "PRESS TO HIDE!";
    visible = true;
  }
}
pressed()