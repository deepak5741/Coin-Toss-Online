
const flip=document.getElementById('flip');
const side=document.getElementById('side');

const flipping=()=>{
   const random=Math.floor(Math.random()*10);
random%2 ?  document.getElementById('coinFlip').src="../head.jpg "   : document.getElementById('coinFlip').src="../tail.jpg";
random%2 ? side.innerText="Head"   :side.innerText="TAIL"
}
flip.addEventListener('click', ()=>{
flipping();
})




