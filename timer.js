let time = 20;

const countdown = () => {
  console.log(time); // Stellt sicher, dass time, also "20" unser Startwert ist
  time = time - 1;
  if (time === 0) {
    clearInterval(timeOut);
    return console.log("Ende");
  }
};

let timeOut = window.setInterval(countdown, 1000);
