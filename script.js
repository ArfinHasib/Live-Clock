const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const hand = document.querySelector('.hand');

setInterval(() => {
   const now = new Date();
   console.log(now);

   const seconds = now.getSeconds();
   const minutes = now.getMinutes();
   const hours = now.getHours();

   const secondDegrees = (seconds / 60) * 360 + 90;
   const minutesDegrees = (minutes / 60) * 360 + 90;
   const hoursDegrees = (hours / 12) * 360 + 90;

   if (secondDegrees === 90) {
      secondHand.style.transition = 'none';
   }

   secondHand.style.transform = `rotate(${secondDegrees}deg)`;
   minHand.style.transform = `rotate(${minutesDegrees}deg)`;
   hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}, 1000);
