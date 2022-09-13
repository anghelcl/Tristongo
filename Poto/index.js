const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function (){
    alert('Lo sabía 😍\nI LOVE YOU BBY 💓\nMandame un mnsj por wstp 😢');
})

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function(){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('letf',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})



