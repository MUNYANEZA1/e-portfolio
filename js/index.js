let count = 0;
document.getElementById('btn').onclick = ()=>{
  count += 1;
  if(count === 1){
    alert("Please stop cliking me!");
  }
}