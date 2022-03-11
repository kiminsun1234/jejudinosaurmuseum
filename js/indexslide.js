// html 마크업부분에서 슬라이드부분 추가로 따로만들고 반응형부분에서는 none 처리로
// clone 앞뒤로 동일한 4개 말고 1개로 

// var slides = document.querySelector('.slide'),
//     slide = document.querySelectorAll('.slide div'),
//     currentIdx = 0,
//     slideCount = slide.length,
//     slideWidth = 500,
//     prevBtn = document.querySelector('.prev'),
//     nextBtn = document.querySelector('.next');

// makeClone();

// function makeClone(){
    
//     for(var i = 0; i<slideCount; i++){
//         var cloneSlide = slide[i].cloneNode(true);
//         cloneSlide.classList.add('clone');
//         slides.appendChild(cloneSlide);
//     }
//     for(var i = slideCount -1; i>=0; i--){
//         var cloneSlide = slide[i].cloneNode(true);
//         cloneSlide.classList.add('clone');
//         slides.prepend(cloneSlide);
//     }
//     updateWidth();
//     setposition();
//     setTimeout(function(){
//         slides.classList.add('animated');
//     },100);
// }

// function updateWidth(){
//     var currentSlides = document.querySelectorAll('.slide div');
//     var newSlideCount = currentSlides.length;

//     var newWidth = slideWidth * newSlideCount + 'px';
//     slides.style.width = newWidth;
// }
// function setposition(){
//     var initialTranslateValue = -slideWidth * slideCount;
//     slides.style.transform = 'translateX(' + initialTranslateValue+'px)';
// }

// nextBtn.addEventListener('click',function(){
//     moveSlide(currentIdx + 1);
// });
// prevBtn.addEventListener('click',function(){
//     moveSlide(currentIdx - 1);
// });

// function moveSlide(num){
//     slides.style.left = -num * slideWidth + 'px';
//     currentIdx = num;
//     if(currentIdx == slideCount || currentIdx == -slideCount){
//         setTimeout(function(){
//             slides.classList.remove('animated');
//             slides.style.left = '0px';
//             currentIdx = 0;
//         },500);
//         setTimeout(function(){
//             slides.classList.add('animated');
//         },600);
//     }

// }

// width.addEventListener('resize',function(){
//     var currentWidth = document.querySelector('html').offsetWidth;
//     console.log(currentWidth);
//     if(currentWidth < 700){
        
//     };
// });