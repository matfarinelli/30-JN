document.addEventListener("DOMContentLoaded", function() {
  //  alert("Hola!");

  let secondsHand = document.querySelector(".second-hand");
  let minutesHand = document.querySelector(".min-hand");
  let hoursHand = document.querySelector(".hour-hand");


  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

    console.log(seconds);
    //console.log(secondsDegrees);

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minsDegrees}deg)`;
    console.log(mins);

    const hour = now.getHours();
    const hourDegrees = ((hour / 24) * 360);
    hoursHand.style.transform = `rotate(${hourDegrees}deg)`;
    
    

}

  setInterval(setDate, 1000);
});
