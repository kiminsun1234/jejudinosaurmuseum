const maintextmove = document.querySelector('.sub h3')

window.addEventListener('scroll',function(){
    const value = window.scrollY;
    console.log('scrollY',value);

    if(value>740){
       maintextmove.style.animation = 'disappear 1s ease-out forwards';
      }else{
         maintextmove.style.animation = 'textmove 1s ease-out';
      }

});
