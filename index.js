window.addEventListener('keydown', function (e) {
  // const qs = `audio[data-key="${e.keyCode}"]`;
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');

})

function removeTrasition(e) {
  if (e.propertyName !== 'transform') {
    return;
  };
  if (!this.classList.contains('playing')) {
    return;
  };
  // const target = e.target;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('transitionend', removeTrasition);

});