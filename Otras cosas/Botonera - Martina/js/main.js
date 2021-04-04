document.addEventListener("DOMContentLoaded", function() {
  //escuchar evento function (e)
  window.addEventListener("keydown", function(e) {
    //console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio);
    console.log(key);

    //parte visual
    key.classList.add("playing");

    // array de key
    const keys = document.querySelectorAll(".key");

    //asignacion a cada key, un evento para cuando termine la transicion
    keys.forEach(key => key.addEventListener("transitionend", transitionEnd));

    function transitionEnd(e) {
      this.classList.remove("playing");
    }

    // parte sonora
    if (!audio) return; // para evitar "nulls" por que no hay audio
    audio.currentTime = 0; // para resetear el sonido
    audio.play();
  });
});
