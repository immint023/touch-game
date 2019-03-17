document.addEventListener("DOMContentLoaded", function() {
  let duration = 60;
  const body = document.querySelector('body');
  const min = document.querySelector(".min");
  const second = document.querySelector(".second");

  min.innerHTML = parseInt(duration / 60);
  second.innerHTML = duration % 60;
  const point = document.querySelector(".point");
  function countdown() {
    duration--;
    min.innerHTML = parseInt(duration / 60);
    second.innerHTML = duration % 60;
    const a = setInterval(function() {
      duration--;
      min.innerHTML = parseInt(duration / 60);
      second.innerHTML = duration % 60;
      if (duration === 0) {
        clearInterval(a);
      }
    }, 1000);
  }

  document.addEventListener("click", function() {
    if (duration === 60) {
      countdown();
    }
    point.innerHTML = parseInt(point.innerHTML) + 1;
    if (duration === 0) {
      body.style.backgroundColor = '#B53471';
      this.removeEventListener("click", arguments.callee);
    }
  });
});
