const maintextmove = document.querySelector('.main span')

window.addEventListener('scroll',function(){
    const value = window.scrollY;
    console.log('scrollY',value);

    if(value>250){
        maintextmove.style.animation = 'disappear 1s ease-out forwards';
    }else{
        maintextmove.style.animation = 'textmove 1s ease-out';
    }

});
