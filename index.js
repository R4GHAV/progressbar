

// Enter your progress in percentage over here
let progress = '70%';


setTimeout(()=>{
  document.querySelector('#progress-percentage').innerHTML=progress;
  document.querySelector('.progress').style.width= progress;

},500);
