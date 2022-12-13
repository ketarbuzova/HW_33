// визначення поточного часу
let
  now = new Date(),
  hour = now.getHours(),
  minute = now.getMinutes(),
  second = now.getSeconds(),
  message = '';

// зміна фрази вітання в залежності від поточного часу 
if (hour <= 6) {
  message = 'Hello';
} else if (hour <= 12) {
  message = 'Good morning';
} else if (hour <= 18) {
  message = 'Good afternoon';
} else {
  message = 'Good evening';
}

// форматування часу
minute = (minute < 10) ? '0' + minute : minute;
second = (second < 10) ? '0' + second : second;
hour = (hour < 10) ? '0' + hour : hour;

message += ', now ' + hour + ':' + minute + ':' + second;
console.log(message);

let newSeconds = new Date();
newSeconds.setSeconds(newSeconds.getSeconds() + 70);
alert(newSeconds);
let newMinutes = new Date();
newMinutes.setMinutes(newMinutes.getMinutes() - 70);
alert(newMinutes);
let newHours = new Date();
newHours.setHours(newHours.getHours() - 2);
alert(newHours);