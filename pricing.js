const words=document.getElementById('words'), writing=document.getElementById('writing');
function calc(){const w=+words.value;const game=98+Math.max(0,(w-10000)/1000)*8;const write=writing.checked?(w/1000)*30:0;document.getElementById('wordOut').textContent=w.toLocaleString()+' 字';document.getElementById('gamePrice').textContent='¥'+game;document.getElementById('writePrice').textContent='¥'+write;document.getElementById('totalPrice').textContent='¥'+(game+write)}
words.addEventListener('input',calc);writing.addEventListener('change',calc);calc();
