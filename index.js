const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let interval;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    // время
    const second = 1;
    const minute = second * 60;
    const hour = minute * 60;
    const textHour = Math.floor(seconds / hour) > 9 ? Math.floor(seconds / hour) : '0' + Math.floor(seconds / hour) 
    const textMinute = Math.floor((seconds % hour) / minute) > 9 ? Math.floor((seconds % hour) / minute) : '0' + Math.floor((seconds % hour) / minute)
    const textSecond = Math.floor((seconds % minute) / second) > 9 ? Math.floor((seconds % minute) / second) : '0' + Math.floor((seconds % minute) / second)
    const added = `${textHour}:${textMinute}:${textSecond}`    
    е
    document.querySelector('span').innerText = added

  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  const re = new RegExp(/\d+/g)
  inputEl.value = inputEl.value.match(re)
});

buttonEl.addEventListener('click', () => {
  let seconds = Number(inputEl.value);
  interval = setInterval(() => {
    if (seconds < 0) {
      alert('Timer is finished!')
      clearInterval(interval)
      document.querySelector('span').innerText = 'hh:mm:ss'
      return
    } 
    animateTimer(seconds);
    seconds = seconds - 1;
    }, 1000)

  inputEl.value = '';
});

