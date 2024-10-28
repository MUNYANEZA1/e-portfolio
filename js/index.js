let count = 0;
let counts = document.getElementById('count');
let message = document.getElementById('message');

document.getElementById('btn').onclick = ()=>{
  count += 1;

  if(count < 3) {
    counts.innerText = count
  } else {
    counts.style.display = "none";
    message.innerText = 'Please Stop Cliking Me!'
  }
  
}