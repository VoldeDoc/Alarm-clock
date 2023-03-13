//get required values
const display = document.querySelector(".text");
const audio = new Audio("1.mp3")
let alarmTime = 0;
let alarmTimeOut = 0 ;
const set_button = document.querySelector(".set");
const remove_button = document.querySelector(".remove")

//display the digitaal clock
function displayTime() {
  const now = new Date();
  const hour = content(now.getHours())
  const minute = content(now.getMinutes());
  const second = content(now.getSeconds());
  display.innerHTML =  `${hour}: ${minute}:${second}`
}
setInterval(displayTime,1000);

//used to add zero to the time if it is less than 10
function content(time) {
  if (time < 10) {
    return "0" + time
  }
  return time;
}

//set alarm
function setAlarmValue(value) {
  alarmTime = value
  console.log(alarmTime);
}

//if set alarm is clicked
set_button.onclick = () => {
  const current = new Date();
  const timeToAlarm = new Date(alarmTime);
    if (current < timeToAlarm) {
      const timeOut = timeToAlarm.getTime() - current.getTime()
      alarmTimeOut = setTimeout(() => audio.play(),timeOut);
      alert("Alarm Set");
    }
}

//if remove alarm is clicked
remove_button .onclick = () => {
  audio.pause();
  if (alarmTimeOut) {
    clearInterval(alarmTimeOut);
    alert("alarm has been successfully cancelled")
  }
}