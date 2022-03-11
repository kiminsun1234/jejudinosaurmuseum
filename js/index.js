var menuPanel = document.querySelectorAll('.menu');
var menuCancel = document.querySelector('#cancel');

//모바일 메뉴
for(var i = 0; i < menuPanel.length; i++){
    menuPanel[i].addEventListener('click',function(){
        closeAll();
        this.classList.add('active');
    });
};
menuCancel.addEventListener('click',function(){
    closeAll();
});
function closeAll(){
    for(var j = 0; j < menuPanel.length; j++){
        menuPanel[j].classList.remove('active');
    }
};